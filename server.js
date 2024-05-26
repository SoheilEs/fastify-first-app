import Fastify from "fastify";
import productRotues from "./routes/product.routes.js";
import indexRotues from "./routes/index.routes.js";

const fastify = Fastify({
  logger: true,
});

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
