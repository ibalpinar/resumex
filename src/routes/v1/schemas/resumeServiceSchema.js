const { responseErrors, getSuccessObject, path } = require("../../common");
const { responseMessage } = require("../../../utils/responseHelpers");
const errors = responseErrors;

const resumeServiceSchema = {
   createResume: {
		description: "User creation endpoint. Returns all user information as object after creation",
      summary: "Create a user",
		tags: [path.RESUME],
	}
};

module.exports = {
	resumeServiceSchema
};
