const fastify = require('fastify');
const mongoose = require("mongoose")
const User = require("./models/User");
const userRoutes = require('./routes/userRoutes');

const app = fastify();
const mongoUrl = process.env.MONGODB_URI || "mongodb://localhost:27017/users"

try {
    mongoose.connect(mongoUrl);
} catch (error) {
    console.error(error);
}

userRoutes(app);

app.listen({port: 3000}, (err, address) =>  {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
});
