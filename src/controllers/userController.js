const User = require('../models/User');
const { hashPassword } = require('../../utils/passwordManager');

module.exports = {
   createUser: async (request, reply) => {
      try{
         const user = request.body;
         var bcryptedPassword = hashPassword(user.password, process.env.SALT_ROUNDS);
         await bcryptedPassword.then(function(bcrypted){
            user.password = bcrypted.hash;
            user.salt = bcrypted.salt;
            return user;
         }).then(async (user) => {
            const newUser = await User.create(user);
            reply.code(201).send({ data: newUser });
         }).catch(e => {
            console.error(e.message);
         });
      }catch(e){
         reply.code(500).send(e);
      }
   },

   getAllUser: async (request, reply) => {
      try{
         const users = await User.find({});
         reply.code(200).send({ data: users });
      }catch(e){
         reply.code(500).send(e);
      }
   },

   getUserById: async (request, reply) => {
      try{
         const userId = request.params.id;
         const user = await User.findById(userId);
         reply.code(200).send({ data: user });
      }catch(e){
         reply.code(500).send(e);
      }
   },

   updateUser: async (request, reply) => {
      try{
         const userId = request.params.id;
         const userUpdates = request.body;
         await User.findByIdAndUpdate(userId, userUpdates);
         const userToUpdate = await User.findById(userId);
         reply.code(200).send({ data: userToUpdate });
      }catch(e){
         reply.code(500).send(e);
      }
   },

   deleteUser: async (request, reply) => {
      try{
         const userId = request.params.id;
         const userToDelete = await User.findById(userId);
         await User.findByIdAndDelete(userId);
         reply.code(200).send({ data: userToDelete });
      }catch(e){
         reply.code(500).send(e);
      }
   },
};
