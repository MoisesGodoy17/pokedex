
import "../styles/PokemonCard.css";
import starOn from "../assets/start-fav.png";
import starOff from "../assets/start-no-fav.png";

function PokemonCard({ pokemon, favorites, onToggleFavorite }) {
  const { id, name, description, photo, types, height, weight } = pokemon;
  const isFav = favorites.includes(id);

  return (
    <div className="pokemon-card">
      <div className="favorite-icon"
        aria-pressed={isFav}
        onClick={() => onToggleFavorite(id)}
        title={isFav ? "Remove from favorites" : "Add to favorites"}
      >
        <img src={isFav ? starOn : starOff} alt={isFav ? "Favorite" : "Not favorite"} />
      </div>

      <div className="pokemon-image">
        <img src={photo} alt={name} />
      </div>
      <div className="pokemon-info">
        <h3>{name}</h3>
        <p>#{id}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default PokemonCard;
