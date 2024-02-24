const { PokeApiService } = require("../services");

class PokeApiController {
  static async fetch(req, res, next) {
    try {
      const { limit, offset } = req.query;
      const pokemons = await PokeApiService.fetchPokemons(limit, offset);
      res.send(pokemons);
    } catch (error) {
      next(error);
    }
  }

  static async find(req, res, next) {
    try {
      const { name } = req.params;
      const pokemon = await PokeApiService.findPokemon(name);
      res.send(pokemon);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PokeApiController;
