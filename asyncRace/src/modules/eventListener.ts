import { IStorageService } from '../models/store.model';
import { ITemplateBuilder } from '../models/templateBuilder.model';
import EventHandler from './eventHandler';

export default class EventListener {
  garageBtn!: HTMLButtonElement;

  winnersBtn!: HTMLButtonElement;

  constructor(
    private template: ITemplateBuilder,
    private storage: IStorageService,
    private helper: EventHandler
  ) {
    this.queryElements();
  }

  private queryElements() {
    this.garageBtn = document.querySelector(
      '.garage-button'
    ) as HTMLButtonElement;
    this.winnersBtn = document.querySelector(
      '.winners-button'
    ) as HTMLButtonElement;
  }

  public listen() {
    this.changeView();
    this.listenContainer();
  }

  private listenContainer() {
    this.template.container.addEventListener('submit', (event) => {
      this.helper.submitForms(event);
    });

    this.template.container.addEventListener('click', (event) => {
      this.clickHandling(event);
    });
  }

  private async clickHandling(event: Event) {
    const button = event.target as HTMLButtonElement;
    if (button.classList.contains('remove-button')) {
      this.helper.removeCar(button);
    } else if (button.classList.contains('select-button')) {
      this.helper.selectCar(button);
    } else if (button.classList.contains('next-btn-garage')) {
      this.helper.nextPageGarage();
    } else if (button.classList.contains('prev-btn-garage')) {
      this.helper.prevPageGarage();
    } else if (button.classList.contains('generator-button')) {
      button.disabled = true;
      await this.helper.generatorCar();
      button.disabled = false;
    } else if (button.classList.contains('start-engine-button')) {
      await this.helper.startCar(button);
    } else if (button.classList.contains('stop-engine-button')) {
      await this.helper.stopCar(button);
    }
  }

  private changeView() {
    this.winnersBtn.addEventListener('click', () => {
      this.template.showViewWinners();
    });
    this.garageBtn.addEventListener('click', () => {
      this.template.showViewGarage();
    });
  }
}
