const Joi = require('joi');

const schema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  mobile_no: Joi.string().required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{2,16}$/).required(),
  dob: Joi.string().required(),
  state: Joi.string().required(),
  city: Joi.string().required(),
  country: Joi.string().required(),
  is_active: Joi.boolean().required(),
  interests: Joi.array(),
  addressess: Joi.array(),
  logs: Joi.array().optional(),
});

module.exports = schema;
