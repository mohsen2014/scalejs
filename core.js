module.exports = class Core {
  constructor() {
    this.modules = {};
  }
  // register new modules
  register(newModule) {
    this.modules[newModule.toString()] = new newModule(this.sandbox);
  }

  // use new extension (plugin)
  use(extension) {
    const prototype = Object.getOwnPropertyNames(extension.prototype);
    prototype.map(p => this[p] = p);
  }
  setMidiatir(eventBus) {
    this.eventBus = eventBus;
  }
  start(moduleName, callback) {
    this.modules[moduleName].load();
  }
  stop(module, callback) { }
  startAll(callback) { }
  stopAll(callback) { }

  publish() {
    this.eventBus.publish();
  }
  subscribe() {
    this.eventBus.subscribe();
  }

  setSandbox(sandbox) {
    this.sandbox = sandbox;
  }
  setEventBus(eventBus) {
    this.eventBus = eventBus;
  }
}
