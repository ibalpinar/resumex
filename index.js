/**
 * /api/users GET: Returns all users in the datastore.
 * /api/users/:userId GET: Returns a specific user.
 * /api/users POST: Adds a new user.
 * /api/users/:userId PUT: Edits a user.
 * /api/users/:userId DELETE: Removes a user.
*/

const fastify = require('fastify');
const app = fastify();

app.get('/', function (request, reply) {
    reply.send("Our first route...");
})

app.listen({port: 3000}, (err, address) =>  {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
});
