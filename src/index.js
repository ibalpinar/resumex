const fastify = require('fastify');
const mongoose = require("mongoose");
const fastifySwagger = require("@fastify/swagger");
const fastifySwaggerUi = require("@fastify/swagger-ui");
const { userRoutes } = require('./routes/v1/userRoutes');
const { resumeRoutes } = require('./routes/v1/resumeRoutes');
const { lookupRoutes } = require('./routes/v1/lookupRoutes');
const { authenticationRoutes } = require('./routes/v1/authenticationRoutes');
const { accountRoutes } = require('./routes/v1/accountRoutes');
const { swaggerUiOptions, swaggerOptions, healthResponseObject } = require('./utils/constants');
const { insertInitialData } = require('./utils/insertInitialData');
const jwt = require('@fastify/jwt');

const app = fastify({ logger: (process.env.DEVELOPMENT)?true:false });
const mongoUrl = process.env.MONGODB_URI || "mongodb://localhost:27017/resumex"
const port = process.env.PORT || 3000;

try {
   mongoose.connect(mongoUrl, {});
} catch (err) {
   console.error(err);
   process.exit(-1);
}

app.register(jwt, {secret: process.env.JWT_SECRET});
app.register(fastifySwagger, swaggerOptions);
app.register(fastifySwaggerUi, swaggerUiOptions);
app.register(userRoutes, { prefix: "api/v1/user" });
app.register(resumeRoutes, { prefix: "api/v1/resume" });
app.register(lookupRoutes, { prefix: "api/v1/lookup" });
app.register(authenticationRoutes, { prefix: "api/v1/authentication" });
app.register(accountRoutes, { prefix: "api/v1/account" });
app.get('/health', (req, res) => {res.send( healthResponseObject )});

insertInitialData();

app.listen({port: port}, (err, address) =>  {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
});
