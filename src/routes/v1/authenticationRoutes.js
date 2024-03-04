const User = require('../../models/User');
const constants = require('../../utils/constants');
const error = require('../../utils/errors');
const { comparePassword } = require('../../utils/passwordManager');
const { sendErrorResponse, sendSuccessResponse, checkObjectIdRegExp, responseMessage } = require("../../utils/responseHelpers");
const authenticationController = require('../../handlers/authenticationController');
const { authenticationServiceSchema } = require('../../routes/v1/schemas/authenticationServiceSchema');

const authenticationRoutes = async (app, opts) => {
   app.decorate("authenticate", async(request, reply) => {
      try{
         await request.jwtVerify();
      }catch(err){
         console.error(err.message);
         if(err.code == error.FST_JWT_AUTHORIZATION_TOKEN_INVALID){
            sendErrorResponse(reply, 401, responseMessage.AUTHORIZATION_TOKEN_INVALID);
         }else{
            sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
         }
      }
   });

   app.decorate("verifyEmailPassword", async(request, reply) => {
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

   });

   app.route({
      method: "GET",
      url: "/generateToken/:id",
      handler: authenticationController.generateToken
   });

   app.route({
      method: "GET",
      url: "/validateToken",
      onRequest: [app.authenticate],
      handler: (request, reply) => {
         return request.user;
      }
   });

   app.route({
      method: "POST",
      url: "/login",
      preHandler: [app.verifyEmailPassword],
      handler: authenticationController.login
   });
};

module.exports = {
	authenticationRoutes
};