const constants = require('../../utils/constants');
const { sendErrorResponse, sendSuccessResponse, checkObjectIdRegExp, responseMessage } = require("../../utils/responseHelpers");
const authenticationController = require('../../handlers/authenticationController');
const { authenticationServiceSchema } = require('../../routes/v1/schemas/authenticationServiceSchema');

const authenticationRoutes = async (app, opts) => {
   app.route({
      method: "GET",
      url: "/generateToken/:id",
      schema: authenticationServiceSchema.generateToken,
      // handler: authenticationController.generateToken
      handler: (request, reply) => {
         const userId = request.params.id;
         try{
            const data = {id:userId};
            const token = app.jwt.sign(data);
            sendSuccessResponse(
               reply, { statusCode: 200, message: responseMessage.USER_TOKEN_GENERATED_SUCCESSFULLY, data: { token: token } }
            );
         }catch(err){
            console.error(err.message);
            sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
         }
      }
   });
};

module.exports = {
	authenticationRoutes
};