import swaggerJSDoc, { Options } from 'swagger-jsdoc';

const options: Options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'My API',
        version: '1.0.0',
      },
    },
    apis: ['./src/routes/*.ts'],
};

export const specs = swaggerJSDoc(options);