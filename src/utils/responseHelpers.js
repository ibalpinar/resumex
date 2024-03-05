const responseMessage = {
   INTERNAL_SERVER_ERROR: "Internal Server Error",
   AUTHORIZATION_TOKEN_INVALID: "Authorization token invalid",
   BAD_REQUEST: "Bad Request",
   NOT_FOUND: "Not Found",
   FORBIDDEN: "Forbidden",
   TOO_MANY_REQUEST: "Too many requests",
   CAST_OBJECTID_ERROR: "Cast to ObjectId failed for value",
   EMAIL_OR_PASSWORD_IS_INCORRECT: "Email address or password is incorrect",
   NO_USER_FOUND: "No user found",
   NO_USERS_FOUND: "No users found",
   USER_ALREADY_EXIST: "User already exist",
   PASS_CONFIRM_PASS_DONT_MATCH: "Password and Confirm Password do not match",
   USER_CREATED_SUCCESSFULLY: "User created successfully",
   ALL_USERS_LISTED_SUCCESSFULLY: "All users listed successfully",
   USER_LISTED_SUCCESSFULLY: "User listed successfully",
   USER_UPDATED_SUCCESSFULLY: "User updated successfully",
   USER_DELETED_SUCCESSFULLY: "User deleted successfully",
   ALL_USERS_DELETED_SUCCESSFULLY: "All users deleted successfully",
   RESUME_CREATED_SUCCESSFULLY: "Resume created successfully",
   ALL_RESUMES_LISTED_SUCCESSFULLY: "All resumes listed successfully",
   ALL_RESUMES_DELETED_SUCCESSFULLY: "All resumes deleted successfully",
   RESUME_LISTED_SUCCESSFULLY: "Resume listed successfully",
   RESUME_DELETED_SUCCESSFULLY: "Resume deleted successfully",
   NO_RESUME_FOUND: "No resume found",
   NO_RESUMES_FOUND: "No resumes found",
   RESUME_UPDATED_SUCCESSFULLY: "Resume updated successfully",
   ALL_COUNTRIES_LISTED_SUCCESSFULLY: "All countries listed successfully",
   NO_COUNTRIES_FOUND: "No countries found",
   ALL_INTERESTS_LISTED_SUCCESSFULLY: "All interests listed successfully",
   NO_INTERESTS_FOUND: "No interests found",
   ALL_SKILLS_LISTED_SUCCESSFULLY: "All skills listed successfully",
   NO_SKILLS_FOUND: "No skills found",
   ALL_LANGUAGES_LISTED_SUCCESSFULLY: "All languages listed successfully",
   NO_LANGUAGES_FOUND: "No languages found",
   USER_TOKEN_GENERATED_SUCCESSFULLY: "User token generated successfully",
   USER_LOGGED_IN_SUCCESSFULLY: "User logged in successfully",
   DEFAULT_ERROR_RESPONSE_FOR_SCHEMA: {
      statusCode: { type: 'number'},
      error: { type: "string"},
      message: { type: "string"},
      success: { type: "boolean"}
   },
   DEFAULT_RESPONSE_USER_SCHEMA: {
      _id: { type: 'string', format: 'uuid' },
      name: { type: "string"},
      lastName: { type: "string"},
      email: { type: "string", format: "email" },
      userTypeId: { type: "string" },
      countryId: { type: "string" },
      resumeIds: { type: "array" },
      isSuspended: { type: "boolean" },
      isEmailConfirmed: { type: "boolean" },
      createdAt: { type: "string"},
      updatedAt: { type: "string"},
      deletedAt: { type: "string"}
   }
};

const sendErrorResponse = (reply, statusCode, message, options = {}) => {
	let error = responseMessage.INTERNAL_SERVER_ERROR;
	switch (statusCode) {
		case 400:
			error = responseMessage.BAD_REQUEST;
			break;
		case 404:
			error = responseMessage.NOT_FOUND;
			break;
		case 403:
			error = responseMessage.FORBIDDEN;
			break;
		case 429:
			error = responseMessage.TOO_MANY_REQUEST;
			break;
		default:
			break;
	}
	if (!options.redirectURL) {
		reply.status(statusCode).send({
			statusCode,
			error,
			message,
			success: false,
		});
	} else {
		reply
			.code(302)
			.redirect(
				`${options.redirectURL}?error=${error}&message=${message}&success=false`
			);
	}
};

const sendSuccessResponse = (reply, response, options = {}) => {
	if (!options.redirectURL) {
		reply.code(response.statusCode).send({
			...response,
			success: true,
		});
	} else {
		reply
			.code(302)
			.redirect(
				`${options.redirectURL}?statusCode=${response.statusCode}&message=${response.message}&success=true`
			);
	}
};

const checkObjectIdRegex = new RegExp("^[0-9a-fA-F]{24}$");

module.exports = {
	sendErrorResponse,
	sendSuccessResponse,
   checkObjectIdRegex,
   responseMessage
};
