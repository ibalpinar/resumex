const userController = require('../../handlers/userController');

const userRoutes = async (app, opts) => {
   app.route({
      method: "POST",
      url: "/",
      handler: userController.createUser,
   });

   app.route({
      method: "GET",
      url: "/",
      handler: userController.getAllUser,
   });

   app.route({
      method: "GET",
      url: "/:id",
      handler: userController.getUserById,
   });

   app.route({
      method: "PUT",
      url: "/:id",
      handler: userController.updateUser,
   });

   app.route({
      method: "DELETE",
      url: "/:id",
      handler: userController.deleteUser,
   });
 };

 module.exports = {
	userRoutes
};