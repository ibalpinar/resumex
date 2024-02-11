const mongoose = require('mongoose');
const validator = require('validator');
const { Schema } = mongoose;
const { model } = mongoose;

const UserSchema = new Schema({
    name: {
      type: String,
      required: [true, "Name is required field!"],
      maxlength: [30, "User name must not have more then 30 characters!"],
      minlength: [2, "User name must have at least 2 characters!"],
      trim: true
   },
    lastName: {
      type: String,
      required: [true, "User last name is required field!"],
      maxlength: [70, "User last name must not have more then 70 characters!"],
      minlength: [2, "User last name must have at least 2 characters!"],
      trim: true
    },
    password: {
      type: String,
      required: [true, "Password is required field!"],
      maxlength: [64, "Password must not have more then 64 characters!"],
      minlength: [8, "Password must have at least 8 characters!"],
      trim: true
    },
    email: {
      type: String,
      required: [true, "E-mail is required field!"],
      maxlength: [150, "E-mail must not have more then 150 characters!"],
      minlength: [6, "E-mail must have at least 6 characters!"],
      validate: [validator.isEmail, 'Please enter a valid email.'],
      trim: true,
      unique : true
   }
});

const Users = model('User', UserSchema);

module.exports = Users;
