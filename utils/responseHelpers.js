const sendErrorResponse = (reply, statusCode, message, options = {}) => {
	let error = "Internal Server Error";
	switch (statusCode) {
		case 400:
			error = "Bad Request";
			break;
		case 404:
			error = "Not Found";
			break;
		case 403:
			error = "Forbidden";
			break;
		case 429:
			error = "Too many requests";
			break;
		default:
			break;
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

module.exports = {
	sendErrorResponse,
	sendSuccessResponse
};
