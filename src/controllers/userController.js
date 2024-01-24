const User = require('../models/User');

module.exports = {
   create: async (request, reply) => {
      try{
         const user = request.body;
         const newUser = await User.create(user);
         reply.code(201).send({ data: newUser });
      }catch(e){
         reply.code(500).send(e);
      }
   },

   fetch: async (request, reply) => {
      try{
         const users = await User.find({});
         reply.code(200).send({ data: users });
      }catch(e){
         reply.code(500).send(e);
      }
   },

   get: async (request, reply) => {
      try{
         const userId = request.params.id;
         const user = await User.findById(userId);
         reply.code(200).send({ data: user });
      }catch(e){
         reply.code(500).send(e);
      }
   },

   update: async (request, reply) => {
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

   delete: async (request, reply) => {
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