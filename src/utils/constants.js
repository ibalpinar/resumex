const selectUserFields = { _id: 1, name: 1, lastName: 1, email: 1, __v: 1 };

const swaggerUiOptions = {
   routePrefix: "/apidocs",
   exposeRoute: true,
};

const swaggerOptions = {
   swagger: {
      info: {
         title: process.env.SWAGGER_TITLE,
         description: process.env.SWAGGER_DESCRIPTION,
         version: process.env.VERSION,
         license: {
            "name": "MIT",
            "url": "https://opensource.org/licenses/MIT"
         }
      },
      host: process.env.HOST,
      schemes: ["http", "https"],
      consumes: ["application/json"],
      produces: ["application/json"]
   },
};

module.exports = { selectUserFields, swaggerUiOptions, swaggerOptions };