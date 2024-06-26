const resumeController = require('../../handlers/resumeController');
const { resumeServiceSchema } = require('../../routes/v1/schemas/resumeServiceSchema');

const resumeRoutes = async (app) => {
   app.route({
      method: 'POST',
      url: '/create',
      schema: resumeServiceSchema.createResume,
      handler: resumeController.createResume,
   });

   app.route({
      method: 'GET',
      url: '/fetch',
      schema: resumeServiceSchema.fetchAllResumes,
      handler: resumeController.fetchAllResumes,
   });

   app.route({
      method: 'GET',
      url: '/get/:id',
      schema: resumeServiceSchema.getResumeById,
      handler: resumeController.getResumeById,
   });

   app.route({
      method: 'GET',
      url: '/get/count',
      schema: resumeServiceSchema.getResumeCount,
      handler: resumeController.getResumeCount,
   });

   app.route({
      method: 'GET',
      url: '/get/complete/:id',
      schema: resumeServiceSchema.getResumeByUserId,
      handler: resumeController.getCompleteResumeById,
   });

   app.route({
      method: 'PUT',
      url: '/update/:id',
      schema: resumeServiceSchema.updateResumeById,
      handler: resumeController.updateResumeById,
   });

   app.route({
      method: 'DELETE',
      url: '/delete/:id',
      schema: resumeServiceSchema.deleteResumeById,
      handler: resumeController.deleteResumeById,
   });

   app.route({
      method: 'DELETE',
      url: '/delete/all',
      schema: resumeServiceSchema.deleteAllResumes,
      handler: resumeController.deleteAllResumes,
   });
};

module.exports = {
   resumeRoutes,
};
