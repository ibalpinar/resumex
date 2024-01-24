const User = require('../models/User');

/**
 * TODO: If there is no user return http 404
 * when calling the fetch all user and get
 * one user endpoint
 * Also return 404 on update and delete when
 * the user is not found.
*/

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

   update: async (request, reply) => {},

   delete: async (request, reply) => {},
};