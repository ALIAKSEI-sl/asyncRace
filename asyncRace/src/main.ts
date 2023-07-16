import EventHandler from './modules/eventHandler';
import EventListener from './modules/eventListener';
import storageService from './modules/storageService';
import templateBuilder from './modules/templateBuilder';
import './style.scss';

const storage = await storageService.initialization();
const template = templateBuilder.initialization(storage);
const helper = new EventHandler(template, storage);
const listener = new EventListener(template, storage, helper);
listener.listen();
