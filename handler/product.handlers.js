import { products } from "../db/products.js";

export const getproductsHandler = (req, reply) => {
    return reply.send(products);
  }

export const getOneProductHandler = (req, reply) => {
    const { id } = req.params;
    const product = products.find((item) => item.id === +id);
    return reply.send(product);
  }


