import { useEffect, useState } from "react";
import { useLocalStorage } from "../services/useLocalStorage";
import { getPokemonsPages } from "../services/GetPokemonPage";
import PokemonCard from "../components/PokemonCard";
import FilterBarCard from "../components/FilterBar";

function PokeGrid() {
    const [favorites, setFavorites] = useLocalStorage("favoritesList", []);
    const [pokemons, setPokemons] = useState([]);
    const [query, setQuery] = useState("");

    const toggleFavorite = (id) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    useEffect(() => {
        getPokemonsPages(0)
            .then(data => setPokemons(data))
            .catch(error => console.error("Error fetching Pokémon pages:", error));
    }, []);

    const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <div className="filter-container">
                <FilterBarCard query={query}
                    onQueryChange={setQuery} />
            </div>
            <div className="poke-grid">
                {filteredPokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} 
                    pokemon={pokemon} 
                    favorites={favorites} 
                    onToggleFavorite={toggleFavorite} />
                ))}
            </div>
        </div>
    );
}

export default PokeGrid;
