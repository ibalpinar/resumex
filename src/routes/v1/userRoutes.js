const userController = require('../../handlers/userController');
const { userServiceSchema } = require('../../routes/v1/schemas/userServiceSchema');

const userRoutes = async (app, opts) => {
   app.route({
      method: "POST",
      url: "/create",
      handler: userController.createUser,
   });

   app.route({
      method: "GET",
      url: "/fetch",
      handler: userController.getAllUser,
   });

   app.route({
      method: "GET",
      url: "/get/:id",
      handler: userController.getUserById,
   });

   app.route({
      method: "PUT",
      url: "/update/:id",
      handler: userController.updateUser,
   });

   app.route({
      method: "DELETE",
      url: "/delete/:id",
      handler: userController.deleteUser,
   });

   app.route({
      method: "DELETE",
      url: "/delete/all",
      handler: userController.deleteAllUser,
   });
 };

 module.exports = {
	userRoutes
};