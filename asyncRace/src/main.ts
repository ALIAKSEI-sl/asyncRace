import app from './app';
import EventHandler from './modules/eventHandler';
import EventListener from './modules/eventListener';
import './style.scss';
import modelCar from './template/modelCar';

await app.start(EventHandler, EventListener, modelCar);
