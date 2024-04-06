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
      if (user.password != user.confirmPassword) {
         return sendErrorResponse(reply, 400, responseMessage.PASS_CONFIRM_PASS_DONT_MATCH);
      }

      try {
         const userExist = await User.findOne({ email: user.email, deletedAt: { $eq: null } });
         if (userExist) {
            return sendErrorResponse(reply, 400, responseMessage.USER_ALREADY_EXIST);
         }

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
         const users = await User.find({ deletedAt: { $eq: null } }).select(constants.selectUserFields);
         if (users.length != 0)
            return sendSuccessResponse(reply, {
               statusCode: 200,
               message: responseMessage.ALL_USERS_LISTED_SUCCESSFULLY,
               data: users,
            });

         return sendErrorResponse(reply, 404, responseMessage.NO_USERS_FOUND);
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
         const user = await User.findOne({ _id: userId, deletedAt: { $eq: null } }).select(constants.selectUserFields);
         if (!user) {
            return sendErrorResponse(reply, 404, responseMessage.NO_USER_FOUND);
         }

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
         let userToUpdate = await User.findOne({ _id: userId, deletedAt: { $eq: null } });

         if (!userToUpdate) {
            return sendErrorResponse(reply, 404, responseMessage.NO_USER_FOUND);
         }

         if (userUpdates.password) {
            if (userUpdates.password != userUpdates.confirmPassword) {
               return sendErrorResponse(reply, 400, responseMessage.PASS_CONFIRM_PASS_DONT_MATCH);
            }
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
         const userToDelete = await User.findOne({ _id: userId, deletedAt: { $eq: null } }).select(
            constants.selectUserFields,
         );

         if (!userToDelete) {
            return sendErrorResponse(reply, 404, responseMessage.NO_USER_FOUND);
         }

         const now = new Date();
         let deleteUserRequestUpdates = { updatedAt: now, deletedAt: now };
         await User.findByIdAndUpdate(userId, deleteUserRequestUpdates);

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
         let numberOfUsers = await User.countDocuments({ deletedAt: { $eq: null } });
         if (numberOfUsers == 0) {
            return sendErrorResponse(reply, 404, responseMessage.NO_USERS_FOUND);
         }

         const now = new Date();
         let deleteUserRequestUpdates = { updatedAt: now, deletedAt: now };

         await User.updateMany({ deletedAt: { $eq: null } }, deleteUserRequestUpdates);
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
