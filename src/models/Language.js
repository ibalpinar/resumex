const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const LanguageSchema = new Schema({
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

const Language = model('Language', LanguageSchema);

module.exports = Language;
