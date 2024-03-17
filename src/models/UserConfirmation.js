const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserConfirmationSchema = new Schema({
   userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
   },
   confirmationCode: {
      type: String,
      trim: true
   },
   usedAt: {
      type : Date,
      default: Date.now,
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

const UserConfirmation = model('UserConfirmation', UserConfirmationSchema);
module.exports = UserConfirmation;
