const lookupController = require('../../handlers/lookupController');
const { lookupServiceSchema } = require('../../routes/v1/schemas/lookupServiceSchema');

const lookupRoutes = async (app, opts) => {
   app.route({
      method: "GET",
      url: "/fetch/country",
      schema: lookupServiceSchema.fetchAllCountries,
      handler: lookupController.getAllCountries
   });

};

 module.exports = {
	lookupRoutes
};