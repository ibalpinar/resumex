const selectUserFields = { _id: 1, name: 1, lastName: 1, email: 1, userTypeId: 1, isSuspended: 1, isEmailConfirmed: 1, resumeIds: 1, createdAt: 1, updatedAt: 1, deletedAt: 1 };
const selectUserFieldsOnlyResume = { resumeIds: 1 };
const selectResumeFields = { _id: 1, userId:1,  header: 1, workExperience: 1, skills: 1, languages: 1, courses: 1, interests: 1, isPublished: 1, createdAt: 1, updatedAt: 1, deletedAt: 1 };
const selectCountryFields = { _id: 1, codeA2:1,  codeA3: 1, name: 1, flagFileName: 1, continentCode: 1, createdAt: 1, updatedAt: 1, deletedAt: 1 };

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

module.exports = { selectUserFields, selectUserFieldsOnlyResume, selectResumeFields, selectCountryFields, swaggerUiOptions, swaggerOptions };