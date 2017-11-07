const assert = require('assert');

let Schema = null;

function init() {
  const ObjectId = Schema.Types.ObjectId;
  const logs = new Schema({
    previous: {},
  });
  const ordersSchema = new Schema(
    {
      customer: { type: ObjectId, ref: 'customer' },
      products: [{ type: ObjectId, ref: 'products' }],
      date_of_order: { type: Date, required: true },
      status: { type: String, required: true },
      updatedBy: { type: ObjectId, ref: 'customer' },
      createdBy: { type: ObjectId, ref: 'customer' },
      address: { type: ObjectId, ref: 'addressess' },
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    });

  return ordersSchema;
}

module.exports = schema => {
  assert.ok(schema);
  Schema = schema;
  return init();
};
