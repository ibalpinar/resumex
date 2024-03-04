const User = require('../models/User');
const constants = require('../utils/constants');
const { sendErrorResponse, sendSuccessResponse, checkObjectIdRegExp, responseMessage } = require("../utils/responseHelpers");

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
            email: user.email
         };
         const authToken = request.server.jwt.sign(authData, { expiresIn: process.env.DEFAULT_TOKEN_EXPIRATION_TIME });
         sendSuccessResponse(
            reply, { statusCode: 200, message: responseMessage.USER_LOGGED_IN_SUCCESSFULLY, data: { authToken: authToken } }
         );
      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   }
};
