// the Fecade
module.exports = class Sandbox {
  publish() {
    // ... other complex functionalities
    this.core.publish();
  }
  subscribe() {
    // ... other complex functionalities
    this.core.subscribe();
  }
  setCore(core) {
    this.core = core;
  }
}
