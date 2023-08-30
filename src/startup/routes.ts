import express, { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import { specs } from './swagger';
import cors from 'cors';
import ping from '../routes/ping';
import { error } from '../middleware';
import healthcheck from '../routes/healthcheck';

export const routes = (app: Express) => {
    app.use(express.json());
    app.use(cors());
    app.use('/api/ping', ping);
    app.use('/api/healthcheck', healthcheck);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
    app.use(error);
};