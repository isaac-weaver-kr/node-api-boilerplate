// Middleware that catches all the erorrs - try/catch doesn't have to be used in routes
import { Request, Response, NextFunction } from 'express';

const error = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.message, err);
    res.status(500).send({ error: err.message });
}

export default error;