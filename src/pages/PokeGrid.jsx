import { useEffect, useState } from "react";
import { useLocalStorage } from "../services/useLocalStorage";
import { getPokemonsPages } from "../services/GetPokemonPage";
import { getPokemonsFav } from "../services/GetPokemosFav"
import PokemonCard from "../components/PokemonCard";
import FilterBarCard from "../components/FilterBar";
import PaginationBtn from "../components/PaginationBtn";



function PokeGrid() {
    const [favorites, setFavorites] = useLocalStorage("favoritesList", []);
    const [pokemons, setPokemons] = useState([]);
    const [query, setQuery] = useState("");
    const [showFavorites, setShowFavorites] = useState(false);
    const [page, setPage] = useState(0);

    const PAGE_SIZE = 30;

    console.log("Show Favorites:", showFavorites);
    console.log("Favorites List:", favorites);

    const toggleFavorite = (id) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    useEffect(() => {
        async function fetchPokemons() {
            try {
                if (showFavorites) {
                    if (!favorites.length) {
                        console.log("Hola");
                        return setPokemons([]);
                    }
                    console.log("Hola");
                    const data = await getPokemonsFav(favorites);
                    setPokemons(data);
                } else {
                    const offset = page * PAGE_SIZE;
                    console.log("Fetching!!! all pokemons: --", offset);
                    const data = await getPokemonsPages(offset);
                    setPokemons(data);
                }
            } catch (error) {
                console.error("Error fetching pokemons:", error);
            }
        }
        fetchPokemons();
    }, [showFavorites, favorites, page]);

    const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(query.toLowerCase())
    );

    const canPrev = !showFavorites && page > 0;
    const canNext = !showFavorites && pokemons.length === PAGE_SIZE;

    return (
        <div>
            <div className="filter-container">
                <FilterBarCard query={query}
                    onQueryChange={setQuery}
                    setShowFavorites={setShowFavorites} />
            </div>
            <div className="poke-grid">
                {filteredPokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id}
                        pokemon={pokemon}
                        favorites={favorites}
                        onToggleFavorite={toggleFavorite} />
                ))}
            </div>
            <div>
                <PaginationBtn
                    page={page}
                    onChange={setPage}
                    canPrev={canPrev}
                    canNext={canNext}
                />
            </div>
        </div>
    );
}

export default PokeGrid;
