import {
  getOneProductHandler,
  getproductsHandler,
} from "../handler/product.handlers.js";
import { GetUserMiddleware } from "../utils/getUser.js";

const product = {
  items: {
    type: "object",
    properties: {
      id: { type: "integer" },
      title: { type: "string" },
      user:{type:"string"}
    },
  },
};
const getProductSchemas = {
  schema: {
    tags:['Products'],
    response: {
      200: {
        type: "object",
        properties:{
          products:{
            type:"array",
            items: product.items
          },
          user:{
            type: "object",
            properties:{
              id:{type:"number"},
              first_name:{type:"string"},
              last_name:{type:"string"},
              username:{type:"string"},
              accessToken:{type:"string"},

            }
          }
        }
  
      },
    },
  },
  preHandler: [GetUserMiddleware],
  handler: getproductsHandler,
};

const getOneProductSchemas = {
  schema: {
    tags:['Products'],
    params:{
      type:'object',
      properties:{
        id:{
          type: "string",
          description:" Id of product"
        }
      }
    },
    responses: {
      200: product,
    },
  },
  preHandler: [GetUserMiddleware],
  handler: getOneProductHandler,
};


export default function productRotues(fastify,options,done){
  // fastify.addHook("onRequest",async request => await request.jwtVerify())
  fastify.get("/", getProductSchemas);
  fastify.get("/:id", getOneProductSchemas);
  done()
}