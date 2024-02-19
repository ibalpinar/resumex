const mongoose = require('mongoose');
const validator = require('validator');
const { Schema } = mongoose;
const { model } = mongoose;

const UserTypeSchema = new Schema({
    typeName: {
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

const UserType = model('User', UserTypeSchema);

module.exports = UserType;
