const apiUrl = process.env.API_URL;

class PokeApiService {
  static async fetchPokemons(limit, offset) {
    try {
      const response = await fetch(
        `${apiUrl}/pokemon?limit=${limit}&offset=${offset}`
      );
      const { results } = await response.json();
      const pokemonList = await Promise.all(
        results.map(async (pokemon) => {
          const detailedPokemon = await this.findPokemon(pokemon.name);
          return {
            name: pokemon.name,
            image: detailedPokemon.sprites.other["official-artwork"].front_default,
            types: detailedPokemon.types.map((type) => type.type.name),
          };
        })
      );

      return pokemonList;
    } catch (error) {
      throw new Error("Error fetching pokemons:", error);
    }
  }

  static async findPokemon(name) {
    try {
      const response = await fetch(`${apiUrl}/pokemon/${name}`);
      const pokemonData = await response.json();
      const { sprites, types, stats } = pokemonData;
      const simplifiedPokemon = { sprites, types, stats };
      console.log(simplifiedPokemon);
      return simplifiedPokemon;
    } catch (error) {
      throw new Error("Error finding pokemon:", error);
    }
  }
}

module.exports = PokeApiService;
