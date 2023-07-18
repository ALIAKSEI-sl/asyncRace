import { IMovement } from './engine.model';
import { ICar } from './garage.model';
import { IWinner, IWinnerFull } from './winner.model';

export interface IStorageService {
  garage: ICar[];
  countCar: number;
  pageGarage: number;
  winners: IWinnerFull[];
  countWinners: number;
  pageWinners: number;
  initialization(): Promise<IStorageService>;
  createCar(body: Omit<ICar, 'id'>): Promise<void>;
  removeCar(id: number): Promise<void>;
  getCar(id: number): Promise<ICar>;
  updateCar(id: number, body: Omit<ICar, 'id'>): Promise<void>;
  getNextCars(): Promise<void>;
  getPrevCars(): Promise<void>;
  generatorCar(cars: Omit<ICar, 'id'>[]): Promise<void>;
  startCar(id: number): Promise<IMovement>;
  driveCar(id: number): Promise<{ success: boolean }>;
  stopCar(id: number): Promise<IMovement>;
  getWinnersInfo(data: IWinner[]): Promise<IWinnerFull[]>;
  getWinners(): Promise<void>;
  addWinner(id: number, time: number): Promise<void>;
  getPrevWinners(): Promise<void>;
  getNextWinners(): Promise<void>;
  sortingWinners(param: string): Promise<void>;
  changeVisibilityArrow(): void;
}
