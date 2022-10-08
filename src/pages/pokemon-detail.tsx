import React, { FunctionComponent, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import PokemonDetailCard from "../components/pokemon-detail-card";
import PokemonLoader from "../components/pokemon-loader";
import Pokemon from "../models/Pokemon";
import PokemonService from "../services/pokemon-service";


/**
 * The property "id" must be filled.
 */
type Params = {
    id: string,
};

/**
 * This function component allows to retrieve a detail page of a specific pokemon.
 * 
 * @param param0 id 
 * @returns PokemonsDetail
 */
const PokemonsDetail: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {

    // State Hooks
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    // Effect Hook
    useEffect(() => {
        const fetchData = () => {
            const data = PokemonService.getPokemonById(+match.params.id).then((pokemon) => { setPokemon(pokemon)});
        }
        fetchData();        
    }, [match.params.id]);

    return (
        <div className="container">
            {pokemon ? (
                <PokemonDetailCard pokemon={pokemon} />
            ) : (
                <div className="d-flex justify-content-center" >
                    <h4><PokemonLoader /></h4>
                </div>
            )}
        </div>
    )
}

export default PokemonsDetail;
