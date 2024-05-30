import Fastify from "fastify";
import path, {dirname} from "path"
import { fileURLToPath } from "url";
import productRotues from "./routes/product.routes.js";
import indexRotues from "./routes/index.routes.js";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { swaggerOptions, swaggerUiOptions } from "./config/swagger.config.js";
import "./config/connectToDb.js";
import authRotues from "./routes/auth.routes.js";
import fastifyBcrypt from "fastify-bcrypt";
import fastifyJwt from "@fastify/jwt";
import fastifyExpress from "@fastify/express";
import cors from "cors"
import fastifyMiddie from "@fastify/middie";
import serveStatic from "serve-static";
import profileRotues from "./routes/profile.routes.js";
import categoryRoutes from "./routes/category.routes.js";
const __dirname = dirname(fileURLToPath(import.meta.url))
export const fastify = Fastify({
  logger: true,
});
const main = async () => {
try {
// await fastify.register(fastifyExpress)
await fastify.register(fastifyMiddie)
fastify.register(fastifyBcrypt,{
  saltWorkFactor:12
})
fastify.register(fastifyJwt,{
  secret:'superSecret'
})
fastify.register(fastifySwagger,swaggerOptions)
fastify.register(fastifySwaggerUi,swaggerUiOptions)
fastify.use(cors())
fastify.use((req,res,next)=>{
  console.log("Hello middleware");
  next()
})

fastify.use("/",serveStatic(path.join(__dirname,"public")))
fastify.register(authRotues,{prefix:"auth"})
fastify.register(profileRotues,{prefix:"profile"})
fastify.register(indexRotues)
fastify.register(categoryRoutes,{prefix:"category"})
fastify.register(productRotues,{prefix:"products"})

  
    
    await fastify.listen({ port: 3000 });
  } catch (error) {

    fastify.log.error(error);
    process.exit(1);
  }
};
main();
