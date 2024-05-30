import { User } from "../db/models/user.models.js"
import { fastify } from "../server.js";

export const registerHandler = async(req,reply)=>{
    const {username,password, first_name,last_name} = req.body
    const newUser = new User({
        first_name,
        last_name,
        username,
        password : await fastify.bcrypt.hash(password)
    })
    await newUser.save()
    return reply.send(newUser)
}
export const loginHandler = async(req,reply)=>{
   
    const {username,password} = req.body
    const user = await User.findOne({
        where:{
            username
        }
    })
    if(!user) return reply.status(404).send({statusCode:404,
        message:"User doesn't exist"})
    if(!await fastify.bcrypt.compare(password,user.password)) return reply.status(401).send({statusCode:401,
        message:"Username & Password is inccorect"})
    const token = fastify.jwt.sign({
        id: user.id,
        user:user.username,
    },{
        expiresIn: '1h'
    })
    user.accessToken = token
    await user.save()
    return reply.send({
        message: "you have successfully logged in",
        accessToken:token
    })
}