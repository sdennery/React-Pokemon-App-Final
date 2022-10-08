import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import formatType from "../helpers/format-type";
import Pokemon from "../models/Pokemon";
import PokemonLoader from "./pokemon-loader";

/**
 * The property "pokemon" must be filled.
 */
type Props = {
  pokemon: Pokemon,
};

/**
 * This function component allows to retrieve all information regarding a specific pokemon.
 * 
 * @param param0 pokemon
 * @returns PokemonDetailCard
 */
const PokemonDetailCard: FunctionComponent<Props> = ({ pokemon }) => {

  return (
    <div className="row">
      {pokemon ? (
        <div className="col s12">
          <div className="card hoverable">
            <div className="card-image">
              <img src={pokemon.image} alt={pokemon.name} style={{ width: '250px', margin: '0 auto' }} />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <table className="bordered striped">
                  <tbody>
                    <tr>
                      <td>Nom</td>
                      <td><strong>{pokemon.name}</strong></td>
                    </tr>
                    <tr>
                      <td>Points de vie</td>
                      <td><strong>{pokemon.stats.HP}</strong></td>
                    </tr>
                    <tr>
                      <td>Attaque</td>
                      <td><strong>{pokemon.stats.attack}</strong></td>
                    </tr>
                    <tr>
                      <td>Défense</td>
                      <td><strong>{pokemon.stats.defense}</strong></td>
                    </tr>
                    <tr>
                      <td>Attaque Spéciale</td>
                      <td><strong>{pokemon.stats.special_attack}</strong></td>
                    </tr>
                    <tr>
                      <td>Défense Spéciale</td>
                      <td><strong>{pokemon.stats.special_defense}</strong></td>
                    </tr>
                    <tr>
                      <td>Vitesse</td>
                      <td><strong>{pokemon.stats.speed}</strong></td>
                    </tr>
                    <tr>
                      <td>Types</td>
                      <td>
                        {pokemon.apiTypes.map(type => (
                          <span key={type.image} className={formatType(type.name)}>{type.name}</span>
                        ))}
                      </td>
                    </tr>
                    <tr>
                      <td>Génération</td>
                      <td><strong>{pokemon.apiGeneration}</strong></td>
                    </tr>
                    <tr>
                      <td>Évolution(s)</td>
                      {
                        pokemon.apiEvolutions.length > 0 ? 
                        (<td>
                          {pokemon.apiEvolutions.map(evolution => (
                            <span key={evolution.name}><Link to={`/pokemon/${evolution.pokedexId}`}>{evolution.name}</Link></span>
                          ))}
                        </td>)
                       : (
                        <td>Aucune(s) évolution(s)</td>
                       )}
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="card-action">
                <Link to="/">Retour</Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h4 className="center"><PokemonLoader /></h4>
      )}
    </div>
  )
}

export default PokemonDetailCard;