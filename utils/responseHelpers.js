const reponseMessage = {
   INTERNAL_SERVER_ERROR: "Internal Server Error",
   BAD_REQUEST: "Bad Request",
   NOT_FOUND: "Not Found",
   FORBIDDEN: "Forbidden",
   TOO_MANY_REQUEST: "Too many requests",
   CAST_OBJECTID_ERROR: "Cast to ObjectId failed for value",
   NO_USER_FOUND: "No User Found",
   NO_USERS_FOUND: "No Users Found",
   USER_ALREADY_EXIST: "User already exist",
   USER_CREATED_SUCCESSFULLY: "User created successfully",
   ALL_USERS_LISTED_SUCCESSFULLY: "All users listed successfully",
   USER_LISTED_SUCCESSFULLY: "User listed successfully",
   USER_UPDATED_SUCCESSFULLY: "User updated successfully",
   USER_DELETED_SUCCESSFULLY: "User deleted successfully",
   ALL_USERS_DELETED_SUCCESSFULLY: "All users deleted successfully",
}

const sendErrorResponse = (reply, statusCode, message, options = {}) => {
	let error = "Internal Server Error";
	switch (statusCode) {
		case 400:
			error = reponseMessage.BAD_REQUEST;
			break;
		case 404:
			error = reponseMessage.NOT;
			break;
		case 403:
			error = reponseMessage.FORBIDDEN;
			break;
		case 429:
			error = reponseMessage.TOO_MANY_REQUEST;
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

const checkObjectIdRegExp = new RegExp("^[0-9a-fA-F]{24}$");

module.exports = {
	sendErrorResponse,
	sendSuccessResponse,
   checkObjectIdRegExp,
   reponseMessage
};
