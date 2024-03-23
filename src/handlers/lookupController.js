const Country = require('../models/Country');
const Interest = require('../models/Interest');
const Skill = require('../models/Skill');
const Language = require('../models/Language');
const constants = require('../utils/constants');
const { sendErrorResponse, sendSuccessResponse, checkObjectIdRegex, responseMessage } = require("../utils/responseHelpers");

module.exports = {
   getAllCountries: async (request, reply) => {
      try{
         const countries = await Country.find({}).select(constants.selectCountryFields);
         if(countries.length == 0)
            return sendSuccessResponse( reply, { statusCode: 204, message: responseMessage.NO_COUNTRIES_FOUND, data: [] } );

         return sendSuccessResponse( reply, { statusCode: 200, message: responseMessage.ALL_COUNTRIES_LISTED_SUCCESSFULLY, data: countries } );
      }catch(err){
         console.error(err.message);
         return sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   getAllInterests: async (request, reply) => {
      try{
         const interests = await Interest.find({}).select(constants.selectInterestFields);
         if(interests.length == 0)
            return sendSuccessResponse( reply, { statusCode: 204, message: responseMessage.NO_INTERESTS_FOUND, data: [] } );

         return sendSuccessResponse( reply, { statusCode: 200, message: responseMessage.ALL_INTERESTS_LISTED_SUCCESSFULLY, data: interests } );
      }catch(err){
         console.error(err.message);
         return sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   getAllSkills: async (request, reply) => {
      try{
         const skills = await Skill.find({}).select(constants.selectSkillFields);
         if(skills.length == 0)
            return sendSuccessResponse( reply, { statusCode: 204, message: responseMessage.NO_SKILLS_FOUND, data: [] } );

         return sendSuccessResponse( reply, { statusCode: 200, message: responseMessage.ALL_SKILLS_LISTED_SUCCESSFULLY, data: skills } );
      }catch(err){
         console.error(err.message);
         return sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   getAllLanguages: async (request, reply) => {
      try{
         const languages = await Language.find({}).select(constants.selectLanguageFields);
         if(languages.length == 0)
            return sendSuccessResponse( reply, { statusCode: 204, message: responseMessage.NO_LANGUAGES_FOUND, data: [] } );

         return sendSuccessResponse( reply, { statusCode: 200, message: responseMessage.ALL_LANGUAGES_LISTED_SUCCESSFULLY, data: languages } );
      }catch(err){
         console.error(err.message);
         return sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

};
