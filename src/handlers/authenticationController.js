const { sendErrorResponse, sendSuccessResponse, responseMessage } = require("../utils/responseHelpers");

module.exports = {
   generateToken: async (request, reply) => {
      const userId = request.params.id;
      try{
         const authData = { _id:userId };
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
