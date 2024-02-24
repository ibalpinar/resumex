const userController = require('../../handlers/userController');
const { userServiceSchema } = require('../../routes/v1/schemas/userServiceSchema');

const userRoutes = async (app, opts) => {
   app.route({
      method: "POST",
      url: "/create",
      schema: userServiceSchema.createUser,
      handler: userController.createUser
   });

   app.route({
      method: "GET",
      url: "/fetch",
      schema: userServiceSchema.fetchAllUsers,
      handler: userController.fetchAllUsers
   });

   app.route({
      method: "GET",
      url: "/get/:id",
      schema: userServiceSchema.getUserById,
      handler: userController.getUserById
   });

   app.route({
      method: "PUT",
      url: "/update/:id",
      schema: userServiceSchema.updateUserById,
      handler: userController.updateUserById
   });

   app.route({
      method: "DELETE",
      url: "/delete/:id",
      schema: userServiceSchema.deleteUserById,
      handler: userController.deleteUserById
   });

   app.route({
      method: "DELETE",
      url: "/delete/all",
      schema: userServiceSchema.deleteAllUsers,
      handler: userController.deleteAllUsers
   });
 };

 module.exports = {
	userRoutes
};