export const indexHandler = async(request,reply)=>{
    return reply.send({
        message:"Hello to Fastify"
    })
}