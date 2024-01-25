const mongoose = require('mongoose');
const { Schema } = mongoose;
const { model } = mongoose;

const UserSchema = new Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    salt: {type: String, required: true},
    email: {type: String, required: true}
});

const Users = model('User', UserSchema);

module.exports = Users;
