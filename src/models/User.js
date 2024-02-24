const mongoose = require('mongoose');
const validator = require('validator');
const { Schema, model } = mongoose;

/**
 * TODO: This section must be simplified!
 * IMPORTANT: Don't add a new field without reading below!
 *
 * ##########################################################################
 * ##########################################################################
 * ### Don't forget to add the new fields to the following files as well  ###
 * ###    - Response section of model schema                              ###
 * ###    - DEFAULT_RESPONSE_USER_SCHEMA in response helper               ###
 * ###    - selectUserFields in utils/constants at db queries             ###
 * ###    - And removePasswordKey in utils/passwordManager                ###
 * ##########################################################################
 * ##########################################################################
 */

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
   },
   userType: {
      type: String,
      trim: true
   },
   createdAt: {
      type : Date,
      default: Date.now,
      trim: true
   },
   updatedAt: {
      type : Date,
      default: null,
      trim: true
   },
   deletedAt: {
      type : Date,
      default: null,
      trim: true
   },
   isSuspended: {
      type : Boolean,
      default: false
   },
   isEmailConfirmed: {
      type : Boolean,
      default: false
   }
});

const User = model('User', UserSchema);

module.exports = User;
