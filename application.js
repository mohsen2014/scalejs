const Sandbox = require('./sandbox');
const EventBus = require('./midiator');
const Core = require('./core');
const Dialog = require('./modulesFolder/dialog');
const Notification = require('./modulesFolder/notification');
const DOM = require('./extentions/dom');
const HTTP = require('./extentions/http');

// application itself!

module.exports = class Application {
  constructor() {
    this.sandbox = new Sandbox();
    this.eventBus = new EventBus();
    this.core = new Core();

    this.sandbox.setCore(this.core);
    this.core.setSandbox(this.sandbox);
    this.core.setMidiatir(this.eventBus);

    this.modules = [Notification, Dialog];
    // const extensions = [ new Http(), new DOM() ];
  }

  boot() {

    this.core.setEventBus(this.eventBus);

    this.modules.map(module => this.core.register(module));
    // extensions.map(extension => this.core.use(extension));

    this.sandbox.setCore(this.core);
  }
}