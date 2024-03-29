const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ContinentSchema = new Schema({
   name: {
      type: String,
      required: [true, 'Name is required field!'],
      trim: true,
   },
   code: {
      type: String,
      trim: true,
   },
   createdAt: {
      type: Date,
      default: Date.now,
      trim: true,
   },
   updatedAt: {
      type: Date,
      default: null,
      trim: true,
   },
   deletedAt: {
      type: Date,
      default: null,
      trim: true,
   },
});

const Continent = model('Continent', ContinentSchema);
module.exports = Continent;
