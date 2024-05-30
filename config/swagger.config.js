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
    tags: [
      
      {
        name: "Authentication",
        description: "Authenticaton routes and modules",
      },
      {
        name:"Profile",
        description:"Profile routes and modules "
      },
      { name: "Index", description: "Index Routes" },
      {
        name:"Category",
        description:"Category routes and modules "
      },
      { name: "Products", description: "Products Routes" },
      
    ],
    securityDefinitions: {
      Authorization: {
        description: 'Authorization header token, sample: "Bearer #TOKEN#"',
        type: "apiKey",
        name: "Authorization",
        in: "header",
      },
    },
    security: [{ Authorization: [] }],
  },
};

export const swaggerUiOptions = {
  routePrefix: "/docs",
  exposeRoute: true,
};
