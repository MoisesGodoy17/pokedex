function FilterBarCard({
    query,
    onQueryChange
}) {
    const handleInputChange = (e) => {
        onQueryChange(e.target.value);
    };

    return (
        <div className="filter-bar">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search Pokémon..."
            />
        </div>
    );
}
export default FilterBarCard;