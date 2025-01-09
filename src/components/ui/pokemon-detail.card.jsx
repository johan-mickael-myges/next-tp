const PokemonDetailCard = ({ pokemon }) => {
    return (
        <div className="flex flex-row">
            <div className="shadow-lg p-5 border">
                <h1 className="text-2xl font-bold">{pokemon.name}</h1>
                <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className="w-48 h-48 object-contain my-4"
                />
                <ul className="flex space-x-4">
                    {pokemon.types.map((type) => (
                        <li
                            key={type.id}
                            className="flex items-center align-center"
                        >
                            <img
                                src={type.image}
                                alt={type.name}
                                className="w-6 h-6 mr-2"
                            />
                            {type.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="p-5">
                <div className="border rounded-lg p-2">
                    <h2>Statistiques</h2>
                    <p>
                        <strong>HP:</strong> {pokemon.stats.HP}
                    </p>
                    <p>
                        <strong>Speed:</strong> {pokemon.stats.speed}
                    </p>
                    <p>
                        <strong>Attack:</strong> {pokemon.stats.attack}
                    </p>
                    <p>
                        <strong>Defense:</strong> {pokemon.stats.defense}
                    </p>
                    <p>
                        <strong>Special Attack:</strong>{" "}
                        {pokemon.stats.specialAttack}
                    </p>
                    <p>
                        <strong>Special Defense:</strong>{" "}
                        {pokemon.stats.specialDefense}
                    </p>
                </div>
                <div className="border rounded-lg p-2 mt-4">
                    <h2>Evolutions</h2>
                    <ul>
                        {pokemon.evolutions.map((evolution) => (
                            <li key={evolution.pokedexId}>
                                {evolution.name} (Pokedex ID:{" "}
                                {evolution.pokedexId})
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetailCard;
