import { IMovement } from '../models/engine.model';
import { ICar } from '../models/garage.model';
import { IStorageService } from '../models/store.model';
import { IWinner } from '../models/winner.model';
import engine from '../requests/engine';
import garage from '../requests/garage';
import winner from '../requests/winner';

class StorageService implements IStorageService {
  public garage!: ICar[];

  public countCar!: number;

  public pageGarage: number;

  public winners!: IWinner[];

  public countWinners!: number;

  public pageWinners: number;

  constructor() {
    this.pageGarage = 1;
    this.pageWinners = 1;
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

  private async getWinners(): Promise<void> {
    const { data, count } = await winner.getAll(this.pageWinners);
    this.winners = data;
    this.countWinners = count;
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

  public async getPrevCars(): Promise<void> {
    this.pageGarage -= 1;
    await this.getCars();
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
}

export default new StorageService();
