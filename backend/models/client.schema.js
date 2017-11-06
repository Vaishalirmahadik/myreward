const assert = require('assert');

let Schema = null;

function init() {
  const ObjectId = Schema.Types.ObjectId;
  const logs = new Schema({
    previous: {},
  });
  const clientSchema = new Schema({
    client_id: { type: String, required: true },
    client_name: { type: String, required: true },
    client_label: { type: String, required: true }, // e.g.:DEMO-1001
    client_code: { type: String, required: true },
    client_address: { type: String, required: true },
    client_city: { type: String, required: true },
    client_pincode: { type: String, required: true },
    client_country: { type: String, required: true },
    client_base_currency: { type: String, required: true },
    client_invoice_currency: { type: String, required: true },
    client_invoice_currency_from_date: { type: Date, required: true },
    is_active: { type: Boolean, required: true, default: true },
    created_by: { type: ObjectId, ref: 'user', required: true },
    logs: [logs],
  }, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

  /*
  clientSchema.pre('save', () => {

  });
  */
  return clientSchema;
}

module.exports = (schema) => {
  assert.ok(schema);
  Schema = schema;
  return init();
};