const authenticationController = require('../../handlers/authenticationController');
const { authenticationServiceSchema } = require('../../routes/v1/schemas/authenticationServiceSchema');

const authenticationRoutes = async (app, opts) => {
   app.route({
      method: "GET",
      url: "/generateToken",
      schema: authenticationServiceSchema.generateToken,
      handler: authenticationController.generateToken
   });

};

 module.exports = {
	authenticationRoutes
};