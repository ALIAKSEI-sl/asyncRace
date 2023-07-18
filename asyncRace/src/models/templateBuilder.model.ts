import { IStorageService } from './store.model';

export interface ITemplateBuilder {
  container: HTMLDivElement;
  garageChild: HTMLDivElement;
  winnersChild: HTMLDivElement;
  initialization(store: IStorageService): ITemplateBuilder;
  showViewWinners(): void;
  showViewGarage(): void;
  createGarageChild(storage: IStorageService): void;
  updateViewGarage(): void;
  updateViewWinner(): void;
  updateContainer(storage: IStorageService): void;
  showWinner(storage: IStorageService, id: number, time: number): void;
  hideWinner(): void;
  updateContainerWinner(storage: IStorageService): void;
}
