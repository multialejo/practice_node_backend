const store = require('../../../store/dummy.js');
const ctrl = require('./controller.js');

// Here we define wich store (db object) must to be passed

module.exports = ctrl(store);
