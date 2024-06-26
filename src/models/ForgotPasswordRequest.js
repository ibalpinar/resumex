const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ForgotPasswordRequestSchema = new Schema({
   userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
   },
   email: {
      type: String,
      trim: true,
   },
   requestCode: {
      type: Number,
      min: 100000,
      max: 999999,
   },
   requestToken: {
      type: String,
      trim: true,
   },
   requestType: {
      type: String,
      trim: true,
   },
   expiredAt: {
      type: Date,
      default: Date.now,
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

const ForgotPasswordRequest = model('ForgotPasswordRequest', ForgotPasswordRequestSchema);
module.exports = ForgotPasswordRequest;
