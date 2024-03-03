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
   })
   .decorate("verifyEmailPassword", async(request, reply) => {
      const email = request.body.email;
      const password = request.body.password;
      try{
         const user = await User.findOne({ email: email }).select(constants.selectUserFieldsForLogin);
         if(user){
            if(await comparePassword(password, user.password)){
               sendSuccessResponse(
                  reply, { statusCode: 200, message: responseMessage.USER_LISTED_SUCCESSFULLY, data: user }
               );
            }else{
               sendErrorResponse(reply, 401, responseMessage.EMAIL_OR_PASSWORD_IS_INCORRECT);
            }
         }else{
            sendErrorResponse(reply, 401, responseMessage.EMAIL_OR_PASSWORD_IS_INCORRECT);
         }
      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }


   })
   ;

   app.route({
      method: "GET",
      url: "/generateToken/:id",
      handler: (request, reply) => {
         const userId = request.params.id;
         try{
            const data = {_id:userId};
            const authToken = app.jwt.sign(data);
            sendSuccessResponse(
               reply, { statusCode: 200, message: responseMessage.USER_TOKEN_GENERATED_SUCCESSFULLY, data: { authToken: authToken } }
            );
         }catch(err){
            console.error(err.message);
            sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
         }
      }
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
      handler: (request, reply) => {
         return reply.send("home...");
      }
   });
};

module.exports = {
	authenticationRoutes
};