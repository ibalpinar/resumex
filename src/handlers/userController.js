const User = require('../models/User');
const error = require('../../utils/errors');
const { hashPassword, comparePassword } = require('../../utils/passwordManager');
const { sendErrorResponse, sendSuccessResponse, checkObjectIdRegExp, reponseMessage } = require("../../utils/responseHelpers");

module.exports = {
   createUser: async (request, reply) => {
      try{
         const user = request.body;
         var hash = hashPassword(user.password, process.env.SALT_ROUNDS);
         await hash.then(function(rHash){
            user.password = rHash;
            return user;
         }).then(async (user) => {
            let newUser = await User.create(user);
            newUser.password = null;

            sendSuccessResponse(
               reply, { statusCode: 201, message: "User created successfully", data: newUser }
            );

         }).catch(err => {
            console.error(err.message);
            if(err.code == error.DUPLICATE_KEY_ERROR){
               sendErrorResponse(reply, 400, "User already exist!");
            }else{
               sendErrorResponse(reply, 500, "Internal Server Error!");
            }
         });
      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, "Internal Server Error!");
      }
   },

   getAllUser: async (request, reply) => {
      try{
         const users = await User.find({});
         if(users.length != 0){
            sendSuccessResponse(
               reply, { statusCode: 200, message: "All users listed successfully", data: users }
            );
         }
         else{
            sendErrorResponse(reply, 404, "No Users Found!");
         }
      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, "Internal Server Error!");
      }
   },

   getUserById: async (request, reply) => {
      try{
         const userId = request.params.id;

         if(checkObjectIdRegExp.test(userId)){
            const user = await User.findById(userId);
            if(user){
               sendSuccessResponse(
                  reply, { statusCode: 200, message: "User listed successfully", data: user }
               );
            }else{
               sendErrorResponse(reply, 404, "No User Found!");
            }
         }else{
            sendErrorResponse(reply, 400, `Cast to ObjectId failed for value ${userId}`);
         }
      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, "Internal Server Error!");
      }
   },

   updateUser: async (request, reply) => {
      try{
         const userId = request.params.id;
         const userUpdates = request.body;

         if(checkObjectIdRegExp.test(userId)){
            const userToUpdate = await User.findById(userId);
            if(userToUpdate){
               await User.findByIdAndUpdate(userId, userUpdates);
               const userToUpdate = await User.findById(userId);
               userToUpdate.password = null;
               sendSuccessResponse(
                  reply, { statusCode: 200, message: "User updated successfully", data: userToUpdate }
               );
            }else{
               sendErrorResponse(reply, 404, "No User Found!");
            }
         }else{
            sendErrorResponse(reply, 400, `Cast to ObjectId failed for value ${userId}`);
         }

      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, "Internal Server Error!");
      }
   },

   deleteUser: async (request, reply) => {
      try{
         const userId = request.params.id;

         if(checkObjectIdRegExp.test(userId)){
            const userToDelete = await User.findById(userId);
            if(userToDelete){
               await User.findByIdAndDelete(userId);
               sendSuccessResponse(
                  reply, { statusCode: 200, message: "User deleted successfully", data: userToDelete }
               );
            }else{
               sendErrorResponse(reply, 404, "No User Found!");
            }
         }else{
            sendErrorResponse(reply, 400, `Cast to ObjectId failed for value ${userId}`);
         }

      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, "Internal Server Error!");
      }
   },

   deleteAllUser: async (request, reply) => {
      try{
         let numberOfUsers = await User.countDocuments({});
         if(numberOfUsers != 0){
            await User.deleteMany();
            sendSuccessResponse(
               reply, { statusCode: 200, message: "All users deleted successfully", data: null }
            );
         }else{
            sendErrorResponse(reply, 404, "No Users Found!");
         }
      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, "Internal Server Error!");
      }
   },
};
