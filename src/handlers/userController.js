const User = require('../models/User');
const error = require('../../utils/errors');
const { hashPassword, comparePassword } = require('../../utils/passwordManager');
const { sendErrorResponse, sendSuccessResponse } = require("../../utils/responseHelpers");

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
               reply,
               {
                  statusCode: 201,
                  message: "User created successfully",
                  data: newUser
               }
            );
         }).catch(err => {
            if(err.code == error.DUPLICATE_KEY_ERROR){
               sendErrorResponse(reply, 400, "User already exist!");
            }else{
               sendErrorResponse(reply, 500, "Internal Server Error!");
            }
         });
      }catch(err){
         console.error(err.message);
         reply.code(500).send(err);
      }
   },

   getAllUser: async (request, reply) => {
      try{
         const users = await User.find({});
         sendSuccessResponse(
            reply,
            {
               statusCode: 200,
               message: "All users listed successfully",
               data: users
            }
         );
      }catch(err){
         console.error(err.message);
         reply.code(500).send(err);
      }
   },

   getUserById: async (request, reply) => {
      try{
         const userId = request.params.id;
         const user = await User.findById(userId);
         sendSuccessResponse(
            reply,
            {
               statusCode: 200,
               message: "User listed successfully",
               data: user
            }
         );
      }catch(err){
         console.error(err.message);
         reply.code(500).send(err);
      }
   },

   updateUser: async (request, reply) => {
      try{
         const userId = request.params.id;
         const userUpdates = request.body;
         await User.findByIdAndUpdate(userId, userUpdates);
         const userToUpdate = await User.findById(userId);
         userToUpdate.password = null;
         sendSuccessResponse(
            reply,
            {
               statusCode: 200,
               message: "User listed successfully",
               data: userToUpdate
            }
         );
      }catch(err){
         console.error(err.message);
         reply.code(500).send(err);
      }
   },

   deleteUser: async (request, reply) => {
      try{
         const userId = request.params.id;
         const userToDelete = await User.findById(userId);
         await User.findByIdAndDelete(userId);
         sendSuccessResponse(
            reply,
            {
               statusCode: 200,
               message: "User deleted successfully",
               data: userToDelete
            }
         );
      }catch(err){
         console.error(err.message);
         reply.code(500).send(err);
      }
   },

   deleteAllUser: async (request, reply) => {
      try{
         await User.deleteMany();
         sendSuccessResponse(
            reply,
            {
               statusCode: 200,
               message: "All users deleted successfully",
               data: null
            }
         );
      }catch(err){
         console.error(err.message);
         reply.code(500).send(err);
      }
   },
};
