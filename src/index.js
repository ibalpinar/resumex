const fastify = require('fastify');
const mongoose = require("mongoose")
const User = require("./models/User");
const userRoutes = require('./routes/userRoutes');

const app = fastify();
const mongoUrl = process.env.MONGODB_URI || "mongodb://localhost:27017/resumex"
const port = process.env.PORT || 3000;

try {
    mongoose.connect(mongoUrl);
} catch (err) {
    console.error(err);
}

userRoutes(app);

app.listen({port: port}, (err, address) =>  {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
});
