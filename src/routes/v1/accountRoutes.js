const accountController = require('../../handlers/accountController');
const accountDecorator = require('../../decorators/accountDecorator');

const accountRoutes = async (app, opts) => {
   app.decorate('verifyEmailPassword', async (request, reply) => {
      await accountDecorator.verifyEmailPassword(request, reply);
   });

   app.route({
      method: 'POST',
      url: '/register',
      handler: accountController.register,
   });

   app.route({
      method: 'POST',
      url: '/login',
      preHandler: [app.verifyEmailPassword],
      handler: accountController.login,
   });

   app.route({
      method: 'POST',
      url: '/forgottenPassword',
      handler: accountController.forgottenPassword,
   });

   app.route({
      method: 'PATCH',
      url: '/resetPassword',
      handler: accountController.resetPassword,
   });
};

module.exports = {
   accountRoutes,
};
