const { responseErrors, getSuccessObject, path } = require("../../common");
const { responseMessage } = require("../../../utils/responseHelpers");
const errors = responseErrors;

const authenticationServiceSchema = {
   generateToken: {
		description: "This endpoint generates a token for a user. It returns an object contains a token",
      summary: "Generates a token for a user",
		tags: [path.AUTHENTICATION]
   },
};

module.exports = {
	authenticationServiceSchema
};
