import { products } from "../db/products.js";

export const getproductsHandler = (req, reply) => {
    return reply.serialize(products);
  }

export const getOneProductHandler = (req, reply) => {
    const { id } = req.params;
    const product = products.find((item) => item.id === +id);
    return reply.serialize(product);
  }


