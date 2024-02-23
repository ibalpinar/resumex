const { responseErrors, getSuccessObject, path } = require("../../common");
const { responseMessage } = require("../../../utils/responseHelpers");
const errors = responseErrors;

const resumeServiceSchema = {
   createResume: {
		description: "Resume creation endpoint. Returns all resume information as object after creation",
      summary: "Create a resume",
		tags: [path.RESUME],
	},
   fetchAllResumes: {
		description: "This endpoint lists all resumes. It returns an array of resume objects",
      summary: "Fetch all resumes",
		tags: [path.RESUME],
   },
   deleteAllResumes: {
      description: "This endpoint deletes all resumes. It only returns a status message",
      summary: "Delete all resumes",
		tags: [path.RESUME],
   }
};

module.exports = {
	resumeServiceSchema
};
