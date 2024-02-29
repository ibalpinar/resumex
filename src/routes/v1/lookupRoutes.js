const lookupController = require('../../handlers/lookupController');
const { lookupServiceSchema } = require('../../routes/v1/schemas/lookupServiceSchema');

const lookupRoutes = async (app, opts) => {
   app.route({
      method: "GET",
      url: "/fetch/country",
      schema: lookupServiceSchema.fetchAllCountries,
      handler: lookupController.getAllCountries
   });

   app.route({
      method: "GET",
      url: "/fetch/interest",
      schema: lookupServiceSchema.fetchAllInterests,
      handler: lookupController.getAllInterests
   });

};

 module.exports = {
	lookupRoutes
};