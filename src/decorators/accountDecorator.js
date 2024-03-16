const User = require('../models/User');
const constants = require('../utils/constants');
const error = require('../utils/errors');
const { sendErrorResponse, responseMessage } = require("../utils/responseHelpers");
const { comparePassword } = require('../utils/passwordManager');

module.exports = {
   verifyEmailPassword: async (request, reply) => {
      const email = request.body.email;
      const password = request.body.password;
      try{
         const user = await User.findOne({ email: email }).select(constants.selectUserFieldsForLogin);
         if(user){
            if(!await comparePassword(password, user.password))
               sendErrorResponse(reply, 401, responseMessage.EMAIL_OR_PASSWORD_IS_INCORRECT);
         }else{
            sendErrorResponse(reply, 401, responseMessage.EMAIL_OR_PASSWORD_IS_INCORRECT);
         }
      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   }

};
