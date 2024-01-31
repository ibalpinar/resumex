const {
	responseErrors,
	getSuccessObject,
} = require("./common");

const errors = responseErrors;

const userServiceSchema = {
	createUser: {
		description:
			"User creation endpoint. Returns all user information as object.",
		tags: ["Create User"],
		body: {
			type: "object",
			properties: {
				name: { type: "string"},
            lastName: { type: "string"},
				email: {
					type: "string",
					format: "email"
				},
				password: { type: "string"}
			},
			required: ["name", "lastName", "email", "password"]
		}
	},
   fetch: {},
   get: {},
   update: {},
   delete: {},
}

module.exports = {
	userServiceSchema
};
