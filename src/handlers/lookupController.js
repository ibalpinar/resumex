const Country = require('../models/Country');
const Interest = require('../models/Interest');
const Skill = require('../models/Skill');
const Language = require('../models/Language');
const constants = require('../utils/constants');
const { sendErrorResponse, sendSuccessResponse, responseMessage } = require('../utils/responseHelpers');

module.exports = {
   getAllCountries: async (request, reply) => {
      try {
         const countries = await Country.find({ deletedAt: { $eq: null } }).select(constants.selectCountryFields);
         if (countries.length == 0) {
            return sendErrorResponse(reply, 404, responseMessage.NO_COUNTRIES_FOUND);
         }

         const data = { count: countries.length, countries: countries };
         return sendSuccessResponse(reply, {
            statusCode: 200,
            message: responseMessage.ALL_COUNTRIES_LISTED_SUCCESSFULLY,
            data: data,
         });
      } catch (err) {
         console.error(err.message);
         return sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   getAllInterests: async (request, reply) => {
      try {
         const interests = await Interest.find({ deletedAt: { $eq: null } }).select(constants.selectInterestFields);
         if (interests.length == 0) {
            return sendErrorResponse(reply, 404, responseMessage.NO_INTERESTS_FOUND);
         }

         const data = { count: interests.length, interests: interests };
         return sendSuccessResponse(reply, {
            statusCode: 200,
            message: responseMessage.ALL_INTERESTS_LISTED_SUCCESSFULLY,
            data: data,
         });
      } catch (err) {
         console.error(err.message);
         return sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   getAllSkills: async (request, reply) => {
      try {
         const skills = await Skill.find({ deletedAt: { $eq: null } }).select(constants.selectSkillFields);
         if (skills.length == 0) {
            return sendErrorResponse(reply, 404, responseMessage.NO_SKILLS_FOUND);
         }

         const data = { count: skills.length, skills: skills };
         return sendSuccessResponse(reply, {
            statusCode: 200,
            message: responseMessage.ALL_SKILLS_LISTED_SUCCESSFULLY,
            data: data,
         });
      } catch (err) {
         console.error(err.message);
         return sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   getAllLanguages: async (request, reply) => {
      try {
         const languages = await Language.find({ deletedAt: { $eq: null } }).select(constants.selectLanguageFields);
         if (languages.length == 0) {
            return sendErrorResponse(reply, 404, responseMessage.NO_LANGUAGES_FOUND);
         }

         const data = { count: languages.length, languages: languages };
         return sendSuccessResponse(reply, {
            statusCode: 200,
            message: responseMessage.ALL_LANGUAGES_LISTED_SUCCESSFULLY,
            data: data,
         });
      } catch (err) {
         console.error(err.message);
         return sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },
};
