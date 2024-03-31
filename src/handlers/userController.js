const User = require('../models/User');
const error = require('../utils/errors');
const constants = require('../utils/constants');
const { removePasswordKey, bcryptPassword } = require('../utils/passwordManager');
const {
   sendErrorResponse,
   sendSuccessResponse,
   checkObjectIdRegex,
   responseMessage,
} = require('../utils/responseHelpers');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

module.exports = {
   createUser: async (request, reply) => {
      const user = request.body;
      if (user.password != user.confirmPassword)
         return sendErrorResponse(reply, 400, responseMessage.PASS_CONFIRM_PASS_DONT_MATCH);

      try {
         user.password = await bcryptPassword(user.password);
         user.userTypeId = new ObjectId(user.userTypeId);
         user.countryId = new ObjectId(user.countryId);
         let newUser = await User.create(user);
         newUser = removePasswordKey(newUser);
         return sendSuccessResponse(reply, {
            statusCode: 201,
            message: responseMessage.USER_CREATED_SUCCESSFULLY,
            data: newUser,
         });
      } catch (err) {
         console.error(err.message);
         if (err.code == error.DUPLICATE_KEY_ERROR)
            return sendErrorResponse(reply, 400, responseMessage.USER_ALREADY_EXIST);

         return sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   fetchAllUsers: async (request, reply) => {
      try {
         const users = await User.find({}).select(constants.selectUserFields);
         if (users.length != 0)
            return sendSuccessResponse(reply, {
               statusCode: 200,
               message: responseMessage.ALL_USERS_LISTED_SUCCESSFULLY,
               data: users,
            });

         return sendSuccessResponse(reply, { statusCode: 204, message: responseMessage.NO_USERS_FOUND, data: [] });
      } catch (err) {
         console.error(err.message);
         return sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   getUserById: async (request, reply) => {
      const userId = request.params.id;
      if (!checkObjectIdRegex.test(userId))
         return sendErrorResponse(reply, 400, responseMessage.CAST_OBJECTID_ERROR + ` ${userId}`);

      try {
         const user = await User.findById(userId).select(constants.selectUserFields);
         if (!user)
            return sendSuccessResponse(reply, { statusCode: 204, message: responseMessage.NO_USER_FOUND, data: {} });

         return sendSuccessResponse(reply, {
            statusCode: 200,
            message: responseMessage.USER_LISTED_SUCCESSFULLY,
            data: user,
         });
      } catch (err) {
         console.error(err.message);
         return sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   updateUserById: async (request, reply) => {
      const userId = request.params.id;
      const userUpdates = request.body;
      if (!checkObjectIdRegex.test(userId))
         return sendErrorResponse(reply, 400, responseMessage.CAST_OBJECTID_ERROR + ` ${userId}`);

      try {
         let userToUpdate = await User.findById(userId);
         if (!userToUpdate)
            return sendSuccessResponse(reply, { statusCode: 204, message: responseMessage.NO_USER_FOUND, data: {} });

         if (userUpdates.password) {
            if (userUpdates.password != userUpdates.confirmPassword)
               return sendErrorResponse(reply, 400, responseMessage.PASS_CONFIRM_PASS_DONT_MATCH);
            userUpdates.password = await bcryptPassword(userUpdates.password);
         } else {
            userUpdates.password = userToUpdate.password;
         }
         await User.findByIdAndUpdate(userId, userUpdates);
         userToUpdate = removePasswordKey(userToUpdate);
         return sendSuccessResponse(reply, {
            statusCode: 200,
            message: responseMessage.USER_UPDATED_SUCCESSFULLY,
            data: userToUpdate,
         });
      } catch (err) {
         console.error(err.message);
         if (err.code == error.DUPLICATE_KEY_ERROR)
            return sendErrorResponse(reply, 400, responseMessage.USER_ALREADY_EXIST);

         return sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   deleteUserById: async (request, reply) => {
      const userId = request.params.id;
      if (!checkObjectIdRegex.test(userId))
         return sendErrorResponse(reply, 400, responseMessage.CAST_OBJECTID_ERROR + ` ${userId}`);

      try {
         const userToDelete = await User.findById(userId).select(constants.selectUserFields);
         if (!userToDelete)
            return sendSuccessResponse(reply, { statusCode: 204, message: responseMessage.NO_USER_FOUND, data: {} });

         await User.findByIdAndDelete(userId);
         return sendSuccessResponse(reply, {
            statusCode: 200,
            message: responseMessage.USER_DELETED_SUCCESSFULLY,
            data: userToDelete,
         });
      } catch (err) {
         console.error(err.message);
         return sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },

   deleteAllUsers: async (request, reply) => {
      try {
         let numberOfUsers = await User.countDocuments({});
         if (numberOfUsers == 0)
            return sendSuccessResponse(reply, { statusCode: 204, message: responseMessage.NO_USERS_FOUND, data: [] });

         await User.deleteMany();
         return sendSuccessResponse(reply, {
            statusCode: 200,
            message: responseMessage.ALL_USERS_DELETED_SUCCESSFULLY,
            data: null,
         });
      } catch (err) {
         console.error(err.message);
         sendErrorResponse(reply, 500, responseMessage.INTERNAL_SERVER_ERROR);
      }
   },
};
