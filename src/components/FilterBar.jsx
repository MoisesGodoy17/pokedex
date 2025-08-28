import Fav from "../assets/fav.png";

function FilterBarCard({
    query,
    onQueryChange,
    setShowFavorites
}) {
    const handleInputChange = (e) => {
        onQueryChange(e.target.value);
    };

    return (
        <div>
            <div className="filter-bar">
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Search Pokémon..."
                />
            </div>

            <div className="filter-fav-btn">
                <button
                    onClick={() => setShowFavorites(true)}
                    >My Favorites
                    <img src={Fav} alt="Favorites" />
                </button>
                {setShowFavorites && (
                    <button onClick={() => setShowFavorites(false)}
                    >Back to All</button>
                )}
            </div>
        </div>
    );
}
export default FilterBarCard;