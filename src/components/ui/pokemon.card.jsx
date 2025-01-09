import Image from "next/image";
import Link from "next/link";

const PokemonCard = ({ pokemon }) => {
    return (
        <Link
            className="p-2 rounded-lg border inline-flex flex-col items-center shadow-lg"
            href={`/pokemons/${pokemon.pokedexId}`}
        >
            <span>#{pokemon.id}</span>
            <Image
                src={pokemon.image}
                width={200}
                height={200}
                alt={pokemon.name}
            />
            <div className="flex flex-col align-center">
                <span>{pokemon.name}</span>
                <div className="flex flex-row">
                    {pokemon.types.map((type) => (
                        <span key={pokemon.pokedexId + "" + type.id}>
                            <Image
                                src={type.image}
                                width={20}
                                height={20}
                                alt={type.name}
                            />
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default PokemonCard;
