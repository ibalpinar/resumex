const Resume = require('../models/Resume');
const User = require('../models/User');
const constants = require('../utils/constants');
const { sendErrorResponse, sendSuccessResponse, checkObjectIdRegExp, responseMessage } = require("../utils/responseHelpers");
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
            if(checkObjectIdRegExp.test(resume.userId)){
               let user = await User.findById(resume.userId).select(constants.selectUserFieldsOnlyResume);
               if(user){
                  let newResume = await Resume.create(resume);
                  user.resumeIds.push(newResume._id);
                  await User.findByIdAndUpdate(resume.userId, user);
                  sendSuccessResponse(
                     reply, { statusCode: 201, message: responseMessage.RESUME_CREATED_SUCCESSFULLY, data: newResume }
                  );
               }
               else{
                  sendErrorResponse(reply, 404, responseMessage.NO_USER_FOUND);
               }
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

   getCompleteResumeById: async (request, reply) => {
      const resumeId = request.params.id;
      try{
         if(checkObjectIdRegExp.test(resumeId)){
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

               sendSuccessResponse(
                  reply, { statusCode: 200, message: responseMessage.RESUME_LISTED_SUCCESSFULLY, data: completeResume }
               );
            }else{
               sendErrorResponse(reply, 404, responseMessage.NO_RESUME_FOUND);
            }
         }else{
            sendErrorResponse(reply, 400, responseMessage.CAST_OBJECTID_ERROR + ` ${_userId}`);
         }
      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   updateResumeById: async (request, reply) => {
      const resumeId = request.params.id;
      const resumeUpdates = request.body;
      try{
         if(checkObjectIdRegExp.test(resumeId)){
            let resumeToUpdate = await Resume.findById(resumeId);
            if(resumeToUpdate){
               await Resume.findByIdAndUpdate(resumeId, resumeUpdates);
               resumeToUpdate = await Resume.findById(resumeId).select(constants.selectResumeFields);
               sendSuccessResponse(
                  reply, { statusCode: 200, message: responseMessage.RESUME_UPDATED_SUCCESSFULLY, data: resumeToUpdate }
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

   deleteResumeById: async (request, reply) => {
      const resumeId = request.params.id;
      try{
         if(checkObjectIdRegExp.test(resumeId)){
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
                  sendSuccessResponse(
                     reply, { statusCode: 200, message: responseMessage.RESUME_DELETED_SUCCESSFULLY, data: resumeToDelete }
                  );
               }
               else{
                  sendErrorResponse(reply, 404, responseMessage.NO_USER_FOUND);
               }
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
