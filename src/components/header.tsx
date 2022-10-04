import React, { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import Pokemon from "../models/Pokemon";
import PokemonService from "../services/pokemon-service";

const Header: FunctionComponent = () => {

    const [term, setTerm] = useState<string>('');
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [result, setResult] = useState<Pokemon[]>([]);

    const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setTerm(term);

        if (term.length <= 4) {
            setPokemons([]);
            return;
        }

        await PokemonService.getListPokemon(1000).then(pokemon => setResult(pokemon));
        const filteredList = result.filter(el => el.name.toLowerCase().includes(term.toLowerCase()));
        setPokemons(filteredList.slice(0, 10));
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 mb-5 bg-white rounded">
            <div className="col-12">
                <Link to="/"><img src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" alt={"Pokédex"} style={{ width: '105px' }} /></Link>
            </div>
        </nav>
    )
}

export default Header;