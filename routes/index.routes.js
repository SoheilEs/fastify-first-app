import { indexHandler } from "../handler/index.handlers.js";

const middleware1 = (req,res,next)=>{
    console.log("Hello from middleware1");
    next()
}
const middleware2 = (req,res,next)=>{
    console.log("Hello from middleware2");
    next()
}
const indexSchema = {
    schema:{
        tags:['Index'],
        summary:"Info about main page",
        
        security: [{ "Authorization": []}],
        response:{
            200:{
                message:{type:'string'}
            }
        }
    },
   
    preHandler: [middleware1,middleware2], // # Solution 2 using middleware on a route in schema
    handler:indexHandler
}



export default function indexRotues(fastify,options,done){
    fastify.get("/",indexSchema);


    //---------------------------------------------
    // # Solution 1 using middleware on a route

    // fastify.get("/",{preHandler:[middleware1,middleware2]},(request,reply)=>{
    //     return reply.send({message:"Hello form Fastify"})
    // })
    done()
  }