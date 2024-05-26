import {
  getOneProductHandler,
  getproductsHandler,
} from "../handler/product.handlers.js";

const product = {
  items: {
    type: "object",
    properties: {
      id: { type: "integer" },
      title: { type: "string" },
    },
  },
};
const getPoductSchemas = {
  schema: {
    tags:['Products'],
    response: {
      200: {
        type: "array",
        items:product.items
      },
    },
  },
  handler: getproductsHandler,
};

const getOnePoductSchemas = {
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
  handler: getOneProductHandler,
};


export default function productRotues(fastify,options,done){
  fastify.get("/", getPoductSchemas);
  fastify.get("/:id", getOnePoductSchemas);
  done()
}