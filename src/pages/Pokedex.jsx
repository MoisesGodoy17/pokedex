function Pokedex({pokemon}) {
    const { id, name, description, photo, types, height, weight } = pokemon;

    return(
    <div className="pokedex-container">
        <h2>{name}</h2>
        <img src={photo} alt={name} />
        <p>Height: {height}</p>
        <p>Weight: {weight}</p>
        <p>Types: {types.join(", ")}</p>
    </div>)
}

export default Pokedex;