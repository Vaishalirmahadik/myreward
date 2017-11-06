const getAllHandler = require('./getAll.handler');
const getHandler = require('./get.handler');
const updateHandler = require('./update.handler');

module.exports = (router) => {

    router.get('/order/getAll/:pageNo', getAllHandler);
    router.get('/order/get', getHandler);
    router.get('/order/update', updateHandler);


};