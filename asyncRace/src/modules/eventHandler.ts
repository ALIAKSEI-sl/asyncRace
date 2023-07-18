import { IStorageService } from '../models/store.model';
import { ITemplateBuilder } from '../models/templateBuilder.model';

export default class EventHandler {
  updateCarId: number;

  modelCar: string[];

  isWinner: boolean;

  constructor(
    private template: ITemplateBuilder,
    private storage: IStorageService
  ) {
    this.isWinner = true;
    this.updateCarId = 0;
    this.modelCar = [
      'Opel',
      'Honda',
      'Kia',
      'Porsche',
      'Volkswagen',
      'Hyundai',
      'Hyundai',
      'Geely',
      'Lada',
      'Renault',
      'Peugeot',
    ];
  }

  public async submitForms(event: SubmitEvent) {
    event.preventDefault();
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
    this.template.updateContainer(this.storage);
  }

  private async updateCar(name: string, color: string) {
    await this.storage.updateCar(this.updateCarId, { name, color });
    this.template.updateContainer(this.storage);
  }

  public async removeCar(button: HTMLButtonElement) {
    const id = +button.id.replace('remove-car-', '');
    await this.storage.removeCar(id);
    this.template.updateContainer(this.storage);
  }

  public async selectCar(button: HTMLButtonElement) {
    const id = +button.id.replace('select-car-', '');
    const { name, color } = await this.storage.getCar(id);

    const form = document.querySelector('#update') as HTMLFormElement;
    const inputName = form.nameCar as HTMLInputElement;
    const inputColor = form.color as HTMLInputElement;
    const btn = form.button as HTMLFormElement;
    inputName.value = name;
    inputColor.value = color;
    inputName.disabled = false;
    inputColor.disabled = false;
    inputColor.value = color;
    btn.disabled = false;

    this.updateCarId = id;
  }

  public async nextPageGarage() {
    await this.storage.getNextCars();
    this.template.updateContainer(this.storage);
  }

  public async nextPageWinners() {
    await this.storage.getNextWinners();
    this.template.updateContainerWinner(this.storage);
    this.template.updateViewWinner();
  }

  public async prevPageGarage() {
    await this.storage.getPrevCars();
    this.template.updateContainer(this.storage);
  }

  public async prevPageWinners() {
    await this.storage.getPrevWinners();
    this.template.updateContainerWinner(this.storage);
    this.template.updateViewWinner();
  }

  public async generatorCar() {
    const cars = Array.from({ length: 100 }, () => ({
      name: this.getRandomModel(),
      color: this.getRandomColor(),
    }));
    await this.storage.generatorCar(cars);
    this.template.updateContainer(this.storage);
  }

  private getRandomColor() {
    const lett = '123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
      color += lett[Math.floor(Math.random() * lett.length)];
    }
    return color;
  }

  private getRandomModel() {
    return this.modelCar[Math.floor(Math.random() * this.modelCar.length)];
  }

  public async startCar(button: HTMLButtonElement) {
    const id = +button.id.replace('start-engine-car-', '');
    this.moveCar(id);
  }

  private async moveCar(id: number, carElem?: HTMLDivElement) {
    const carMovement = await this.storage.startCar(id);
    const time = +(
      carMovement.distance / carMovement.velocity / 1000 +
      1
    ).toFixed(1);
    const car =
      carElem || (document.querySelector(`#car-${id}`) as HTMLDivElement);
    car.style.transition = `transform ${time}s linear`;
    car.style.transform = `translateX(${window.innerWidth - 200}px)`;
    const { success } = await this.storage.driveCar(id);
    if (!success) {
      const computedStyle = window.getComputedStyle(car);
      car.style.transform = computedStyle.transform;
      car.style.transition = 'none';
    }
    const transitionEndHandler = () => {
      if (this.isWinner) {
        this.template.showWinner(this.storage, id, time);
        this.storage.addWinner(id, time);
        this.isWinner = false;
        this.template.updateContainerWinner(this.storage);
      }
      car.removeEventListener('transitionend', transitionEndHandler);
    };
    car.addEventListener('transitionend', transitionEndHandler);
  }

  public async stopCar(button: HTMLButtonElement) {
    const id = +button.id.replace('stop-engine-car-', '');
    this.resetCar(id);
  }

  private async resetCar(id: number, carElem?: HTMLDivElement) {
    this.template.hideWinner();
    const btnStart = document.querySelector(
      `#start-engine-car-${id}`
    ) as HTMLButtonElement;
    btnStart.disabled = false;

    const car =
      carElem || (document.querySelector(`#car-${id}`) as HTMLDivElement);
    car.style.transition = 'none';
    car.style.transform = 'none';
    await this.storage.stopCar(id);
  }

  public async resetRace() {
    this.isWinner = true;
    const cars = Array.from(
      document.querySelectorAll('.car')
    ) as HTMLDivElement[];

    cars.forEach((car) => {
      const id = +car.id.replace('car-', '');
      this.resetCar(id, car);
    });
  }

  public async startRace() {
    const cars = Array.from(
      document.querySelectorAll('.car')
    ) as HTMLDivElement[];

    cars.forEach(async (car) => {
      const id = +car.id.replace('car-', '');
      const btnStart = document.querySelector(
        `#start-engine-car-${id}`
      ) as HTMLButtonElement;
      btnStart.disabled = false;
      const par = await this.moveCar(id, car);
      return par;
    });
  }
}
