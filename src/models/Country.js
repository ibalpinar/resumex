const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const CountrySchema = new Schema({
   name: {
      type: String,
      required: [true, "Name is required field!"],
      trim: true
   },
   codeA2:{
      type: String,
      trim: true
   },
   codeA3:{
      type: String,
      trim: true
   },
   flagFileName: {
      type: String,
      trim: true
   },
   continentCode:{
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

const Country = model('Country', CountrySchema);

module.exports = Country;
