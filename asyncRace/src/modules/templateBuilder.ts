import { ICar } from '../models/garage.model';
import { IStorageService } from '../models/store.model';
import { ITemplateBuilder } from '../models/templateBuilder.model';
import finishRace from '../template/finishRace';
import garageTemplate from '../template/garage.template';
import mainTemplate from '../template/main.template';
import winnersTemplate from '../template/winners.template';

class TemplateBuilder implements ITemplateBuilder {
  public container!: HTMLDivElement;

  public garageChild!: HTMLDivElement;

  public winnersChild!: HTMLDivElement;

  public initialization(storage: IStorageService): ITemplateBuilder {
    document.body.innerHTML = mainTemplate;
    this.container = document.querySelector('.container') as HTMLDivElement;

    this.createGarageChild(storage);
    this.container.append(this.garageChild);
    this.createWinnersChild();
    return this;
  }

  public createGarageChild(storage: IStorageService) {
    const root = document.createElement('div');
    root.classList.add('page-garage');
    root.innerHTML = garageTemplate(storage);
    this.garageChild = root;
    this.paginationVisibility(storage, 'garage');
  }

  private createWinnersChild() {
    const root = document.createElement('div');
    root.classList.add('page-winners');
    root.innerHTML = winnersTemplate;
    this.winnersChild = root;
  }

  private paginationVisibility(storage: IStorageService, name: string) {
    if (name === 'garage') {
      const prevBtn = this.garageChild.querySelector(
        '.prev-btn-garage'
      ) as HTMLButtonElement;
      const nextBtn = this.garageChild.querySelector(
        '.next-btn-garage'
      ) as HTMLButtonElement;
      if (storage.pageGarage > 1) {
        prevBtn.disabled = false;
      }
      if (storage.pageGarage * 7 < storage.countCar) {
        nextBtn.disabled = false;
      }
    }
  }

  public showViewWinners(): void {
    if (this.container.firstElementChild?.classList.contains('page-garage')) {
      this.container.replaceChild(this.winnersChild, this.garageChild);
    }
  }

  public showViewGarage(): void {
    if (this.container.firstElementChild?.classList.contains('page-winners')) {
      this.container.replaceChild(this.garageChild, this.winnersChild);
    }
  }

  public updateViewGarage() {
    this.container.innerHTML = '';
    this.container.append(this.garageChild);
  }

  public updateContainer(storage: IStorageService) {
    this.createGarageChild(storage);
    this.updateViewGarage();
  }

  public showWinner(storage: IStorageService, id: number, time: number): void {
    const { name } = storage.garage.find((car) => car.id === id) as ICar;
    const wrap = document.querySelector('.wrapper');
    const finishTemplate = finishRace(name, time);
    wrap?.insertAdjacentHTML('beforeend', finishTemplate);
  }

  public hideWinner(): void {
    const popup = document.querySelector('.popup-winner');
    popup?.remove();
  }
}

export default new TemplateBuilder();
