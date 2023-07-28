import { IStorageService } from '../models/store.model';
import { BtnType, ITemplateBuilder } from '../models/templateBuilder.model';
import finishRaceTemplate from '../template/finishRace.template';
import garageTemplate from '../template/garage.template';
import mainTemplate from '../template/main.template';
import winnersTemplate from '../template/winners.template';

class TemplateBuilder implements ITemplateBuilder {
  private container!: HTMLDivElement;

  public garageChild!: HTMLDivElement;

  public winnersChild!: HTMLDivElement;

  private containerWinners!: HTMLElement;

  private containerGarage!: HTMLElement;

  private limitCar;

  private limitWinners;

  constructor() {
    this.limitCar = 7;
    this.limitWinners = 10;
  }

  public initialization(storage: IStorageService): void {
    document.body.innerHTML = mainTemplate;
    const container = document.body.querySelector(
      '.container'
    ) as HTMLDivElement;
    const containerGarage = this.createElement('div', 'container-garage');
    const containerWinners = this.createElement('div', 'container-winners');
    containerWinners.classList.add('hide');
    container.append(containerGarage, containerWinners);
    this.containerGarage = containerGarage;
    this.containerWinners = containerWinners;
    this.createGarageChild(storage);
    this.createWinnersChild(storage);
    containerGarage.append(this.garageChild);
    containerWinners.append(this.winnersChild);
  }

  private createElement(name: string, className: string) {
    const elem = document.createElement(name);
    elem.classList.add(className);
    return elem;
  }

  private createGarageChild(storage: IStorageService) {
    const root = document.createElement('div');
    root.classList.add('page-garage');

    root.innerHTML = garageTemplate(
      storage.countCar,
      storage.pageGarage,
      storage.garage
    );
    this.garageChild = root;
    this.paginationVisibility('garage', storage.pageGarage, storage.countCar);
  }

  public createWinnersChild(storage: IStorageService): void {
    const root = document.createElement('div');
    root.classList.add('page-winners');
    root.innerHTML = winnersTemplate(
      storage.countWinners,
      storage.pageWinners,
      storage.winners
    );
    this.winnersChild = root;
    this.paginationVisibility(
      'winner',
      storage.pageWinners,
      storage.countWinners
    );
  }

  private paginationVisibility(pageName: string, page: number, count: number) {
    const parent = pageName === 'garage' ? this.garageChild : this.winnersChild;
    const limit = pageName === 'garage' ? this.limitCar : this.limitWinners;
    const prevBtn = parent.querySelector(`.prev-btn-${pageName}`) as BtnType;
    const nextBtn = parent.querySelector(`.next-btn-${pageName}`) as BtnType;
    if (page > 1) prevBtn.disabled = false;
    if (page * limit < count) nextBtn.disabled = false;
  }

  public showViewWinners(): void {
    if (this.containerWinners.classList.contains('hide')) {
      this.containerGarage.classList.add('hide');
      this.containerWinners.classList.remove('hide');
    }
  }

  public showViewGarage(): void {
    if (this.containerGarage.classList.contains('hide')) {
      this.containerGarage.classList.remove('hide');
      this.containerWinners.classList.add('hide');
    }
  }

  public showWinner(name: string, time: number): void {
    const finishTemplate = finishRaceTemplate(name, time);
    this.garageChild.insertAdjacentHTML('beforeend', finishTemplate);
  }

  public hideWinner(): void {
    const popup = this.garageChild.querySelector('.popup-winner');
    popup?.remove();
  }

  public updateViewGarage() {
    this.containerGarage.innerHTML = '';
    this.containerGarage.append(this.garageChild);
  }

  public updateViewWinner(): void {
    this.containerWinners.innerHTML = '';
    this.containerWinners.append(this.winnersChild);
  }

  public changeViewGarage(storage: IStorageService) {
    this.createGarageChild(storage);
    this.updateViewGarage();
  }

  public changeViewWinner(storage: IStorageService): void {
    this.createWinnersChild(storage);
    this.updateViewWinner();
  }

  public toggleBtnDisable(selector: string): void {
    const btn = this.garageChild.querySelector(
      `${selector}`
    ) as HTMLButtonElement;
    btn.disabled = !btn.disabled;
  }

  public animationCarStart(car: HTMLDivElement, time: number): void {
    const moveCar = car;
    const widthCar = 200;
    moveCar.style.transition = `transform ${time}s linear`;
    moveCar.style.transform = `translateX(${window.innerWidth - widthCar}px)`;
  }

  private animationCarReset(id: number): void {
    const car = this.garageChild.querySelector(`#car-${id}`) as HTMLDivElement;
    car.style.transition = 'none';
    car.style.transform = 'none';
  }

  public animationCarStop(car: HTMLDivElement): void {
    const stopCar = car;
    const currentPosition = getComputedStyle(car).getPropertyValue('transform');
    stopCar.style.transform = currentPosition;
    stopCar.style.transition = 'none';
  }

  public switchControlsBtn(isStart: boolean): void {
    const btnRace = this.garageChild.querySelector('.race-btn') as BtnType;
    const btnRes = this.garageChild.querySelector('.reset-btn') as BtnType;
    if (isStart) {
      btnRace.disabled = true;
      btnRes.disabled = false;
    } else {
      const btnsStr = Array.from(
        this.garageChild.querySelectorAll('.start-engine-button')
      ) as BtnType[];
      if (btnsStr.every((e) => !e.disabled)) {
        btnRace.disabled = false;
        btnRes.disabled = true;
        this.hideWinner();
      }
    }
  }

  public resetCarBtn(id: number): void {
    const btnStr = this.garageChild.querySelector(
      `#start-engine-car-${id}`
    ) as BtnType;
    const btnStop = this.garageChild.querySelector(
      `#stop-engine-car-${id}`
    ) as BtnType;
    btnStr.disabled = false;
    btnStop.disabled = true;
  }

  public resetCar(id: number): void {
    this.resetCarBtn(id);
    this.switchControlsBtn(false);
    this.animationCarReset(id);
  }
}

export default new TemplateBuilder();
