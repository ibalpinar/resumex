const authenticationController = require('../../handlers/authenticationController');
const authenticationDecorator = require('../../decorators/authenticationDecorators');

const authenticationRoutes = async (app, opts) => {
   app.decorate("authenticate", async (request, reply) => {
      await authenticationDecorator.authenticate(request, reply);
   });

   app.decorate("verifyEmailPassword", async(request, reply) => {
      await authenticationDecorator.verifyEmailPassword(request, reply);
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
      method: "PATCH",
      url: "/resetPassword",
      handler: authenticationController.resetPassword
   });

};

module.exports = {
	authenticationRoutes
};