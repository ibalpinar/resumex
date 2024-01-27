const {
	responseErrors,
	getSuccessObject,
} = require("./common");

const errors = responseErrors;

const userServiceSchema = {
	create: {
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
					format: "email",
				},
				password: { type: "string"},
			},
			required: ["name", "lastName", "email", "password"],
		},
		response: {
			201: getSuccessObject(201, true, "User created successfully", {}),
			400: errors[404],
			500: errors[500],
			429: errors[429],
		},
	},
   fetch: {},
   get: {},
   update: {},
   delete: {},
}

module.exports = {
	userServiceSchema
};
