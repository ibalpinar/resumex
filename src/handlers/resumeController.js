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
            sendErrorResponse(reply, 400, responseMessage.CAST_OBJECTID_ERROR + ` ${resume.userId}`);
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
      const resumeId = request.params.id;

      try{
         if(checkObjectIdRegExp.test(resumeId)){
            const resume = await Resume.findById(resumeId).select(constants.selectResumeFields);
            if(resume){
               sendSuccessResponse(
                  reply, { statusCode: 200, message: responseMessage.RESUME_LISTED_SUCCESSFULLY, data: resume }
               );
            }else{
               sendErrorResponse(reply, 404, responseMessage.NO_RESUME_FOUND);
            }
         }else{
            sendErrorResponse(reply, 400, responseMessage.CAST_OBJECTID_ERROR + ` ${resumeId}`);
         }
      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   updateResumeById: async (request, reply) => {
      // const userId = request.params.id;
      // const userUpdates = request.body;
      try{

      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   deleteResumeById: async (request, reply) => {
      const resumeId = request.params.id;
      try{
         if(checkObjectIdRegExp.test(resumeId)){
            const resumeToDelete = await Resume.findById(resumeId).select(constants.selectResumeFields);
            if(resumeToDelete){
               await Resume.findByIdAndDelete(resumeId);
               sendSuccessResponse(
                  reply, { statusCode: 200, message: responseMessage.RESUME_DELETED_SUCCESSFULLY, data: resumeToDelete }
               );
            }else{
               sendErrorResponse(reply, 404, responseMessage.NO_RESUME_FOUND);
            }
         }else{
            sendErrorResponse(reply, 400, responseMessage.CAST_OBJECTID_ERROR + ` ${userId}`);
         }

      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   deleteAllResumes: async (request, reply) => {
      try{
         let numberOfResumes = await Resume.countDocuments({});
         if(numberOfResumes != 0){
            await Resume.deleteMany();
            sendSuccessResponse(
               reply, { statusCode: 200, message: responseMessage.ALL_RESUMES_DELETED_SUCCESSFULLY, data: null }
            );
         }else{
            sendErrorResponse(reply, 404, responseMessage.NO_RESUMES_FOUND);
         }
      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },
};
