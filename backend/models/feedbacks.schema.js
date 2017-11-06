const assert = require('assert');

let Schema = null;

function init() {
    const ObjectId = Schema.Types.ObjectId;
    const logs = new Schema({
        previous: {},
    });
    const feedbacksSchema = new Schema({
        customer: { type: ObjectId, ref: 'customer' },
        type: { type: String, required: true },
        product: { type: ObjectId, ref: 'product' },
        survey: [{
            ques: { type: String },
            ans: { type: String }
        }],
        audioUrl: { type: String },
        videoUrl: { type: String },
    }, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

    return feedbacksSchema;
}

module.exports = (schema) => {
    assert.ok(schema);
    Schema = schema;
    return init();
};