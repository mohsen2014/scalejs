// modules
module.exports = class Notification {
  constructor(sandbox) {
    this.sandbox = sandbox;

    this.sandbox.subscribe('notification:new', this.show);
  }
  load(params) {
    this.show(params)
  }
  show(payload) {
    // show new notification
    console.log('new notification', payload);
  }
  static toString() {
    return 'notification';
  }
}

