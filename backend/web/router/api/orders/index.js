const getAllHandler = require('./getAll.handler');
const getHandler = require('./get.handler');
const updateHandler = require('./update.handler');

module.exports = (router) => {

    router.get('/orderadmin//getAll/:pageNo', getAllHandler);
    router.get('/order/admin/get', getHandler);
    router.get('/order/admin/update', updateHandler);


};