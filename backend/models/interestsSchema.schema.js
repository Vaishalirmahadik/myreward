const assert = require('assert');

let Schema = null;

function init() {
  const ObjectId = Schema.Types.ObjectId;
  const logs = new Schema({
    previous: {}
  });
  const interestsSchema = new Schema(
    {
      name: { type: String, required: true },
      category: [{ type: String }],
      updatedBy: { type: ObjectId, ref: 'user' },
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

  return interestsSchema;
}

module.exports = schema => {
  assert.ok(schema);
  Schema = schema;
  return init();
};
