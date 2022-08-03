const swaggerAutogen = require("swagger-autogen")()

const doc = {
    info: {
        version: "1.0.0",
        title: "NewsApp",
        description: "API for news using nodeJS"
        
    },
    host: "localhost:3001",
    basePath: "/",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [
        
    ],
    securityDefinitions: {
        Authorization: {
            type: "apiKey",
            name: "Authorization",
            description: "Value: Bearer",
            in: "header",
            scheme: "bearer"
        }
    },
    definition: {
        LoginModel: {
            $email: "admin@gmail.com",
            $password: "Password123",
        },
        RegisterModel: {
            $username: "gschwaze34",
            $email: "mail@mail.com",
            $password: "Password123",
        }
    }
};

const outputFile = "./swagger_output.json"