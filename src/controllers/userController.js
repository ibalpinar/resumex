const User = require('../models/User');

module.exports = {
   create: async (request, reply) => {
      try{
         const user = request.body;
         const newUser = await User.create(user);
         reply.code(201).send(newUser);
      }catch(e){
         reply.code(500).send(e);
      }
   },

   fetch: async (request, reply) => {
      try{
         const users = await User.find({});
         reply.code(200).send(users);
      }catch(e){
         reply.code(500).send(e);
      }
   },

   get: async (request, reply) => {},

   update: async (request, reply) => {},

   delete: async (request, reply) => {},
};