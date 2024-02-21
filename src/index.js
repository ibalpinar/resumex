const fastify = require('fastify');
const mongoose = require("mongoose");
const fastifySwagger = require("@fastify/swagger");
const fastifySwaggerUi = require("@fastify/swagger-ui");
const { userRoutes } = require('./routes/v1/userRoutes');
const { resumeRoutes } = require('./routes/v1/resumeRoutes');
const { swaggerUiOptions, swaggerOptions } = require('./utils/constants');
const { insertInitialData } = require('./utils/common');

const app = fastify({ logger: true });
const mongoUrl = process.env.MONGODB_URI || "mongodb://localhost:27017/resumex"
const port = process.env.PORT || 3000;

try {
   mongoose.connect(mongoUrl, {});
} catch (err) {
   console.error(err);
}

app.register(fastifySwagger, swaggerOptions);
app.register(fastifySwaggerUi, swaggerUiOptions);
app.register(userRoutes, { prefix: "api/v1/user" });

app.register(resumeRoutes, { prefix: "api/v1/resume" });

insertInitialData();

app.listen({port: port}, (err, address) =>  {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
});
