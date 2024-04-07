const error = require('../utils/errors');
const { sendErrorResponse, responseMessage } = require('../utils/responseHelpers');
const User = require('../models/User');
const constants = require('../utils/constants');

module.exports = {
   authenticate: async (request, reply) => {
      try {
         let decoded = await request.jwtVerify();
         let userId = decoded._id;
         const user = await User.findOne({ _id: userId, deletedAt: { $eq: null } }).select(constants.selectUserFields);
         if (!user) {
            return sendErrorResponse(reply, 404, responseMessage.NO_USER_FOUND);
         }
      } catch (err) {
         console.error(err.message);
         if (err.code == error.FST_JWT_AUTHORIZATION_TOKEN_INVALID) {
            sendErrorResponse(reply, 400, responseMessage.AUTHORIZATION_TOKEN_INVALID);
         } else if (err.code == error.FST_JWT_AUTHORIZATION_TOKEN_EXPIRED) {
            sendErrorResponse(reply, 401, responseMessage.AUTHORIZATION_TOKEN_EXPIRED);
         } else {
            sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
         }
      }
   },
};
