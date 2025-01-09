"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import PokemonDetailCard from "../../../components/ui/pokemon-detail.card";
import Link from "next/link";

const PokemonDetail = ({ params }) => {
    const { pokedexId } = params;
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                const response = await api.get(
                    `https://nestjs-pokedex-api.vercel.app/pokemons/${pokedexId}`
                );
                setPokemon(response.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to load Pokémon details");
                setLoading(false);
            }
        };

        if (pokedexId) {
            fetchPokemonDetails();
        }
    }, [pokedexId]);

    if (loading) {
        return <div>Chargement ...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <Link href={"/pokemons"} className="p-5">
                Retour
            </Link>
            <div className="px-64">
                <PokemonDetailCard pokemon={pokemon} />
            </div>
        </>
    );
};

export default PokemonDetail;
