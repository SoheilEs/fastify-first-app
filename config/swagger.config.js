export const swaggerOptions = {
    swagger: {
        info: {
            title: "Fastify Swagger",
            description: "Fastify project module and routes",
            version: "1.0.0",
        },
        // host: "localhost",
        schemes: ["http", "https"],
        consumes: ["application/json"],
        produces: ["application/json"],
        tags: [{ name: "Products", description: "Products Routes" },{ name: "Index", description: "Index Routes" },{name:"Authentication",description:"Authenticaton routes and modules"}],
        securityDefinitions:{
          Authorization: {
            description: 'Authorization header token, sample: "Bearer #TOKEN#"',
            type: 'apiKey',
            name: 'Authorization',
            in: 'header'
          }
        },
        security:[{Authorization:[]}]
    },
  };
  
  export const swaggerUiOptions = {
    routePrefix: "/docs",
    exposeRoute: true,
  };