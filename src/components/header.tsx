import React, { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import Pokemon from "../models/Pokemon";
import PokemonService from "../services/pokemon-service";

/**
 * This function component allows to return the header bloc.
 * 
 * @returns Header
 */
const Header: FunctionComponent = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 mb-5 bg-white rounded">
            <div className="col-12">
                <Link to="/"><img src="./img/Pokédex_logo.png" alt={"Pokédex"} style={{ width: '105px' }} /></Link>
            </div>
        </nav>
    )
}

export default Header;