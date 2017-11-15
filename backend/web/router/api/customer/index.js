const getAllHandler = require('./getAll.handler');
const getHandler = require('./get.handler');
const createHandler = require('./create.handler');
const loginHandler = require('./login.handler');

module.exports = (router) => {

    router.get('/customer/admin/getAll/:pageNo', getAllHandler);
    router.get('/customer/admin/get', getHandler);
    router.post('/customer/admin/create', createHandler);
    router.post('/customer/admin/login', loginHandler);
    // router.post('/customer/login', loginHandler);



};