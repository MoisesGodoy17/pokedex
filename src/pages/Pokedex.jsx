import { useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonsFav } from "../services/GetPokemosFav"

function Pokedex() {
    const [pokemons, setPokemons] = useState([])
    const { id } = useParams();

    getPokemonsFav([id]).then((data) => {
        setPokemons(data);
    });

    return(
    <div className="pokedex-container">
        {pokemons.map((pokemon) =>(
            <ul key={pokemon.id}>
                <h3>{pokemon.name}</h3>
                <p>{pokemon.description}</p>
                <p>{pokemon.weight}</p>
                <p>{pokemon.height}</p>
                <p>{pokemon.type}</p>
                <img src={pokemon.photo} alt={pokemon.name} />
            </ul>
        ))}
    </div>)
}

export default Pokedex;