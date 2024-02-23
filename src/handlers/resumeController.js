const Resume = require('../models/Resume');
const error = require('../utils/errors');
const constants = require('../utils/constants');
const { sendErrorResponse, sendSuccessResponse, checkObjectIdRegExp, responseMessage } = require("../utils/responseHelpers");

module.exports = {
   createResume: async (request, reply) => {
      const resume = request.body;
      try{
         if(checkObjectIdRegExp.test(resume.userId)){
            let newResume = await Resume.create(resume);
            sendSuccessResponse(
               reply, { statusCode: 201, message: responseMessage.RESUME_CREATED_SUCCESSFULLY, data: newResume }
            );
         }else{
            sendErrorResponse(reply, 400, responseMessage.CAST_OBJECTID_ERROR + ` ${userId}`);
         }
      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },
   getAllResumes: async (request, reply) => {
      try{
         const resumes = await Resume.find({}).select(constants.selectResumeFields);
         if(resumes.length != 0){
            sendSuccessResponse(
               reply, { statusCode: 200, message: responseMessage.ALL_RESUMES_LISTED_SUCCESSFULLY, data: resumes }
            );
         }
         else{
            sendErrorResponse(reply, 404, responseMessage.NO_RESUMES_FOUND);
         }
      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   getResumeById: async (request, reply) => {
      // const userId = request.params.id;
      try{
      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   updateResume: async (request, reply) => {
      // const userId = request.params.id;
      // const userUpdates = request.body;
      try{

      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   deleteResume: async (request, reply) => {
      // const userId = request.params.id;
      try{
      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   deleteAllResumes: async (request, reply) => {
      try{
         /*
         let numberOfUsers = await User.countDocuments({});
         if(numberOfUsers != 0){
            await User.deleteMany();
            sendSuccessResponse(
               reply, { statusCode: 200, message: responseMessage.ALL_USERS_DELETED_SUCCESSFULLY, data: null }
            );
         }else{
            sendErrorResponse(reply, 404, responseMessage.NO_USERS_FOUND);
         }
         */
      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },
};
