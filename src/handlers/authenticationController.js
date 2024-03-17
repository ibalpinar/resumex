const User = require('../models/User');
const ForgotPasswordRequest = require('../models/ForgotPasswordRequest');
const { bcryptPassword } = require('../utils/passwordManager');
const constants = require('../utils/constants');
const { sendErrorResponse, sendSuccessResponse, checkEmailRegex, responseMessage } = require("../utils/responseHelpers");
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
         return sendSuccessResponse(
            reply, { statusCode: 200, message: responseMessage.USER_TOKEN_GENERATED_SUCCESSFULLY, data: { authToken: authToken } }
         );
      }catch(err){
         console.error(err.message);
         return sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   }

};
