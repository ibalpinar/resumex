const {
	responseErrors,
	getSuccessObject,
   path
} = require("./common");

const errors = responseErrors;

const userServiceSchema = {
	createUser: {
		description: "User creation endpoint. Returns all user information as object after creation",
      summary: "Create a user",
		tags: [path.USER],
		body: {
			type: "object",
			properties: {
				name: { type: "string"},
            lastName: { type: "string"},
				email: {
					type: "string",
					format: "email"
				},
				password: { type: "string"},
            confirmPassword: { type: "string"}
			},
			required: ["name", "lastName", "email", "password"]
		}
	},
   fetch: {
		description: "This endpoint lists all users. It returns an array of user objects",
      summary: "Fetch all users",
		tags: [path.USER]
   },
   get: {
      description: "This endpoint fetches a user given its Id. It returns a single user object",
      summary: "Get a user",
		tags: [path.USER]
   },
   update: {
      description: "This endpoint updates user information given its Id. The password does not have to be sent. It is only updated if it is sent. Returns the updated user information as a user object",
      summary: "Update a user",
		tags: [path.USER]
   },
   delete: {
      description: "This endpoint deletes a user given its Id. Returns the deleted user's information",
      summary: "Delete a user",
		tags: [path.USER]
   },
   deleteAllUsers: {
      description: "This endpoint deletes all users. It only returns a status message",
      summary: "Delete all users",
		tags: [path.USER]
   }
}

module.exports = {
	userServiceSchema
};
