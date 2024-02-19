const mongoose = require('mongoose');
const validator = require('validator');
const { Schema, model } = mongoose;

const SkillSchema = new Schema({
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

const Skill = model('Skill', SkillSchema);

module.exports = Skill;
