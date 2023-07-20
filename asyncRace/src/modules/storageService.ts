import { IEngineClient, IMovement } from '../models/engine.model';
import { ICar, IGarageClient } from '../models/garage.model';
import { IStorageService } from '../models/store.model';
import {
  IWinner,
  IWinnerClient,
  IWinnerFull,
  Order,
  Sort,
} from '../models/winner.model';
import engine from '../requests/engine';
import garage from '../requests/garage';
import winner from '../requests/winner';

class StorageService implements IStorageService {
  public garage!: ICar[];

  public winners!: IWinnerFull[];

  public countCar!: number;

  public countWinners!: number;

  public pageGarage: number;

  public pageWinners: number;

  private sortWinners: Sort;

  private orderWinners: Order;

  public controllers: Map<number, AbortController>;

  constructor(
    private garageClient: IGarageClient,
    private engineClient: IEngineClient,
    private winnerClient: IWinnerClient
  ) {
    this.pageGarage = 1;
    this.pageWinners = 1;
    this.sortWinners = 'id';
    this.orderWinners = null;
    this.controllers = new Map();
  }

  public async initialization(): Promise<void> {
    await this.getCars();
    await this.getWinners();
  }

  private async getCars(): Promise<void> {
    const { data, count } = await this.garageClient.getAll(this.pageGarage);
    this.garage = data;
    this.countCar = count;
  }

  private async getWinners(): Promise<void> {
    const limitWinners = 10;
    const { data, count } = await this.winnerClient.getAll(
      this.pageWinners,
      limitWinners,
      this.sortWinners ?? 'ASC',
      this.orderWinners
    );
    const winnersFull = await this.getWinnersInfo(data);
    this.winners = winnersFull;
    this.countWinners = count;
  }

  private async getWinnersInfo(data: IWinner[]): Promise<IWinnerFull[]> {
    const cars = data.map(async (w) => {
      const { name, color } = await this.getCar(w.id);
      return { ...w, name, color };
    });
    return Promise.all(cars);
  }

  public async getCar(id: number): Promise<ICar> {
    return this.garageClient.get(id);
  }

  public async createCar(body: Omit<ICar, 'id'>): Promise<void> {
    await this.garageClient.create(body);
    await this.getCars();
  }

  public async updateCar(id: number, body: Omit<ICar, 'id'>): Promise<void> {
    await this.garageClient.update(id, body);
    await this.getCars();
  }

  public async removeCar(id: number): Promise<void> {
    await this.garageClient.remove(id);
    if (this.pageGarage > 1 && this.garage.length === 1) {
      this.pageGarage -= 1;
    }
    await this.getCars();
    await this.removeWinners(id);
  }

  private async removeWinners(id: number): Promise<void> {
    const carWinner = await this.winnerClient.get(id);
    if (carWinner) {
      await this.winnerClient.remove(id);
      await this.getWinners();
    }
  }

  public async getNextCars(): Promise<void> {
    this.pageGarage += 1;
    await this.getCars();
  }

  public async getPrevCars(): Promise<void> {
    this.pageGarage -= 1;
    await this.getCars();
  }

  public async getNextWinners(): Promise<void> {
    this.pageWinners += 1;
    await this.getWinners();
  }

  public async getPrevWinners(): Promise<void> {
    this.pageWinners -= 1;
    await this.getWinners();
  }

  public changeVisibilityArrow(): void {
    if (this.orderWinners) {
      const arw = document.querySelector(`#${this.sortWinners}`) as HTMLElement;
      arw.textContent = this.orderWinners === 'ASC' ? '↑' : '↓';
    }
  }

  public async generatorCars(cars: Omit<ICar, 'id'>[]): Promise<void> {
    await Promise.all(
      cars.map(async (car) => {
        await this.createCar(car);
      })
    );
  }

  public async startCar(id: number): Promise<IMovement> {
    return this.engineClient.control(id, 'started');
  }

  public async updateWinner(id: number, time: number): Promise<void> {
    const car = await this.winnerClient.get(id);
    if (car) {
      await this.winnerClient.update(id, {
        wins: car.wins + 1,
        time: time < car.time ? time : car.time,
      });
    } else {
      await this.winnerClient.create({ id, wins: 1, time });
    }
    await this.getWinners();
  }

  public async sortingWinners(sort: Sort): Promise<void> {
    this.orderWinners = this.orderWinners === 'ASC' ? 'DESC' : 'ASC';
    this.sortWinners = sort;
    await this.getWinners();
  }

  public async driveCar(id: number): Promise<{ success: boolean }> {
    const controller = new AbortController();
    this.controllers.set(id, controller);
    return this.engineClient.switch(id, 'drive', controller.signal);
  }

  public async stopCar(id: number): Promise<IMovement> {
    return this.engineClient.control(id, 'stopped');
  }

  public signalAbort(id: number): void {
    this.controllers.get(id)?.abort();
    this.controllers.delete(id);
  }
}

export default new StorageService(garage, engine, winner);
