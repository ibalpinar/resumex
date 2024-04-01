const User = require('../models/User');
const constants = require('../utils/constants');
const {
   sendErrorResponse,
   sendSuccessResponse,
   responseMessage,
   checkObjectIdRegex,
} = require('../utils/responseHelpers');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

module.exports = {
   generateToken: async (request, reply) => {
      let userId = request.params.id;
      userId = new ObjectId(userId);
      if (checkObjectIdRegex.test(userId))
         return sendErrorResponse(reply, 400, responseMessage.CAST_OBJECTID_ERROR + ` ${userId}`);

      try {
         let user = await User.findById(userId).select(constants.selectUserFields);
         if (!user)
            return sendSuccessResponse(reply, { statusCode: 204, message: responseMessage.NO_USER_FOUND, data: {} });

         const authData = { _id: userId };
         const authToken = request.server.jwt.sign(authData, { expiresIn: process.env.DEFAULT_TOKEN_EXPIRATION_TIME });
         return sendSuccessResponse(reply, { statusCode: 200, message: responseMessage.USER_TOKEN_GENERATED_SUCCESSFULLY, data: { authToken: authToken } });
      } catch (err) {
         console.error(err.message);
         return sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },
};
