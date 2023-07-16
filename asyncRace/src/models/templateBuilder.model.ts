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
  updateContainer(storage: IStorageService): void;
}
