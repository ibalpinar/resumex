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
      schema: userServiceSchema.fetch,
      handler: userController.getAllUser
   });

   app.route({
      method: "GET",
      url: "/get/:id",
      schema: userServiceSchema.get,
      handler: userController.getUserById
   });

   app.route({
      method: "PUT",
      url: "/update/:id",
      schema: userServiceSchema.update,
      handler: userController.updateUser
   });

   app.route({
      method: "DELETE",
      url: "/delete/:id",
      schema: userServiceSchema.delete,
      handler: userController.deleteUser
   });

   app.route({
      method: "DELETE",
      url: "/delete/all",
      schema: userServiceSchema.deleteAllUsers,
      handler: userController.deleteAllUser
   });
 };

 module.exports = {
	userRoutes
};