const User = require('../../models/User');
const constants = require('../../utils/constants');
const { sendErrorResponse, sendSuccessResponse, checkObjectIdRegex, responseMessage } = require("../../utils/responseHelpers");
const authenticationController = require('../../handlers/authenticationController');
const { authenticationServiceSchema } = require('../../routes/v1/schemas/authenticationServiceSchema');

const authenticationRoutes = async (app, opts) => {
   app.decorate("authenticate", async (request, reply) => {
      await authenticationController.authenticateDecorator(request, reply);
   });

   app.decorate("verifyEmailPassword", async(request, reply) => {
      await authenticationController.verifyEmailPasswordDecorator(request, reply);
   });

   app.route({
      method: "GET",
      url: "/generateToken/:id",
      handler: authenticationController.generateToken
   });

   app.route({
      method: "GET",
      url: "/validateToken",
      onRequest: [app.authenticate],
      handler: (request, reply) => {
         return request.user;
      }
   });

   app.route({
      method: "POST",
      url: "/login",
      preHandler: [app.verifyEmailPassword],
      handler: authenticationController.login
   });

   app.route({
      method: "POST",
      url: "/forgottenPassword",
      handler: authenticationController.forgottenPassword
   });

   app.route({
      method: "POST",
      url: "/resetPasswordWithToken",
      handler: authenticationController.resetPasswordWithToken
   });

   app.route({
      method: "POST",
      url: "/resetPasswordWithCode",
      handler: authenticationController.resetPasswordWithCode
   });

};

module.exports = {
	authenticationRoutes
};