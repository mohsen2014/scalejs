module.exports = class Dialog {
  constructor(sandbox) {
    this.sandbox = sandbox;
  }
  save() {
    // save dialog data
    this.sandbox.publish('notification:new', 'dialog saved successfully!');
  }
}

