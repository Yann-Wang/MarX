import bunyan from 'bunyan';

export default class BaseController {
  constructor() {
    this.Logger = bunyan.createLogger({ name: this.constructor.name });
  }

  getMethodByUrl(url) {
    this.Logger.info(url);
    this.Logger.info(Object.getOwnPropertyNames(this));
  }
}
