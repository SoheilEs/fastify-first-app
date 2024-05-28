import { loginHandler, registerHandler } from "../handler/auth.handlers.js";

const registerSchema = {
    schema: {
      tags:['Authentication'],
      body:{
        type:'object',
        properties:{
          first_name:{
            type: "string",
          },
          last_name:{
            type: "string",
           
          },
          username:{
            type: "string",
           
          },
          password:{
            type: "string",
            
          }
        }
      },
      responses: {
        201: {
            type: 'object'
        },
      },
    },
    handler: registerHandler,
  };
const loginSchema = {
    schema: {
      tags:['Authentication'],
      body:{
        type:'object',
        properties:{
          username:{
            type: "string",
           
          },
          password:{
            type: "string",
            
          }
        }
      },
      responses: {
        200: {
            type: 'object'
        },
      },
    },
    handler: loginHandler,
  };

export default function authRotues(fastify, options, done) {
  fastify.post("/register", registerSchema);
  fastify.post("/login", loginSchema);
  done();
}
