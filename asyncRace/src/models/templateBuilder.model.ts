import { IStorageService } from './store.model';

export type BtnType = HTMLButtonElement;

export interface ITemplateBuilder {
  initialization(store: IStorageService): void;
  createWinnersChild(storage: IStorageService): void;
  showViewWinners(): void;
  showViewGarage(): void;
  updateViewGarage(): void;
  updateViewWinner(): void;
  changeViewGarage(storage: IStorageService): void;
  changeViewWinner(storage: IStorageService): void;
  showWinner(name: string, time: number): void;
  hideWinner(): void;
  toggleBtnDisable(selector: string): void;
  animationCarStart(car: HTMLDivElement, time: number): void;
  animationCarStop(car: HTMLDivElement): void;
  switchControlsBtn(isStart: boolean): void;
  resetCarBtn(id: number): void;
  resetCar(id: number): void;
}
