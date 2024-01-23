const mongoose = require('mongoose');
const { Schema } = mongoose;
const { model } = mongoose;

const UserSchema = new Schema({
    name: {type: String, required: true},
    age: {type: Number, required: false},
    email: {type: String, required: true}
});

const Users = model('User', UserSchema);

module.exports = Users;
