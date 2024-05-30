import { User } from "../db/models/user.models.js";
import { fastify } from "../server.js";

export const GetUserMiddleware = async(req,reply)=>{
    const authorization = req?.headers?.authorization;
    if(!authorization)return reply.status(401).send({message:"you need to authorization"})
    const[bearer,token] = authorization.split(" ")
    if( bearer && bearer.toLowerCase() === "bearer"){
       const result =  fastify.jwt.verify(token)
     
       if(typeof result === "string") return reply.status(400).send({message:result})
        const {user:username} = result
        const user = await User.findOne({
            attributes: ['id','first_name', 'last_name','username','isActive'],
            where:{
                username
            }
        })
        req.user = user.dataValues

    }else{
       return reply.status(401).send({message:"Your token not valid"})
    }
}