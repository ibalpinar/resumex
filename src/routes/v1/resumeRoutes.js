const resumeController = require('../../handlers/resumeController');
const { resumeServiceSchema } = require('../../routes/v1/schemas/resumeServiceSchema');

const resumeRoutes = async (app, opts) => {
   app.route({
      method: "POST",
      url: "/create",
      schema: resumeServiceSchema.createResume,
      handler: resumeController.createResume
   });
};

 module.exports = {
	resumeRoutes
};