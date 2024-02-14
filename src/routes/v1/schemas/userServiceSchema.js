const { responseErrors, getSuccessObject, path } = require("./common");
const { responseMessage } = require("../../../utils/responseHelpers");
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
            email: { type: "string", format: "email" },
				password: { type: "string"},
            confirmPassword: { type: "string"}
			},
			required: ["name", "lastName", "email", "password", "confirmPassword"]
		},
      response: {
         201: {
            description: responseMessage.USER_CREATED_SUCCESSFULLY,
            type: 'object',
            properties: {
               statusCode: { type: "string"},
               message: { type: "string"},
               data: {
                  type: 'object',
                  properties: {
                     _id: { type: 'string', format: 'uuid' },
                     name: { type: "string"},
                     lastName: { type: "string"},
                     email: { type: "string", format: "email" }
                  }
               },
               success: { type: "boolean"}
            }
         },
         400: {
            description: responseMessage.BAD_REQUEST,
            type: 'object',
            properties: responseMessage.DEFAULT_ERROR_RESPONSE_FOR_SCHEMA
         },
         500: {
            description: responseMessage.INTERNAL_SERVER_ERROR,
            type: 'object',
            properties: responseMessage.DEFAULT_ERROR_RESPONSE_FOR_SCHEMA
         }
      }
	},
   fetch: {
		description: "This endpoint lists all users. It returns an array of user objects",
      summary: "Fetch all users",
		tags: [path.USER],
      response: {
         200: {
            description: responseMessage.ALL_USERS_LISTED_SUCCESSFULLY,
            type: 'object',
            properties: {
               statusCode: { type: "string"},
               message: { type: "string"},
               data: {
                  type: 'array',
                  items: {
                     type: 'object',
                     properties: {
                        _id: { type: 'string', format: 'uuid' },
                        name: { type: "string"},
                        lastName: { type: "string"},
                        email: { type: "string", format: "email" }
                     }
                  }
               },
               success: { type: "boolean"}
            }
         },
         404: {
            description: responseMessage.NO_USERS_FOUND,
            type: 'object',
            properties: responseMessage.DEFAULT_ERROR_RESPONSE_FOR_SCHEMA
         },
         500: {
            description: responseMessage.INTERNAL_SERVER_ERROR,
            type: 'object',
            properties: responseMessage.DEFAULT_ERROR_RESPONSE_FOR_SCHEMA
         }
      }
   },
   get: {
      description: "This endpoint fetches a user given its Id. It returns a single user object",
      summary: "Get a user",
		tags: [path.USER],
      querystring: {
         type: 'object',
         properties: {
           id: {
             type: 'string',
             format: 'uuid',
             description: 'User Id'
           }
         }
       },
       response: {
         200: {
            description: responseMessage.USER_LISTED_SUCCESSFULLY,
            type: 'object',
            properties: {
               statusCode: { type: "string"},
               message: { type: "string"},
               data: {
                  type: 'object',
                  properties: {
                     _id: { type: 'string', format: 'uuid' },
                     name: { type: "string"},
                     lastName: { type: "string"},
                     email: { type: "string", format: "email" }
                  }
               },
               success: { type: "boolean"}
            }
         },
         400: {
            description: responseMessage.BAD_REQUEST,
            type: 'object',
            properties: responseMessage.DEFAULT_ERROR_RESPONSE_FOR_SCHEMA
         },
         404: {
            description: responseMessage.NO_USER_FOUND,
            type: 'object',
            properties: responseMessage.DEFAULT_ERROR_RESPONSE_FOR_SCHEMA
         },
         500: {
            description: responseMessage.INTERNAL_SERVER_ERROR,
            type: 'object',
            properties: responseMessage.DEFAULT_ERROR_RESPONSE_FOR_SCHEMA
         }
      }
   },
   update: {
      description: "This endpoint updates user information given its Id. The password does not have to be sent. It is only updated if it is sent. Returns the updated user information as a user object",
      summary: "Update a user",
		tags: [path.USER],
      querystring: {
         type: 'object',
         properties: {
           id: {
             type: 'string',
             format: 'uuid',
             description: 'User Id'
           }
         }
      },
		body: {
			type: "object",
			properties: {
				name: { type: "string"},
            lastName: { type: "string"},
            email: { type: "string", format: "email" },
				password: { type: "string"},
            confirmPassword: { type: "string"}
			},
			required: ["name", "lastName", "email"]
		},
      response: {
         200: {
            description: responseMessage.USER_UPDATED_SUCCESSFULLY,
            type: 'object',
            properties: {
               statusCode: { type: "string"},
               message: { type: "string"},
               data: {
                  type: 'object',
                  properties: {
                     _id: { type: 'string', format: 'uuid' },
                     name: { type: "string"},
                     lastName: { type: "string"},
                     email: { type: "string", format: "email" }
                  }
               },
               success: { type: "boolean"}
            }
         },
         400: {
            description: responseMessage.BAD_REQUEST,
            type: 'object',
            properties: responseMessage.DEFAULT_ERROR_RESPONSE_FOR_SCHEMA
         },
         404: {
            description: responseMessage.NO_USER_FOUND,
            type: 'object',
            properties: responseMessage.DEFAULT_ERROR_RESPONSE_FOR_SCHEMA
         },
         500: {
            description: responseMessage.INTERNAL_SERVER_ERROR,
            type: 'object',
            properties: responseMessage.DEFAULT_ERROR_RESPONSE_FOR_SCHEMA
         }
      }
   },
   delete: {
      description: "This endpoint deletes a user given its Id. Returns the deleted user's information",
      summary: "Delete a user",
		tags: [path.USER],
      querystring: {
         type: 'object',
         properties: {
            id: {
               type: 'string',
               format: 'uuid',
               description: 'User Id'
            }
         }
      },
      response: {
        200: {
           description: responseMessage.USER_DELETED_SUCCESSFULLY,
           type: 'object',
           properties: {
              _id: { type: 'string', format: 'uuid' },
              name: { type: "string"},
              lastName: { type: "string"},
              email: { type: "string", format: "email" }
           }
        },
        400: {
           description: responseMessage.BAD_REQUEST,
           type: 'object',
           properties: responseMessage.DEFAULT_ERROR_RESPONSE_FOR_SCHEMA
        },
        404: {
           description: responseMessage.NO_USER_FOUND,
           type: 'object',
           properties: responseMessage.DEFAULT_ERROR_RESPONSE_FOR_SCHEMA
        },
        500: {
           description: responseMessage.INTERNAL_SERVER_ERROR,
           type: 'object',
           properties: responseMessage.DEFAULT_ERROR_RESPONSE_FOR_SCHEMA
        }
     }
   },
   deleteAllUsers: {
      description: "This endpoint deletes all users. It only returns a status message",
      summary: "Delete all users",
		tags: [path.USER],
      response: {
        200: {
           description: responseMessage.ALL_USERS_DELETED_SUCCESSFULLY,
           type: 'object',
           properties: {}
        },
        404: {
           description: responseMessage.NO_USER_FOUND,
           type: 'object',
           properties: responseMessage.DEFAULT_ERROR_RESPONSE_FOR_SCHEMA
        },
        500: {
           description: responseMessage.INTERNAL_SERVER_ERROR,
           type: 'object',
           properties: responseMessage.DEFAULT_ERROR_RESPONSE_FOR_SCHEMA
        }
     }
   }
}

module.exports = {
	userServiceSchema
};
