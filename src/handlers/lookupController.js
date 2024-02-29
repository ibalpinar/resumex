const Country = require('../models/Country');
const Interest = require('../models/Interest');
const constants = require('../utils/constants');
const { sendErrorResponse, sendSuccessResponse, checkObjectIdRegExp, responseMessage } = require("../utils/responseHelpers");
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

module.exports = {
   getAllCountries: async (request, reply) => {
      try{
         const countries = await Country.find({}).select(constants.selectCountryFields);
         if(countries.length != 0){
            sendSuccessResponse(
               reply, { statusCode: 200, message: responseMessage.ALL_COUNTRIES_LISTED_SUCCESSFULLY, data: countries }
            );
         }
         else{
            sendErrorResponse(reply, 404, responseMessage.NO_COUNTRIES_FOUND);
         }
      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   getAllInterests: async (request, reply) => {
      try{
         const interests = await Interest.find({}).select(constants.selectInterestFields);
         if(interests.length != 0){
            sendSuccessResponse(
               reply, { statusCode: 200, message: responseMessage.ALL_INTERESTS_LISTED_SUCCESSFULLY, data: interests }
            );
         }
         else{
            sendErrorResponse(reply, 404, responseMessage.NO_INTERESTS_FOUND);
         }
      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

};
