const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ResumeThemeSchema = new Schema({
   name: {
      type: String,
      required: [true, 'Name is required field!'],
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

const ResumeTheme = model('ResumeTheme', ResumeThemeSchema);
module.exports = ResumeTheme;
