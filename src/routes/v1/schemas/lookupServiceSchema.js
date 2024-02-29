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
		description: "This endpoint lists all countries. It returns an array of country objects",
      summary: "Fetch all countries",
		tags: [path.LOOKUP]
   },
};

module.exports = {
	lookupServiceSchema
};
