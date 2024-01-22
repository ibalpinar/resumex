/**
 * /api/users GET: Returns all users in the datastore.
 * /api/users/:userId GET: Returns a specific user.
 * /api/users POST: Adds a new user.
 * /api/users/:userId PUT: Edits a user.
 * /api/users/:userId DELETE: Removes a user.
*/

const fastify = require('fastify');
const mongoose = require("mongoose")
const User = require("./models/Users");

const app = fastify();
const mongoUrl = process.env.MONGODB_URI || "mongodb://localhost:27017/users"
/** connect to MongoDB datastore */
try {
    mongoose.connect(mongoUrl);
} catch (error) {
    console.error(error);
}

app.get('/', function (req, res) {
    res.send("Welcome to ResumeX!");
})

app.post("/api/users", (req, res) => {
   let user = req.body;

   User
      .create(user)
      .then(() => {
         res.send({
            status: 1,
            msg: "success"
         });
   })
   .catch((err) => {
      res.send({
         status: 0,
         msg: "error"
      });
      console.error(err);
   });

});

app.listen({port: 3000}, (err, address) =>  {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
});
