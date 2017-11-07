const Joi = require('joi');
const Customer = rootRequire('models').Customer;

// const indexMapping = rootRequire('models').IndexMapping;

const { customerJoiSchema } = rootRequire('commons').SCHEMA;
const { ValidationError } = rootRequire('commons').ERROR;

function enrichCustomerObj(body) {
  return {
    name: body.name,
    email: body.email,
    password: body.password,
    mobile_no: body.mobile_no,
    dob: body.dob,
    state: body.state,
    city: body.city,
    country: body.country,
    is_active: body.is_active,
    interests: body.interests,
    addressess: body.addressess,
  };
}

async function logic({ body, context }) {
  try {
    const CustomerObj = enrichCustomerObj(body, context);
    const { error } = Joi.validate(CustomerObj, customerJoiSchema);
    if (error) throw new ValidationError(`Customer Validation Error : ${error.message}`);
    const customer = await Customer.findOne({ email: CustomerObj.email });
    if (customer) throw new ValidationError('Email already exists');
    const CustomerOb = new Customer(CustomerObj);
    return await CustomerOb.save();
  } catch (e) {
    logger.error(e);
    throw e;
  }
}

function handler(req, res, next) {
  logic(req)
    .then(data => {
      res.json({
        success: true,
        data,
      });
    })
    .catch(err => next(err));
}
module.exports = handler;
