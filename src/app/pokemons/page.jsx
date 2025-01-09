"use client";

import api from "@/lib/api";
import { useEffect, useReducer, useState } from "react";
import PokemonCard from "../../components/ui/pokemon.card";
import { filterReducer, initialState } from "../../reducers/filter.reducer";
import Filter from "../../components/ui/filter";

export default function PokemonList() {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonTypes, setPokemonTypes] = useState([]);

    const [filteredPokemons, setFilteredPokemons] = useState([]);

    const [filterState, dispatch] = useReducer(filterReducer, initialState);

    const fetchPokemons = async () => {
        const query = new URLSearchParams();

        if (filterState.search) {
            query.append("name", filterState.search);
        }

        if (filterState.type) {
            query.append("types[]", filterState.type);
        }

        if (filterState.limit) {
            query.append("limit", filterState.limit);
        }

        const response = await api.get(
            `https://nestjs-pokedex-api.vercel.app/pokemons?${query.toString()}`
        );

        const data = await response.data;

        setPokemons(data);
        setFilteredPokemons(data);
    };

    useEffect(() => {
        fetchPokemons();
    }, [filterState]);

    const fetchPokemonTypes = async () => {
        try {
            const response = await api.get(
                "https://nestjs-pokedex-api.vercel.app/types"
            );
            setPokemonTypes(response.data);
        } catch (error) {
            console.error("Error fetching Pokémon types:", error);
        }
    };

    useEffect(() => {
        fetchPokemonTypes();
    }, []);

    return (
        <div>
            <Filter
                filterState={filterState}
                dispatch={dispatch}
                types={pokemonTypes}
            />
            <div className="grid gap-2 grid-cols-8">
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.pokedexId} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
}
