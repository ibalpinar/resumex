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
      schema: resumeServiceSchema.fetchAllResumes,
      handler: resumeController.getAllResumes
   });

   app.route({
      method: "DELETE",
      url: "/delete/all",
      schema: resumeServiceSchema.deleteAllResumes,
      handler: resumeController.deleteAllResumes
   });
};

 module.exports = {
	resumeRoutes
};