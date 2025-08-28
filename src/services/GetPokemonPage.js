import  axios  from "axios";

export async function getPokemonsPages(PageOffset) {
    const API_URL = `https://pokeapi.co/api/v2/pokemon?limit=30&offset=${PageOffset}`;
    try {
        const listPokemons = [];
        const response = await axios.get(API_URL);
        for (const item of response.data.results) {
            const pokemonData = await getDataPokemon(item.url);
            listPokemons.push(pokemonData);
        }
        return listPokemons;
    } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        throw error;
    }
}

export async function getDataPokemon(API_URL_POKEMON) {
    try {
        const response = await axios.get(API_URL_POKEMON);
        const pokemonData = {
            id: response.data.id,
            name: response.data.name.toUpperCase(),
            weight: response.data.weight,
            height: response.data.height,
            photo: response.data.sprites.front_default,
            description: await getDescriptionPokemon(response.data.id),
            type: response.data.types.map(typeInfo => typeInfo.type.name).join(', '),
        };
        return pokemonData;
    } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        throw error;
    }
}

export async function getDescriptionPokemon(pokemonId) {
    try {
        const API_URL_DESCRIPTION = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`;
        const response = await axios.get(API_URL_DESCRIPTION);
        for (const entry of response.data.flavor_text_entries) {
            if (entry.language.name === 'en') {
                return  entry.flavor_text.replace(/[\n\f]/g, " ").trim();
            }
        }
    } catch (error) {
        console.error("Error fetching Pokémon description:", error);
        throw error;
    }
}
