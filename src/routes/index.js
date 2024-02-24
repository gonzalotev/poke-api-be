const express = require('express');
const { PokeApiController } = require('../controllers');

const router = express.Router();

/**
 * @swagger
 * /api/:
 *   get:
 *     summary: Retrieve a list of pokemons
 *     description: Get a list of pokemons from the Poke API
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Limit the number of pokemons to retrieve
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *         description: Offset for pagination
 *     responses:
 *       '200':
 *         description: A successful response
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               pokemons: [...]
 */

router.get('/', PokeApiController.fetch);

/**
 * @swagger
 * /api/{name}:
 *   get:
 *     summary: Retrieve information about a specific pokemon
 *     description: Get details about a pokemon from the Poke API
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The name of the pokemon to retrieve
 *     responses:
 *       '200':
 *         description: A successful response
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               pokemon: {...}
 */

router.get('/:name', PokeApiController.find);

module.exports = router;
