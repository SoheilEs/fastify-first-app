import { changeProfile, getProfile } from "../handler/user.handlers.js";
import { GetUserMiddleware } from "../utils/getUser.js";
  
  const user = {
    type: "object",
    properties:{
      id:{type:"number"},
      first_name:{type:"string"},
      last_name:{type:"string"},
      username:{type:"string"},
      isActive:{type:"string"},

    }
  }

  const getProfileSchemas = {
    schema: {
      tags:['Profile'],
      summary:"Get user profile",
      response: {
        200: {type: "object",
        properties:{
         
          userDetail:{
            type: "object",
            properties:{
              id:{type:"number"},
              first_name:{type:"string"},
              last_name:{type:"string"},
              username:{type:"string"},
              accessToken:{type:"string"},
              UserDetail:{
                type:"object",
                properties:{
                  address:{type:"string"},
                  latitudes:{type:"string"},
                  longitudes:{type:"string"},
                }
              },
            },
            
          }
        }
      }
      },
    },
    preHandler: [GetUserMiddleware],
    handler: getProfile,
  };
  
  const changeProfileSchemas = {
    schema: {
      tags:['Profile'],
      summary:"Update user profile",
      body:{
        type:'object',
        properties:{
          address:{
            type: "string",

          },
          latitudes:{
            type: "string",
            
          },
          longitudes:{
            type: "string",
          },
        }
      },
      responses: {
        201: {
          type:"object"
        },
      },
    },
    preHandler: [GetUserMiddleware],
    handler: changeProfile,
  };
  
  
  export default function profileRotues(fastify,options,done){
    fastify.get("/get", getProfileSchemas);
    fastify.patch("/change", changeProfileSchemas);
    done()
  }