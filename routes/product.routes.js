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
const getProductSchemas = {
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
  handler: getOneProductHandler,
};


export default function productRotues(fastify,options,done){
  fastify.get("/", getProductSchemas);
  fastify.get("/:id", getOneProductSchemas);
  done()
}