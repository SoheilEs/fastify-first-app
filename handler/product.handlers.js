import { products } from "../db/products.js";

export const getproductsHandler = (req, reply) => {
    console.log(req.user);
    return reply.send({products,user:req.user});
  }

export const getOneProductHandler = (req, reply) => {
    const { id } = req.params;
    const product = products.find((item) => item.id === +id);
    return reply.send(product);
  }


