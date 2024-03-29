const selectUserFieldsForLogin = {
   _id: 1,
   name: 1,
   lastName: 1,
   email: 1,
   password: 1,
   userTypeId: 1,
   isSuspended: 1,
   isEmailConfirmed: 1,
   resumeIds: 1,
   createdAt: 1,
   updatedAt: 1,
   deletedAt: 1,
};
const selectUserFields = {
   _id: 1,
   name: 1,
   lastName: 1,
   email: 1,
   userTypeId: 1,
   isSuspended: 1,
   isEmailConfirmed: 1,
   resumeIds: 1,
   createdAt: 1,
   updatedAt: 1,
   deletedAt: 1,
};
const selectUserFieldsOnlyResume = { resumeIds: 1 };
const selectResumeFields = {
   _id: 1,
   userId: 1,
   header: 1,
   workExperience: 1,
   skills: 1,
   languages: 1,
   courses: 1,
   interests: 1,
   isPublished: 1,
   createdAt: 1,
   updatedAt: 1,
   deletedAt: 1,
};
const selectCountryFields = { _id: 1, codeA2: 1, codeA3: 1, name: 1, flagFileName: 1, continentCode: 1 };
const selectInterestFields = { _id: 1, name: 1, iconName: 1 };
const selectSkillFields = { _id: 1, name: 1 };
const selectLanguageFields = { _id: 1, name: 1 };

const userTypesIds = {
   ADMIN: '65dd07373d7e0c75327ccf24',
   CANDIDATE: '65dd07373d7e0c75327ccf25',
   EDITOR: '65dd07373d7e0c75327ccf26',
};

const swaggerUiOptions = {
   routePrefix: '/apidocs',
   exposeRoute: true,
};

const swaggerOptions = {
   swagger: {
      info: {
         title: process.env.SWAGGER_TITLE,
         description: process.env.SWAGGER_DESCRIPTION,
         version: process.env.VERSION,
         license: {
            name: 'MIT',
            url: 'https://opensource.org/licenses/MIT',
         },
      },
      host: process.env.HOST,
      schemes: ['http', 'https'],
      consumes: ['application/json'],
      produces: ['application/json'],
   },
};

const forgottenPasswordRequestType = {
   CODE: 'code',
   TOKEN: 'token',
};

const healthResponseObject = {
   statusCode: 200,
   status: 'ok',
   message: 'Success',
};

module.exports = {
   selectUserFieldsForLogin,
   selectUserFields,
   selectUserFieldsOnlyResume,
   selectResumeFields,
   selectCountryFields,
   selectInterestFields,
   selectSkillFields,
   selectLanguageFields,
   swaggerUiOptions,
   swaggerOptions,
   forgottenPasswordRequestType,
   healthResponseObject,
   userTypesIds,
};
