const User = require('../models/User');
const error = require('../../utils/errors');
const { hashPassword, comparePassword, removePasswordKey } = require('../../utils/passwordManager');
const { sendErrorResponse, sendSuccessResponse, checkObjectIdRegExp, responseMessage } = require("../../utils/responseHelpers");

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
            newUser = removePasswordKey(newUser);

            sendSuccessResponse(
               reply, { statusCode: 201, message: responseMessage.USER_CREATED_SUCCESSFULLY, data: newUser }
            );

         }).catch(err => {
            console.error(err.message);
            if(err.code == error.DUPLICATE_KEY_ERROR){
               sendErrorResponse(reply, 400, responseMessage.USER_ALREADY_EXIST);
            }else{
               sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
            }
         });
      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   getAllUser: async (request, reply) => {
      try{
         const users = await User.find({});
         if(users.length != 0){
            sendSuccessResponse(
               reply, { statusCode: 200, message: responseMessage.ALL_USERS_LISTED_SUCCESSFULLY, data: users }
            );
         }
         else{
            sendErrorResponse(reply, 404, responseMessage.NO_USERS_FOUND);
         }
      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   getUserById: async (request, reply) => {
      try{
         const userId = request.params.id;

         if(checkObjectIdRegExp.test(userId)){
            const user = await User.findById(userId);
            if(user){
               sendSuccessResponse(
                  reply, { statusCode: 200, message: responseMessage.USER_LISTED_SUCCESSFULLY, data: user }
               );
            }else{
               sendErrorResponse(reply, 404, responseMessage.NO_USER_FOUND);
            }
         }else{
            sendErrorResponse(reply, 400, responseMessage.CAST_OBJECTID_ERROR + ` ${userId}`);
         }
      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
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
                  reply, { statusCode: 200, message: responseMessage.USER_UPDATED_SUCCESSFULLY, data: userToUpdate }
               );
            }else{
               sendErrorResponse(reply, 404, responseMessage.NO_USER_FOUND);
            }
         }else{
            sendErrorResponse(reply, 400, responseMessage.CAST_OBJECTID_ERROR + ` ${userId}`);
         }

      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
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
                  reply, { statusCode: 200, message: responseMessage.USER_DELETED_SUCCESSFULLY, data: userToDelete }
               );
            }else{
               sendErrorResponse(reply, 404, responseMessage.NO_USER_FOUND);
            }
         }else{
            sendErrorResponse(reply, 400, responseMessage.CAST_OBJECTID_ERROR + ` ${userId}`);
         }

      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   deleteAllUser: async (request, reply) => {
      try{
         let numberOfUsers = await User.countDocuments({});
         if(numberOfUsers != 0){
            await User.deleteMany();
            sendSuccessResponse(
               reply, { statusCode: 200, message: responseMessage.ALL_USERS_DELETED_SUCCESSFULLY, data: null }
            );
         }else{
            sendErrorResponse(reply, 404, responseMessage.NO_USERS_FOUND);
         }
      }catch(err){
         console.error(err.message);
         sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },
};
