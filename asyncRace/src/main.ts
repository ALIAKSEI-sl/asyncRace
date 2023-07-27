import app from './app';
import EventHandler from './modules/eventHandler';
import EventListener from './modules/eventListener';
import './style.scss';

await app.start(EventHandler, EventListener);
