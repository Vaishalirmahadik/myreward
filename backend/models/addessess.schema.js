const assert = require('assert');

let Schema = null;

function init() {
    const ObjectId = Schema.Types.ObjectId;
    const logs = new Schema({
        previous: {},
    });
    const addressessSchema = new Schema({
        name: { type: String, required: true },
        mobile_no: { type: String, required: true },
        address: { type: String, required: true },
        near_by: { type: String, required: true },
        pincode: { type: String, required: true },
        state: { type: String, required: true },
        city: { type: String, required: true },
        country: { type: String, required: true },
        address_type: { type: String, required: true }
    }, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

    return addressessSchema;
}

module.exports = (schema) => {
    assert.ok(schema);
    Schema = schema;
    return init();
};