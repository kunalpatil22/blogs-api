const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Blogs API",
      version: "1.0.0",
      description: "A simple REST API for managing blogs.",
    },
    servers: [
      {
        url:
          process.env.NODE_ENV === "production"
            ? process.env.SWAGGER_SERVER_URL
            : "http://127.0.0.1:8080",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

module.exports = swaggerJsdoc(options);
