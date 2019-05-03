let Application = require('./application');
const app = new Application();
app.boot();
app.core.start('notification')