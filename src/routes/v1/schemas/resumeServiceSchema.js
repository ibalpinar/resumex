const { responseErrors, getSuccessObject, path } = require("../../common");
const { responseMessage } = require("../../../utils/responseHelpers");
const errors = responseErrors;

const resumeServiceSchema = {
   createResume: {
		description: "Resume creation endpoint. Returns all resume information as object after creation",
      summary: "Create a resume",
		tags: [path.RESUME]
	},
   fetchAllResumes: {
		description: "This endpoint lists all resumes. It returns an array of resume objects",
      summary: "Fetch all resumes",
		tags: [path.RESUME]
   },
   getResumeById: {
		description: "This endpoint fetches a resume given its Id. It returns a single resume object",
      summary: "Get a resume",
		tags: [path.RESUME]
   },
   updateResumeById: {
      description: "This endpoint updates resume information given its Id. Returns the updated resume information as a resume object",
      summary: "Update a resume",
		tags: [path.RESUME]
	},
   deleteResumeById: {
      description: "This endpoint deletes a resume given its Id. Returns the deleted resume's information",
      summary: "Delete a resume",
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
