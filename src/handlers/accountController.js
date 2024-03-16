const User = require('../models/User');
const ForgotPasswordRequest = require('../models/ForgotPasswordRequest');
const { bcryptPassword } = require('../utils/passwordManager');
const constants = require('../utils/constants');
const { sendErrorResponse, sendSuccessResponse, checkEmailRegex, responseMessage } = require("../utils/responseHelpers");
const crypto = require("crypto");
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

module.exports = {
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

   forgottenPassword: async (request, reply) => {
      const email = request.body.email;
      try{
         if(checkEmailRegex.test(email)){
            const user = await User.findOne({ email: email }).select(constants.selectUserFields);
            if(user){
               let expiredAt = new Date();
               expiredAt.setHours(expiredAt.getHours() + 24);

               const forgotPasswordRequestData = {
                  userId: new ObjectId(user._id),
                  email: user.email,
                  requestCode: Math.floor(100000 + Math.random() * 900000),
                  requestToken: crypto.randomBytes(32).toString("hex"),
                  expiredAt: expiredAt
               }

               const forgotPasswordRequest = await ForgotPasswordRequest.create(forgotPasswordRequestData);
               sendSuccessResponse(
                  reply, { statusCode: 200, message: responseMessage.FORGOTTEN_PASSWORD_REQUEST_SUCCESSFULLY_SENT, data: { forgotPasswordRequest } }
               );
            }else{
               sendSuccessResponse(
                  reply, { statusCode: 204, message: responseMessage.NO_USER_FOUND, data: {} }
               );
            }
         }else{
            sendErrorResponse(reply, 400, responseMessage.INVALID_EMAIL_ADDRESS);
         }
      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   resetPassword: async (request, reply) => {
      const passwordResetBody = request.body;

      if(passwordResetBody.password == passwordResetBody.confirmPassword){
         const user = await User.findOne({ email: passwordResetBody.email }).select(constants.selectUserFields);
         if(user){
            const now = new Date();

            let forgotPasswordRequestFilter = {
               userId: user._id,
               email: user.email,
               expiredAt: { $gte: now.toString() },
               updatedAt: { $eq: null }
            };
            let forgotPasswordRequestUpdates = { updatedAt: now };
            let userUpdates = { updatedAt: now };

            userUpdates.password = await bcryptPassword(passwordResetBody.password);
            let forgotPasswordRequest;

            if(passwordResetBody.code && typeof passwordResetBody.code !== 'undefined'){
               if(passwordResetBody.token)
                  return sendErrorResponse(reply, 400, responseMessage.INVALID_RESET_PASSWORD_REQUEST_CODE);

               forgotPasswordRequestFilter.requestCode = parseInt(passwordResetBody.code);
               forgotPasswordRequestUpdates.requestType = constants.forgottenPasswordRequestType.CODE;
               forgotPasswordRequest = await ForgotPasswordRequest.findOne(forgotPasswordRequestFilter);
            }else if(passwordResetBody.token){
               forgotPasswordRequestFilter.requestToken = passwordResetBody.token;
               forgotPasswordRequestUpdates.requestType = constants.forgottenPasswordRequestType.TOKEN;
               forgotPasswordRequest = await ForgotPasswordRequest.findOne(forgotPasswordRequestFilter);
            }else{
               return sendErrorResponse(reply, 400, responseMessage.INVALID_RESET_PASSWORD_REQUEST_TOKEN);
            }

            if(forgotPasswordRequest){
               await ForgotPasswordRequest.findByIdAndUpdate(forgotPasswordRequest._id, forgotPasswordRequestUpdates);
               await User.findByIdAndUpdate(forgotPasswordRequest.userId, userUpdates);
               return sendSuccessResponse(
                  reply, { statusCode: 200, message: responseMessage.PASSWORD_CHANGED_SUCCESSFULLY, data: null }
               );
            }else{
               return sendErrorResponse(reply, 400, responseMessage.INVALID_RESET_PASSWORD_REQUEST_CODE);
            }
         }else{
            sendSuccessResponse(
               reply, { statusCode: 204, message: responseMessage.NO_USER_FOUND, data: {} }
            );
         }
      }else{
         return sendErrorResponse(reply, 400, responseMessage.PASS_CONFIRM_PASS_DONT_MATCH);
      }
   }
};