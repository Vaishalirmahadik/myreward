const Joi = require('joi');
const Customer = rootRequire('models').Customer;

const { ValidationError } = rootRequire('commons').ERROR;

async function logic({ context, body }) {
    try {
        const customer = await Customer.find({ _id: body._id });
        if (!customer) throw new ValidationError('Customer Details do not exist');
        return customer;
    } catch (e) {
        logger.error(e);
        throw e;
    }
}


function handler(req, res, next) {

    logic(req).then(data => {
            res.json({
                success: true,
                data,
            });
        })
        .catch(err => next(err));



}
module.exports = handler;