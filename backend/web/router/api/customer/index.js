const getAllHandler = require('./getAll.handler');
const getHandler = require('./get.handler');
const createHandler = require('./create.handler');
module.exports = (router) => {

    router.get('/customer/getAll/:pageNo', getAllHandler);
    router.get('/customer/get', getHandler);
    router.post('/customer/create', createHandler);


};