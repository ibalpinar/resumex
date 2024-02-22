const Resume = require('../models/Resume');
const error = require('../utils/errors');
const constants = require('../utils/constants');
const { sendErrorResponse, sendSuccessResponse, checkObjectIdRegExp, responseMessage } = require("../utils/responseHelpers");

module.exports = {
   createResume: async (request, reply) => {
      const resume = request.body;
      try{
         let newResume = await Resume.create(resume);
         sendSuccessResponse(
            reply, { statusCode: 201, message: responseMessage.RESUME_CREATED_SUCCESSFULLY, data: newResume }
         );
      }catch(err){
         console.error(err.message);
         if(err.code == error.DUPLICATE_KEY_ERROR){
            sendErrorResponse(reply, 400, responseMessage.USER_ALREADY_EXIST);
         }else{
            sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
         }
      }
   }};
