// Imports
import express from 'express';
const router = express.Router();

/**
 * @swagger
 * /api/ping:
 *   get:
 *     summary: Ping the server
 *     description: Returns a "pong" message to confirm that the server is running
 *     responses:
 *       200:
 *         description: A "pong" message
 */
router.get('/', async (req, res) => {
  // Validate the request body  
  res
    .status(200)
    .send('pong');
});

export default router;
