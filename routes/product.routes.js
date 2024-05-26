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
    response: {
      200: {
        type: "array",
        product,
      },
    },
  },
  handler: getproductsHandler,
};

const getOnePoductSchemas = {
  schema: {
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