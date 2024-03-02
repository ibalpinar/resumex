const { responseErrors, getSuccessObject, path } = require("../../common");
const { responseMessage } = require("../../../utils/responseHelpers");
const errors = responseErrors;

const lookupServiceSchema = {
   fetchAllCountries: {
		description: "This endpoint lists all countries. It returns an array of country objects",
      summary: "Fetch all countries",
		tags: [path.LOOKUP]
   },

   fetchAllInterests: {
		description: "This endpoint lists all interests. It returns an array of interest objects",
      summary: "Fetch all interests",
		tags: [path.LOOKUP]
   },

   fetchAllSkills: {
		description: "This endpoint lists all skills. It returns an array of skill objects",
      summary: "Fetch all skills",
		tags: [path.LOOKUP]
   },

   fetchAllLanguages: {
		description: "This endpoint lists all languages. It returns an array of language objects",
      summary: "Fetch all languages",
		tags: [path.LOOKUP]
   },
};

module.exports = {
	lookupServiceSchema
};
