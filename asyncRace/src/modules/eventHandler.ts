import { ICar } from '../models/garage.model';
import { IStorageService } from '../models/store.model';
import { ITemplateBuilder } from '../models/templateBuilder.model';
import modelCar from '../template/modelCar';

export default class EventHandler {
  updateCarId;

  isWinner;

  constructor(
    private template: ITemplateBuilder,
    private storage: IStorageService
  ) {
    this.isWinner = true;
    this.updateCarId = 0;
  }

  public changeView(view: 'winners' | 'garage'): void {
    if (view === 'garage') {
      this.template.showViewGarage();
    } else this.template.showViewWinners();
  }

  public async submitForms(event: SubmitEvent) {
    event.preventDefault();
    this.template.toggleBtnDisable('.button-create');
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const name = data.get('nameCar') as string;
    const color = data.get('color') as string;
    if (name && form.id === 'create') {
      await this.createCar(name, color);
    } else if (name && form.id === 'update') {
      await this.updateCar(name, color);
      this.updateCarId = 0;
    }
  }

  private async createCar(name: string, color: string) {
    await this.storage.createCar({ name, color });
    this.template.changeViewGarage(this.storage);
  }

  private async updateCar(name: string, color: string) {
    await this.storage.updateCar(this.updateCarId, { name, color });
    this.template.changeViewGarage(this.storage);
    this.template.createWinnersChild(this.storage);
  }

  public async removeCar(button: HTMLButtonElement) {
    const id = +button.id.replace('remove-car-', '');
    await this.storage.removeCar(id);
    this.template.changeViewGarage(this.storage);
    this.template.createWinnersChild(this.storage);
  }

  public async selectCar(button: HTMLButtonElement) {
    this.template.toggleBtnDisable('.button-create');
    const id = +button.id.replace('select-car-', '');
    const { name, color } = this.storage.garage.find(
      (car) => car.id === id
    ) as ICar;
    const form = document.querySelector('#update') as HTMLFormElement;
    const inputName = form.nameCar as HTMLInputElement;
    const inputColor = form.color as HTMLInputElement;
    const btn = form.button as HTMLFormElement;
    inputName.value = name;
    inputColor.value = color;
    inputName.disabled = false;
    inputColor.disabled = false;
    btn.disabled = false;

    this.updateCarId = id;
  }

  public async nextPageGarage() {
    await this.storage.getNextCars();
    this.template.changeViewGarage(this.storage);
    const btnRace = document.querySelector('.race-btn') as HTMLButtonElement;
    if (btnRace.disabled) {
      await this.resetRace();
    }
  }

  public async prevPageGarage() {
    await this.storage.getPrevCars();
    this.template.changeViewGarage(this.storage);
    const btnRace = document.querySelector('.race-btn') as HTMLButtonElement;
    if (btnRace.disabled) {
      await this.resetRace();
    }
  }

  public async nextPageWinners() {
    await this.storage.getNextWinners();
    this.template.changeViewWinner(this.storage);
    this.storage.changeVisibilityArrow();
  }

  public async prevPageWinners() {
    await this.storage.getPrevWinners();
    this.template.changeViewWinner(this.storage);
    this.storage.changeVisibilityArrow();
  }

  public async generatorCars() {
    const cars = Array.from({ length: 100 }, () => ({
      name: this.getRandomModel(),
      color: this.getRandomColor(),
    }));
    await this.storage.generatorCars(cars);
    this.template.changeViewGarage(this.storage);
  }

  private getRandomColor() {
    const sign = '123456789ABCDEF';
    const limit = 6;
    let color = '#';
    for (let i = 0; i < limit; i += 1) {
      color += sign[Math.floor(Math.random() * sign.length)];
    }
    return color;
  }

  private getRandomModel() {
    const model =
      modelCar[Math.floor(Math.random() * modelCar.length)].split(' ')[0];
    const mark =
      modelCar[Math.floor(Math.random() * modelCar.length)].split(' ')[1];
    return `${model} ${mark}`;
  }

  public async startCar(button: HTMLButtonElement) {
    const id = +button.id.replace('start-engine-car-', '');
    await this.moveCar(id, false);
  }

  public async startRace() {
    this.storage.garage.forEach(async (car) => {
      this.template.toggleBtnDisable(`#start-engine-car-${car.id}`);
      await this.moveCar(car.id, true);
    });
  }

  private async moveCar(id: number, isRace: boolean) {
    const { distance, velocity } = await this.storage.startCar(id);
    this.template.toggleBtnDisable(`#stop-engine-car-${id}`);
    this.template.switchControlsBtn(true);
    const time = +(distance / velocity / 1000).toFixed(1);
    const car = this.template.garageChild.querySelector(
      `#car-${id}`
    ) as HTMLDivElement;
    this.template.animationCarStart(car, time);
    if (isRace) this.subscribeWinner(car, id, time);
    const { success } = await this.storage.driveCar(id);
    if (!success) this.template.animationCarStop(car);
  }

  private subscribeWinner(car: HTMLDivElement, id: number, time: number) {
    const transitionEndHandler = () => {
      if (this.isWinner) this.handleWinner(id, time);
      car.removeEventListener('transitionend', transitionEndHandler);
    };
    car.addEventListener('transitionend', transitionEndHandler);
  }

  private async handleWinner(id: number, time: number) {
    this.isWinner = false;
    const { name } = this.storage.garage.find((c) => c.id === id) as ICar;
    this.template.showWinner(name, time);
    await this.storage.updateWinner(id, time);
    this.template.createWinnersChild(this.storage);
  }

  public async stopCar(button: HTMLButtonElement) {
    const id = +button.id.replace('stop-engine-car-', '');
    await this.resetCar(id);
  }

  public async resetRace() {
    this.isWinner = true;
    this.storage.garage.forEach(async (car) => {
      await this.resetCar(car.id);
    });
    this.template.hideWinner();
  }

  private async resetCar(id: number) {
    this.storage.signalAbort(id);
    await this.storage.stopCar(id);
    this.template.resetCar(id);
  }

  public async sortingWinners(by: 'wins' | 'time') {
    await this.storage.sortingWinners(by);
    this.template.changeViewWinner(this.storage);
    this.storage.changeVisibilityArrow();
  }
}
