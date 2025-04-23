const express = require('express');
const router = express.Router();
const controller = require('../controllers/schoolController');

/**
 * @swagger
 * /addSchool:
 *   post:
 *     summary: Add a new school
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name: { type: string }
 *               address: { type: string }
 *               latitude: { type: number }
 *               longitude: { type: number }
 *     responses:
 *       201:
 *         description: School added successfully
 */
router.post('/addSchool', controller.addSchool);

/**
 * @swagger
 * /listSchools:
 *   get:
 *     summary: List schools sorted by proximity
 *     parameters:
 *       - name: latitude
 *         in: query
 *         required: true
 *         schema: { type: number }
 *       - name: longitude
 *         in: query
 *         required: true
 *         schema: { type: number }
 *     responses:
 *       200:
 *         description: A list of schools sorted by proximity
 */
router.get('/listSchools', controller.listSchools);

module.exports = router;
