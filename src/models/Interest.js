const mongoose = require('mongoose');
const validator = require('validator');
const { Schema, model } = mongoose;

const InterestSchema = new Schema({
   name: {
      type: String,
      trim: true
   },
   iconName: {
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
   }
});

const Interest = model('Interest', InterestSchema);

module.exports = Interest;
