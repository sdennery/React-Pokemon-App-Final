import Pokemon from "../models/Pokemon";
import Types from "../models/Types";

export default class PokemonService {

    static getListPokemon(limit: number): Promise<Pokemon[]> {
        return fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/' + limit)
            .then(response => response.json())
            .catch(error => this.handleError(error));
    }

    static getListPokemonByGeneration(generation: number): Promise<Pokemon[]> {
        return fetch('https://pokebuildapi.fr/api/v1/pokemon/generation/' + generation)
            .then(response => response.json())
            .catch(error => this.handleError(error));
    }

    static getListPokemonByTypes(types: string[]): Promise<Pokemon[]> {
        let url_service;
        if (types.length > 1) {
            url_service = 'https://pokebuildapi.fr/api/v1/pokemon/types/';
        } else {
            url_service = 'https://pokebuildapi.fr/api/v1/pokemon/type/';
        }

        return fetch(url_service + types.join('/'))
        .then(response => response.json())
        .catch(error => this.handleError(error));
    }

    static getPokemonById(id: number): Promise<Pokemon> {
        return fetch('https://pokebuildapi.fr/api/v1/pokemon/' + id)
        .then(response => response.json())
        .catch(error => this.handleError(error));
    }

    static getListTypes(): Promise<Types[]> {
        return fetch('https://pokebuildapi.fr/api/v1/types')
        .then(response => response.json())
        .catch(error => this.handleError(error)); 
    }

    static handleError(msg: string): string {
        console.error(msg);
        return msg;
    }
}