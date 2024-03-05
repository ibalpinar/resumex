const User = require('../models/User');
const ForgorPasswordRequest = require('../models/ForgorPasswordRequest');
const constants = require('../utils/constants');
const { sendErrorResponse, sendSuccessResponse, checkObjectIdRegex, responseMessage } = require("../utils/responseHelpers");
const crypto = require("crypto");
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

module.exports = {
   generateToken: async (request, reply) => {
      const userId = request.params.id;
      try{
         const authData = {
            _id:userId
         };
         const authToken = request.server.jwt.sign(authData, { expiresIn: process.env.DEFAULT_TOKEN_EXPIRATION_TIME });
         sendSuccessResponse(
            reply, { statusCode: 200, message: responseMessage.USER_TOKEN_GENERATED_SUCCESSFULLY, data: { authToken: authToken } }
         );
      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   login: async (request, reply) => {
      const email = request.body.email;
      try{
         const user = await User.findOne({ email: email }).select(constants.selectUserFields);
         const authData = {
            _id: user._id,
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            userTypeId: user.userTypeId
         };
         const authToken = request.server.jwt.sign(authData, { expiresIn: process.env.DEFAULT_TOKEN_EXPIRATION_TIME });
         sendSuccessResponse(
            reply, { statusCode: 200, message: responseMessage.USER_LOGGED_IN_SUCCESSFULLY, data: { authToken: authToken } }
         );
      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   forgotPassword: async (request, reply) => {
      const email = request.body.email;
      try{
         const user = await User.findOne({ email: email }).select(constants.selectUserFields);
         if(user){
            let expiredAt = new Date();
            expiredAt.setHours(expiredAt.getHours() + 24);
            const forgotPasswordRequestData = {
               userId: new ObjectId(user.userId),
               email: user.email,
               requestToken: crypto.randomBytes(32).toString("hex"),
               expiredAt: expiredAt
            }
            const forgotPasswordRequest = await ForgorPasswordRequest.create(forgotPasswordRequestData);
            sendSuccessResponse(
               reply, { statusCode: 200, message: responseMessage.USER_LOGGED_IN_SUCCESSFULLY, data: { forgotPasswordRequest } }
            );
         }else{
            sendErrorResponse(reply, 404, responseMessage.NO_USER_FOUND);
         }
      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   resetPassword: async (request, reply) => {}

};
