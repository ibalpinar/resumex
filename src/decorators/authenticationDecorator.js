const error = require('../utils/errors');
const { sendErrorResponse, responseMessage } = require('../utils/responseHelpers');

module.exports = {
   authenticate: async (request, reply) => {
      try {
         await request.jwtVerify();
      } catch (err) {
         console.error(err.message);
         if (err.code == error.FST_JWT_AUTHORIZATION_TOKEN_INVALID) {
            sendErrorResponse(reply, 401, responseMessage.AUTHORIZATION_TOKEN_INVALID);
         } else {
            sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
         }
      }
   },
};
