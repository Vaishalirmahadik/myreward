const Joi = require('joi');

const schema = Joi.object().keys({
  client: Joi.string().required(),
  account_number: Joi.string().required(),
  currency: Joi.string().required(),
  amount: Joi.number().required(),
  type: Joi.any().allow(['DEBIT', 'CREDIT']).required(),
  transaction_type: Joi.any().allow(['ADJUSTMENTS', 'PREFUNDING', 'INVOICING']).required(),
  remark: Joi.string().required(),
  status: Joi.any().allow(['APPROVE', 'REJECT', 'PENDING']).required(),
  rejection_reason: Joi.string().optional(),
}).unknown();

module.exports = schema;