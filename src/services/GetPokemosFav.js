import { getDataPokemon  } from "./GetPokemonPage";

export async function getPokemonsFav(favoritesId) {
    const pokemonsFav = [];
    for (const id of favoritesId) {
        const pokemon = await getDataPokemon(id);
        pokemonsFav.push(pokemon);
    }
    return pokemonsFav;
}
