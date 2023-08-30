// Imports
import express from 'express';
const router = express.Router();

/**
 * @swagger
 * /api/healthcheck:
 *   get:
 *     summary: Healthcheck endpoint
 *     description: Returns a JSON object with a status of "ok" to confirm that the server is running
 *     responses:
 *       200:
 *         description: A JSON object with a status of "ok"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: The status of the server
 *                   example: ok
 */
router.get('/', (req, res) => {
    res.json({ status: 'ok' });
  });

export default router;
