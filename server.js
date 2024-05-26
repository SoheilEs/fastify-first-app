import Fastify from "fastify";
import productRotues from "./routes/product.routes.js";
import indexRotues from "./routes/index.routes.js";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
const fastify = Fastify({
  logger: true,
});

const swaggerOptions = {
  swagger: {
      info: {
          title: "Fastify Swagger",
          description: "First Swagger",
          version: "1.0.0",
      },
      // host: "localhost",
      schemes: ["http", "https"],
      consumes: ["application/json"],
      produces: ["application/json"],
      tags: [{ name: "Products", description: "Products Routes" },{ name: "Index", description: "Index Routes" }],
      securityDefinitions:{
        Authorization: {
          description: 'Authorization header token, sample: "Bearer #TOKEN#"',
          type: 'apiKey',
          name: 'Authorization',
          in: 'header'
        }
      },
      security:[{Authorization:[]}]
  },
};

const swaggerUiOptions = {
  routePrefix: "/docs",
  exposeRoute: true,
};
fastify.register(fastifySwagger,swaggerOptions)
fastify.register(fastifySwaggerUi,swaggerUiOptions)
fastify.register(indexRotues)
fastify.register(productRotues,{prefix:"products"})
const main = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};
main();
