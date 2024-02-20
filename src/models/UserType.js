const mongoose = require('mongoose');
const validator = require('validator');
const { Schema, model } = mongoose;

const UserTypeSchema = new Schema({
   name: {
      type: String,
      required: [true, "Name is required field!"],
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
   }
});

const UserType = model('UserType', UserTypeSchema);

module.exports = UserType;
