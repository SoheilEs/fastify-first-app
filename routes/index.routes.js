import { indexHandler } from "../handler/index.handlers.js";

const indexSchema = {
    schema:{
        tags:['Index'],
        response:{
            200:{
                message:{type:'string'}
            }
        }
    },
    handler: indexHandler
}

export default function indexRotues(fastify,options,done){
    fastify.get("/", indexSchema);
    done()
  }