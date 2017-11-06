const assert = require('assert');
const bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = 10;

let Schema = null;

function init() {
    const ObjectId = Schema.Types.ObjectId;
    const logs = new Schema({
        previous: {},
    });
    const customerSchema = new Schema({
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        mobile_no: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        dob: { type: Date },
        state: { type: String },
        city: { type: String },
        country: { type: String },
        interests: [{ type: ObjectId, ref: 'interests' }],
        addressess: [{ type: ObjectId, ref: 'addressess' }],
        orders: [{ type: ObjectId, ref: 'orders' }],
        feedbacks: [{ type: ObjectId, ref: 'feedbacks' }],
    }, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

    // userSchema.pre('save', function(next) {
    //     const user = this;
    //     // only hash the password if it has been modified (or is new)
    //     if (user.isNew || user.isModified('password')) {
    //         // generate a salt
    //         bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    //             if (err) return next(err);
    //             // hash the password using our new salt
    //             bcrypt.hash(user.password, salt, (err, hash) => {
    //                 if (err) return next(err);
    //                 // override the cleartext password with the hashed one
    //                 user.password = hash;
    //                 next();
    //             });
    //         });
    //     } else {
    //         return next();
    //     }
    // });

    // userSchema.methods.comparePassword = function(candidatePassword) {
    //     return new Promise((resolve, reject) => {
    //         bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    //             if (err) return reject(err);
    //             resolve(isMatch);
    //         });
    //     });
    // };

    return customerSchema;
}

module.exports = (schema) => {
    assert.ok(schema);
    Schema = schema;
    return init();
};