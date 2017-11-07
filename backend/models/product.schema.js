const assert = require('assert');

let Schema = null;

function init() {
  const ObjectId = Schema.Types.ObjectId;
  const logs = new Schema({
    previous: {},
  });
  const productSchema = new Schema(
    {
      name: { type: String, required: true },
      description: { type: String, required: true },
      brand: { type: ObjectId, ref: 'brand' },
      images: [{ type: String }],
      videos: [{ type: String }],
      category: [{ type: String }],
      no_of_available_items: { type: Number },
      total_Qunatity: { type: Number },
      survey: [{ type: String }],
      rating: { type: String },
      status: { type: String },
      target_audience: {
        age: {
          min: {
            type: Number,
          },
          max: {
            type: Number,
          },
        },
        gender: { type: String },
        location: [
          {
            type: String,
          },
        ],
      },
      updatedBy: { type: ObjectId, ref: 'user' },
      rules: {
        perdayperuser: {
          type: Number,
        },
        perweekperuser: {
          type: Number,
        },
        permonthperuser: {
          type: Number,
        },
      },
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    });

  return productSchema;
}

module.exports = schema => {
  assert.ok(schema);
  Schema = schema;
  return init();
};
