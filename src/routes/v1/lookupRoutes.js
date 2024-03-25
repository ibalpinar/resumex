const lookupController = require('../../handlers/lookupController');
const { lookupServiceSchema } = require('../../routes/v1/schemas/lookupServiceSchema');

const lookupRoutes = async (app, opts) => {
   app.route({
      method: "GET",
      url: "/fetch/all/countries",
      schema: lookupServiceSchema.fetchAllCountries,
      handler: lookupController.getAllCountries
   });

   app.route({
      method: "GET",
      url: "/fetch/all/interests",
      schema: lookupServiceSchema.fetchAllInterests,
      handler: lookupController.getAllInterests
   });

   app.route({
      method: "GET",
      url: "/fetch/all/skills",
      schema: lookupServiceSchema.fetchAllSkills,
      handler: lookupController.getAllSkills
   });

   app.route({
      method: "GET",
      url: "/fetch/all/languages",
      schema: lookupServiceSchema.fetchAllLanguages,
      handler: lookupController.getAllLanguages
   });
};

module.exports = {
	lookupRoutes
};