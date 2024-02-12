const fastify = require('fastify');
const mongoose = require("mongoose");
const fastifySwagger = require("@fastify/swagger");
const fastifySwaggerUi = require("@fastify/swagger-ui");
const User = require("./models/User");
const { userRoutes } = require('./routes/v1/userRoutes');

const app = fastify({ logger: true });
const mongoUrl = process.env.MONGODB_URI || "mongodb://localhost:27017/resumex"
const port = process.env.PORT || 3000;

try {
    mongoose.connect(mongoUrl);
} catch (err) {
    console.error(err);
}

const swaggerOptions = {
   swagger: {
       info: {
           title: process.env.SWAGGER_TITLE,
           description: process.env.SWAGGER_DESCRIPTION,
           version: process.env.VERSION,
       },
       host: process.env.HOST,
       schemes: ["http", "https"],
       consumes: ["application/json"],
       produces: ["application/json"],
       tags: [{ name: "Default", description: "Default" }],
   },
};

const swaggerUiOptions = {
   routePrefix: "/docs",
   exposeRoute: true,
};

app.register(fastifySwagger, swaggerOptions);
app.register(fastifySwaggerUi, swaggerUiOptions);

app.register(userRoutes, { prefix: "api/v1/user" });

app.listen({port: port}, (err, address) =>  {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
});
