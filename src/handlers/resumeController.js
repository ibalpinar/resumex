const Resume = require('../models/Resume');
const error = require('../utils/errors');
const constants = require('../utils/constants');
const { sendErrorResponse, sendSuccessResponse, checkObjectIdRegExp, responseMessage } = require("../utils/responseHelpers");

module.exports = {
   createResume: async (request, reply) => {
      const resume = request.body;
      sendSuccessResponse(
         reply, { statusCode: 201, message: responseMessage.RESUME_CREATED_SUCCESSFULLY, data: null }
      );
   }};
