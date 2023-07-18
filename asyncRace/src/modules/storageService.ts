import { IMovement } from '../models/engine.model';
import { ICar } from '../models/garage.model';
import { IStorageService } from '../models/store.model';
import { IWinner, IWinnerFull, Order, Sort } from '../models/winner.model';
import engine from '../requests/engine';
import garage from '../requests/garage';
import winner from '../requests/winner';

class StorageService implements IStorageService {
  public garage!: ICar[];

  public countCar!: number;

  public pageGarage: number;

  public winners!: IWinnerFull[];

  public countWinners!: number;

  public pageWinners: number;

  private orderWinners: Order = 'DESC';

  private sortWinners: Sort = 'id';

  constructor() {
    this.pageGarage = 1;
    this.pageWinners = 1;
  }

  public async sortingWinners(sort: Sort): Promise<void> {
    this.orderWinners = this.orderWinners === 'ASC' ? 'DESC' : 'ASC';
    const limit = 10;
    this.sortWinners = sort;
    const { data, count } = await winner.getAll(
      this.pageWinners,
      limit,
      this.sortWinners,
      this.orderWinners
    );
    const winnersFull = await this.getWinnersInfo(data);
    this.winners = winnersFull;
    this.countWinners = count;
  }

  public async initialization(): Promise<IStorageService> {
    await this.getCars();
    await this.getWinners();
    return this;
  }

  private async getCars(): Promise<void> {
    const { data, count } = await garage.getAll(this.pageGarage);
    this.garage = data;
    this.countCar = count;
  }

  public async getWinners(): Promise<void> {
    const { data, count } = await winner.getAll(
      this.pageWinners,
      10,
      this.sortWinners,
      this.orderWinners
    );
    const winnersFull = await this.getWinnersInfo(data);
    this.winners = winnersFull;
    this.countWinners = count;
  }

  public async getWinnersInfo(data: IWinner[]): Promise<IWinnerFull[]> {
    const cars = data.map(async (win) => {
      const { name, color } = await this.getCar(win.id);
      return { ...win, name, color };
    });
    return Promise.all(cars);
  }

  public async createCar(body: Omit<ICar, 'id'>): Promise<void> {
    await garage.create(body);
    await this.getCars();
  }

  public async removeCar(id: number): Promise<void> {
    await garage.remove(id);
    await this.getCars();
    if (this.pageGarage > 1 && this.garage.length === 1) {
      this.pageGarage -= 1;
    }
    await this.getCars();
    const carWinner = await winner.get(id);
    if (carWinner) {
      await winner.remove(id);
      await this.getWinners();
    }
  }

  public async getCar(id: number): Promise<ICar> {
    return garage.get(id);
  }

  public async updateCar(id: number, body: Omit<ICar, 'id'>): Promise<void> {
    await garage.update(id, body);
    await this.getCars();
  }

  public async getNextCars(): Promise<void> {
    this.pageGarage += 1;
    await this.getCars();
  }

  public async getNextWinners(): Promise<void> {
    this.pageWinners += 1;
    await this.getWinners();
  }

  public async getPrevCars(): Promise<void> {
    this.pageGarage -= 1;
    await this.getCars();
  }

  public async getPrevWinners(): Promise<void> {
    this.pageWinners -= 1;
    await this.getWinners();
  }

  public async generatorCar(cars: Omit<ICar, 'id'>[]) {
    await Promise.all(
      cars.map(async (car) => {
        await this.createCar(car);
      })
    );
  }

  public async startCar(id: number): Promise<IMovement> {
    return engine.control(id, 'started');
  }

  public async driveCar(id: number): Promise<{ success: boolean }> {
    return engine.switch(id, 'drive');
  }

  public async stopCar(id: number): Promise<IMovement> {
    return engine.control(id, 'stopped');
  }

  public async addWinner(id: number, time: number): Promise<void> {
    const car = await winner.get(id);
    if (car) {
      await winner.update(id, { wins: car.wins + 1, time });
    } else {
      await winner.create({ id, wins: 1, time });
    }
    this.getWinners();
  }

  public changeVisibilityArrow(): void {
    const arrow = document.querySelector(
      `#${this.sortWinners}`
    ) as HTMLSpanElement;
    if (this.orderWinners === 'ASC') {
      arrow.textContent = '↑';
    } else {
      arrow.textContent = '↓';
    }
  }
}

export default new StorageService();
