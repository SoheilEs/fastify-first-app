import Fastify from "fastify";
import productRotues from "./routes/product.routes.js";
import indexRotues from "./routes/index.routes.js";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { swaggerOptions, swaggerUiOptions } from "./config/swagger.config.js";
import "./config/connectToDb.js";
import authRotues from "./routes/auth.routes.js";
import fastifyBcrypt from "fastify-bcrypt";
export const fastify = Fastify({
  logger: true,
});
fastify.register(fastifyBcrypt,{
  saltWorkFactor:12
})
fastify.register(fastifySwagger,swaggerOptions)
fastify.register(fastifySwaggerUi,swaggerUiOptions)
fastify.register(indexRotues)
fastify.register(productRotues,{prefix:"products"})
fastify.register(authRotues,{prefix:"auth"})
const main = async () => {
  try {
    
    await fastify.listen({ port: 3000 });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};
main();
