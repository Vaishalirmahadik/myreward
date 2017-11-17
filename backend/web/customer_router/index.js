const router = require('express').Router();

const { requestLogger, authorization } = require('../middleware');

requestLogger(router);

// open components
// require('./api/authentication')(router);

// authorization(router);

// secured components

require('./api/customer')(router);
require('./api/orders')(router);
require('./api/feedbacks')(router);








/**
 * Mounting respective paths.
 * @param {object} app Express instance
 */
module.exports = function(app) {
    app.use('/api/v1', router);
};