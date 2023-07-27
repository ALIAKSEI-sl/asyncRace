import { IStorageService } from './models/store.model';
import { ITemplateBuilder } from './models/templateBuilder.model';
import EventHandler from './modules/eventHandler';
import EventListener from './modules/eventListener';
import storageService from './modules/storageService';
import templateBuilder from './modules/templateBuilder';

class App {
  constructor(
    private storage: IStorageService,
    private template: ITemplateBuilder
  ) {}

  public async start(
    Handler: typeof EventHandler,
    Listener: typeof EventListener
  ) {
    await this.storage.initialization();
    this.template.initialization(this.storage);
    const handler = new Handler(this.template, this.storage);
    const listener = new Listener(handler);
    listener.listen();
  }
}

export default new App(storageService, templateBuilder);
