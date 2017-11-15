const getAllHandler = require('./getAll.handler');
const getHandler = require('./get.handler');

module.exports = (router) => {

    router.get('/feedback/getAll/:pageNo', getAllHandler);
    router.get('/feedback/get', getHandler);


};