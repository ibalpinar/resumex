const authenticationController = require('../../handlers/authenticationController');
const authenticationDecorator = require('../../decorators/authenticationDecorator');

const authenticationRoutes = async (app, opts) => {
   app.decorate("authenticate", async (request, reply) => {
      await authenticationDecorator.authenticate(request, reply);
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

};

module.exports = {
	authenticationRoutes
};