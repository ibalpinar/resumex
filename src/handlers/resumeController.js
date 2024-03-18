const Resume = require('../models/Resume');
const User = require('../models/User');
const constants = require('../utils/constants');
const { sendErrorResponse, sendSuccessResponse, checkObjectIdRegex, responseMessage } = require("../utils/responseHelpers");
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

module.exports = {
   createResume: async (request, reply) => {
      const resume = request.body;

      resume.userId = new ObjectId(resume.userId);
      resume.skills = resume.skills.map(skill => new ObjectId(skill));
      resume.interests = resume.interests.map(interest => new ObjectId(interest));
      resume.languages = resume.languages.map(function (language) {
         return { languageId: new ObjectId(language.languageId), level: language.level };
      });

      try{
            if(checkObjectIdRegex.test(resume.userId)){
               let user = await User.findById(resume.userId).select(constants.selectUserFieldsOnlyResume);
               if(user){
                  let newResume = await Resume.create(resume);
                  user.resumeIds.push(newResume._id);
                  await User.findByIdAndUpdate(resume.userId, user);
                  return sendSuccessResponse(
                     reply, { statusCode: 201, message: responseMessage.RESUME_CREATED_SUCCESSFULLY, data: newResume }
                  );
               }
               else{
                  return sendSuccessResponse(
                     reply, { statusCode: 204, message: responseMessage.NO_USER_FOUND, data: {} }
                  );
               }
            }else{
               return sendErrorResponse(reply, 400, responseMessage.CAST_OBJECTID_ERROR + ` ${resume.userId}`);
            }
      }catch(err){
         console.error(err.message);
         return sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   getAllResumes: async (request, reply) => {
      try{
         const resumes = await Resume.find({}).select(constants.selectResumeFields);
         if(resumes.length != 0){
            return sendSuccessResponse(
               reply, { statusCode: 200, message: responseMessage.ALL_RESUMES_LISTED_SUCCESSFULLY, data: resumes }
            );
         }
         else{
            return sendSuccessResponse(
               reply, { statusCode: 204, message: responseMessage.NO_RESUMES_FOUND, data: [] }
            );
         }
      }catch(err){
         console.error(err.message);
         return sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   getResumeById: async (request, reply) => {
      const resumeId = request.params.id;
      try{
         if(checkObjectIdRegex.test(resumeId)){
            const resume = await Resume.findById(resumeId).select(constants.selectResumeFields);
            if(resume){
               return sendSuccessResponse(
                  reply, { statusCode: 200, message: responseMessage.RESUME_LISTED_SUCCESSFULLY, data: resume }
               );
            }else{
               return sendSuccessResponse(
                  reply, { statusCode: 204, message: responseMessage.NO_RESUME_FOUND, data: {} }
               );
            }
         }else{
            return sendErrorResponse(reply, 400, responseMessage.CAST_OBJECTID_ERROR + ` ${resumeId}`);
         }
      }catch(err){
         console.error(err.message);
         return sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   getCompleteResumeById: async (request, reply) => {
      const resumeId = request.params.id;
      try{
         if(checkObjectIdRegex.test(resumeId)){
            const resume = await Resume.findById(resumeId).select(constants.selectResumeFields);
            if(resume){
               let completeResume = await Resume.aggregate([
                  {
                     $lookup:{
                        from: 'interests',
                        localField: 'interests',
                        foreignField: '_id',
                        as: 'interestInformation'
                     }
                  },
                  {
                     $lookup:{
                        from: 'skills',
                        localField: 'skills',
                        foreignField: '_id',
                        as: 'skillInformation'
                     }
                  },
                  {
                     $lookup:{
                        from: 'languages',
                        localField: 'languages.languageId',
                        foreignField: '_id',
                        as: 'languageInformation'
                     }
                  }
               ]);

               return sendSuccessResponse(
                  reply, { statusCode: 200, message: responseMessage.RESUME_LISTED_SUCCESSFULLY, data: completeResume }
               );
            }else{
               return sendSuccessResponse(
                  reply, { statusCode: 204, message: responseMessage.NO_RESUME_FOUND, data: {} }
               );
            }
         }else{
            return sendErrorResponse(reply, 400, responseMessage.CAST_OBJECTID_ERROR + ` ${_userId}`);
         }
      }catch(err){
         console.error(err.message);
         return sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   updateResumeById: async (request, reply) => {
      const resumeId = request.params.id;
      const resumeUpdates = request.body;
      try{
         if(checkObjectIdRegex.test(resumeId)){
            let resumeToUpdate = await Resume.findById(resumeId);
            if(resumeToUpdate){
               await Resume.findByIdAndUpdate(resumeId, resumeUpdates);
               resumeToUpdate = await Resume.findById(resumeId).select(constants.selectResumeFields);
               return sendSuccessResponse(
                  reply, { statusCode: 200, message: responseMessage.RESUME_UPDATED_SUCCESSFULLY, data: resumeToUpdate }
               );
            }else{
               return sendSuccessResponse(
                  reply, { statusCode: 204, message: responseMessage.NO_RESUME_FOUND, data: {} }
               );
            }
         }else{
            return sendErrorResponse(reply, 400, responseMessage.CAST_OBJECTID_ERROR + ` ${resumeId}`);
         }

      }catch(err){
         console.error(err.message);
         return sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   deleteResumeById: async (request, reply) => {
      const resumeId = request.params.id;
      try{
         if(checkObjectIdRegex.test(resumeId)){
            const resumeToDelete = await Resume.findById(resumeId).select(constants.selectResumeFields);
            if(resumeToDelete){
               let user = await User.findById(resumeToDelete.userId).select(constants.selectUserFieldsOnlyResume);
               if(user){
                  const indexOfResumeId = user.resumeIds.indexOf(resumeId);
                  if(indexOfResumeId > -1){
                     user.resumeIds.splice(indexOfResumeId, 1);
                  }else{
                     console.log("There's no Resume Id in User!");
                  }
                  await User.findByIdAndUpdate(resumeToDelete.userId, user);
                  await Resume.findByIdAndDelete(resumeId);
                  return sendSuccessResponse(
                     reply, { statusCode: 200, message: responseMessage.RESUME_DELETED_SUCCESSFULLY, data: resumeToDelete }
                  );
               }
               else{
                  return sendSuccessResponse(
                     reply, { statusCode: 204, message: responseMessage.NO_USER_FOUND, data: {} }
                  );
                  }
            }else{
               return sendSuccessResponse(
                  reply, { statusCode: 204, message: responseMessage.NO_RESUME_FOUND, data: {} }
               );
            }
         }else{
            return sendErrorResponse(reply, 400, responseMessage.CAST_OBJECTID_ERROR + ` ${resumeId}`);
         }
      }catch(err){
         console.error(err.message);
         return sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   deleteAllResumes: async (request, reply) => {
      try{
         let numberOfResumes = await Resume.countDocuments({});
         if(numberOfResumes != 0){
            await Resume.deleteMany();
            return sendSuccessResponse(
               reply, { statusCode: 200, message: responseMessage.ALL_RESUMES_DELETED_SUCCESSFULLY, data: null }
            );
         }else{
            return sendSuccessResponse(
               reply, { statusCode: 204, message: responseMessage.NO_RESUMES_FOUND, data: [] }
            );
         }
      }catch(err){
         console.error(err.message);
         return sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },
};
