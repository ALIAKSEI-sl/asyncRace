import { BtnType } from '../models/templateBuilder.model';
import EventHandler from './eventHandler';

export default class EventListener {
  private garageBtn;

  private winnersBtn;

  private container;

  constructor(private handler: EventHandler) {
    this.garageBtn = document.querySelector('.garage-btn') as BtnType;
    this.winnersBtn = document.querySelector('.winners-btn') as BtnType;
    this.container = document.querySelector('.container') as HTMLDivElement;
  }

  public listen() {
    this.changeView();
    this.listenContainer();
  }

  private changeView() {
    this.winnersBtn.addEventListener('click', () => {
      this.handler.changeView('winners');
    });
    this.garageBtn.addEventListener('click', () => {
      this.handler.changeView('garage');
    });
  }

  private listenContainer() {
    this.container.addEventListener('submit', async (event: SubmitEvent) => {
      await this.handler.submitForms(event);
    });

    this.container.addEventListener('click', async (event: MouseEvent) => {
      await this.clickHandler(event);
    });
  }

  private async clickHandler(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    if (targetElement.classList.contains('number-wins')) {
      await this.handler.sortingWinners('wins');
    } else if (targetElement.classList.contains('record-column')) {
      await this.handler.sortingWinners('time');
    } else this.clickButton(targetElement);
  }

  private async clickButton(targetElement: HTMLElement) {
    const btn = targetElement as HTMLButtonElement;
    const className = btn.className.replace('button ', '');

    switch (className) {
      case 'remove-button':
        this.handler.removeCar(btn);
        break;
      case 'select-button':
        this.handler.selectCar(btn);
        break;
      case 'next-btn-garage':
        this.handler.nextPageGarage();
        break;
      case 'prev-btn-garage':
        this.handler.prevPageGarage();
        break;
      case 'next-btn-winner':
        this.handler.nextPageWinners();
        break;
      case 'prev-btn-winner':
        this.handler.prevPageWinners();
        break;
      case 'generator-btn':
        btn.disabled = true;
        await this.handler.generatorCars();
        btn.disabled = false;
        break;
      case 'start-engine-button':
        btn.disabled = true;
        await this.handler.startCar(btn);
        break;
      case 'stop-engine-button':
        btn.disabled = true;
        await this.handler.stopCar(btn);
        break;
      case 'race-btn':
        this.handler.startRace();
        break;
      case 'reset-btn':
        this.handler.resetRace();
        break;
      default:
        break;
    }
  }
}
