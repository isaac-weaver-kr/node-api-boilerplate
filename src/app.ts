import express from 'express';
import { routes } from './startup/routes';
const app = express();

routes(app);

const port: number = Number(process.env.PORT) || 4000;

export const server = app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

export default app;