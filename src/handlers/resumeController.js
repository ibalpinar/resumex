const Resume = require('../models/Resume');
const User = require('../models/User');
const constants = require('../utils/constants');
const {
   sendErrorResponse,
   sendSuccessResponse,
   checkObjectIdRegex,
   responseMessage,
} = require('../utils/responseHelpers');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

module.exports = {
   createResume: async (request, reply) => {
      const resume = request.body;
      resume.userId = new ObjectId(resume.userId);
      resume.skills = resume.skills.map((skill) => new ObjectId(skill));
      resume.interests = resume.interests.map((interest) => new ObjectId(interest));
      resume.languages = resume.languages.map(function (language) {
         return { languageId: new ObjectId(language.languageId), level: language.level };
      });

      if (!checkObjectIdRegex.test(resume.userId))
         return sendErrorResponse(reply, 400, responseMessage.CAST_OBJECTID_ERROR + ` ${resume.userId}`);

      try {
         let user = await User.findById(resume.userId).select(constants.selectUserFieldsOnlyResume);
         if (!user) {
            return sendErrorResponse(reply, 404, responseMessage.NO_USER_FOUND);
         }

         let newResume = await Resume.create(resume);
         user.resumes.push(newResume._id);
         await User.findByIdAndUpdate(resume.userId, user);
         return sendSuccessResponse(reply, {
            statusCode: 201,
            message: responseMessage.RESUME_CREATED_SUCCESSFULLY,
            data: newResume,
         });
      } catch (err) {
         console.error(err.message);
         return sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   getAllResumes: async (request, reply) => {
      try {
         const resumes = await Resume.find({}).select(constants.selectResumeFields);
         if (resumes.length == 0) {
            return sendErrorResponse(reply, 404, responseMessage.NO_RESUMES_FOUND);
         }

         return sendSuccessResponse(reply, {
            statusCode: 200,
            message: responseMessage.ALL_RESUMES_LISTED_SUCCESSFULLY,
            data: resumes,
         });
      } catch (err) {
         console.error(err.message);
         return sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   getResumeById: async (request, reply) => {
      const resumeId = request.params.id;
      if (!checkObjectIdRegex.test(resumeId))
         return sendErrorResponse(reply, 400, responseMessage.CAST_OBJECTID_ERROR + ` ${resumeId}`);

      try {
         const resume = await Resume.findOne({ _id: resumeId, deletedAt: { $eq: null } }).select(constants.selectResumeFields);
         if (!resume) {
            return sendErrorResponse(reply, 404, responseMessage.NO_RESUME_FOUND);
         }

         const user = await User.findOne({ _id: resume.userId, deletedAt: { $eq: null } }).select(
            constants.selectUserFieldsOnlyResume,
         );

         if (!user) {
            return sendErrorResponse(reply, 404, responseMessage.NO_RESUME_FOUND);
         }

         return sendSuccessResponse(reply, {
            statusCode: 200,
            message: responseMessage.RESUME_LISTED_SUCCESSFULLY,
            data: resume,
         });
      } catch (err) {
         console.error(err.message);
         return sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   getCompleteResumeById: async (request, reply) => {
      const resumeId = request.params.id;
      if (!checkObjectIdRegex.test(resumeId))
         return sendErrorResponse(reply, 400, responseMessage.CAST_OBJECTID_ERROR + ` ${resumeId}`);

      try {
         const resume = await Resume.findById(resumeId).select(constants.selectResumeFields);
         if (!resume) {
            return sendErrorResponse(reply, 404, responseMessage.NO_RESUME_FOUND);
         }

         let completeResume = await Resume.aggregate([
            {
               $lookup: {
                  from: 'interests',
                  localField: 'interests',
                  foreignField: '_id',
                  as: 'interestInformation',
               },
            },
            {
               $lookup: {
                  from: 'skills',
                  localField: 'skills',
                  foreignField: '_id',
                  as: 'skillInformation',
               },
            },
            {
               $lookup: {
                  from: 'languages',
                  localField: 'languages.languageId',
                  foreignField: '_id',
                  as: 'languageInformation',
               },
            },
         ]);
         return sendSuccessResponse(reply, {
            statusCode: 200,
            message: responseMessage.RESUME_LISTED_SUCCESSFULLY,
            data: completeResume,
         });
      } catch (err) {
         console.error(err.message);
         return sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   updateResumeById: async (request, reply) => {
      const resumeId = request.params.id;
      const resumeUpdates = request.body;
      if (!checkObjectIdRegex.test(resumeId))
         return sendErrorResponse(reply, 400, responseMessage.CAST_OBJECTID_ERROR + ` ${resumeId}`);

      try {
         let resumeToUpdate = await Resume.findById(resumeId);
         if (!resumeToUpdate) {
            return sendErrorResponse(reply, 404, responseMessage.NO_RESUME_FOUND);
         }

         await Resume.findByIdAndUpdate(resumeId, resumeUpdates);
         resumeToUpdate = await Resume.findById(resumeId).select(constants.selectResumeFields);
         return sendSuccessResponse(reply, {
            statusCode: 200,
            message: responseMessage.RESUME_UPDATED_SUCCESSFULLY,
            data: resumeToUpdate,
         });
      } catch (err) {
         console.error(err.message);
         return sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   deleteResumeById: async (request, reply) => {
      const resumeId = request.params.id;
      if (!checkObjectIdRegex.test(resumeId))
         return sendErrorResponse(reply, 400, responseMessage.CAST_OBJECTID_ERROR + ` ${resumeId}`);

      try {
         const resumeToDelete = await Resume.findOne({ _id: resumeId, deletedAt: { $eq: null } }).select(
            constants.selectResumeFields,
         );

         if (!resumeToDelete) {
            return sendErrorResponse(reply, 404, responseMessage.NO_RESUME_FOUND);
         }

         const user = await User.findOne({ _id: resumeToDelete.userId, deletedAt: { $eq: null } }).select(
            constants.selectUserFieldsOnlyResume,
         );

         if (!user) {
            return sendErrorResponse(reply, 404, responseMessage.NO_RESUME_FOUND);
         }

         const indexOfResumeId = user.resumes.indexOf(resumeId);
         if (indexOfResumeId > -1) user.resumes.splice(indexOfResumeId, 1);

         const now = new Date();
         let deleteResumeRequestUpdates = { updatedAt: now, deletedAt: now };

         await User.findByIdAndUpdate(resumeToDelete.userId, user);
         await Resume.findByIdAndUpdate(resumeId, deleteResumeRequestUpdates);
         return sendSuccessResponse(reply, {
            statusCode: 200,
            message: responseMessage.RESUME_DELETED_SUCCESSFULLY,
            data: resumeToDelete,
         });
      } catch (err) {
         console.error(err.message);
         return sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   deleteAllResumes: async (request, reply) => {
      try {
         let numberOfResumes = await Resume.countDocuments({});
         if (numberOfResumes == 0) {
            return sendErrorResponse(reply, 404, responseMessage.NO_RESUMES_FOUND);
         }

         await Resume.deleteMany();
         return sendSuccessResponse(reply, {
            statusCode: 200,
            message: responseMessage.ALL_RESUMES_DELETED_SUCCESSFULLY,
            data: null,
         });
      } catch (err) {
         console.error(err.message);
         return sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },
};
