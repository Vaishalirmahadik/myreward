const router = require('express').Router();

const { requestLogger, authorization } = require('../middleware');

requestLogger(router);

// open components
require('./api/authentication')(router);

// authorization(router);

// secured components
require('./api/user')(router);
require('./api/brands')(router);
require('./api/products')(router);
require('./api/interests')(router);




/**
 * Mounting respective paths.
 * @param {object} app Express instance
 */
module.exports = function(app) {
    app.use('/api/v1', router);
};