import { IStorageService } from '../models/store.model';
import { ITemplateBuilder } from '../models/templateBuilder.model';
import garageTemplate from '../template/garage.template';
import mainTemplate from '../template/main.template';
import winnersTemplate from '../template/winners.template';

class TemplateBuilder implements ITemplateBuilder {
  public main!: HTMLDivElement;

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
}

export default new TemplateBuilder();
