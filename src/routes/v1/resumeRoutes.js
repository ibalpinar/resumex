const resumeController = require('../../handlers/resumeController');
const { resumeServiceSchema } = require('../../routes/v1/schemas/resumeServiceSchema');

const resumeRoutes = async (app, opts) => {
   app.route({
      method: "POST",
      url: "/create",
      schema: resumeServiceSchema.createResume,
      handler: resumeController.createResume
   });

   app.route({
      method: "GET",
      url: "/fetch",
      schema: resumeServiceSchema.fetch,
      handler: resumeController.getAllResumes
   });
};

 module.exports = {
	resumeRoutes
};