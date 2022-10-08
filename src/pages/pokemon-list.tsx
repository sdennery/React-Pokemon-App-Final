import React, { FunctionComponent, useEffect, useState } from "react";
import Pokemon from "../models/Pokemon";
import PokemonService from "../services/pokemon-service";
import PokemonCard from "../components/pokemon-card";
import PokemonLoader from "../components/pokemon-loader";
import Types from "../models/Types";
import formatType from "../helpers/format-type";
import { useHistory } from "react-router-dom";

/**
 * Declaration of Type
 */
type Field = {
    value?: any,
    error?: string,
    isValid?: boolean
}

/**
 * Declaration of form type
 */
type FormTypes = {
    types: Field
}

/**
 * This function component allows to retrieve a list of pokemons in a page.
 * 
 * @returns PokemonList
 */
const PokemonList: FunctionComponent = () => {

    // State Hook
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [nbElements, setNbElements] = useState<number>(25);
    const [loading, setLoading] = useState<boolean>(false);
    const [isFiltered, setIsFiltered] = useState<boolean>(true);
    const [pokemonTypes, setPokemonTypes] = useState<Types[]>([]);
    const [generationsList] = useState<string[]>(["Genération 1", "Genération 2", "Genération 3", "Genération 4", "Genération 5", "Genération 6", "Genération 7", "Genération 8"]);
    const [hideGeneration, setHideGeneration] = useState<boolean>(false);
    const [hideTypes, setHideTypes] = useState<boolean>(false);
    const [generation, setGeneration] = useState<number>(1);
    const [types] = useState<Array<string>>([]);

    const [formTypes, setFormTypes] = useState<FormTypes>({
        types: { value: types, isValid: true }
    })

    // Effect Hook
    useEffect(() => {
        const fetchTypeData = async () => {
            setLoading(true);
            await PokemonService.getListTypes().then((type) => { setPokemonTypes(type) });
            setLoading(false);
        }
        fetchTypeData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            if (isFiltered) {
                setLoading(true);
                await PokemonService.getListPokemon(nbElements).then((pokemons) => { setPokemons(pokemons) });
                setLoading(false);
            }
        }
        fetchData();
    }, [nbElements]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /**
     * This function allows to load new pokemons by scrolling in the bottom page.
     */
    const handleScroll = async () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            setNbElements((prev) => prev + 25);
        }
    };

    /**
     * This function allows to have access to the generation form.
     */
    const filterByGeneration = () => {
        if (hideGeneration) {
            setHideGeneration(false);
        } else {
            setHideGeneration(true);
        }
        setHideTypes(false);
    }

    /**
     * This function allows to have access to the types form.
     */
    const filterByTypes = () => {
        if (hideTypes) {
            setHideTypes(false);
        } else {
            setHideTypes(true);
        }
        setHideGeneration(false);
    }

    const changeGeneration = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setGeneration(+e.target.value);
    }

    /**
     * This function allows to submit the generation form.
     */
    const handleGenerationSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        getPokemonsByGeneration();
        setIsFiltered(false);
    }

    /**
     * This function allows to get the pokemons by generations.
     */
    const getPokemonsByGeneration = async () => {
        setLoading(true);
        setPokemons([]);
        await PokemonService.getListPokemonByGeneration(generation).then((pokemons) => setPokemons(pokemons));
        setLoading(false);
    }

    const hasType = (type: string): boolean => {
        return formTypes.types.value.includes(type);
    }

    const isTypeValid = (type: string): boolean => {
        if (formTypes.types.value.length === 1 && hasType(type)) {
            return false;
        }

        if (formTypes.types.value.length >= 2 && !hasType(type)) {
            return false;
        }

        return true;
    }

    const selectCheckedChange = (type: string, e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        let newField: Field;

        if (checked) {
            const newTypes: string[] = formTypes.types.value.concat([type]);
            newField = { value: newTypes };
        } else {
            const newTypes: string[] = formTypes.types.value.filter((currentType: string) => currentType !== type);
            newField = { value: newTypes };
        }
        setFormTypes({ ...formTypes, ...{ types: newField } });
    }

    /**
     * This function allows to submit the type form.
     */
    const handleTypeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        getPokemonsByTypes();
        setIsFiltered(false);
    }

    /**
     * This function allows to submit the reset form.
     */
    const handleResetSubmit = async () => {
        setLoading(true);
        setPokemons([]);
        await PokemonService.getListPokemon(25).then((pokemons) => setPokemons(pokemons));
        setLoading(false);
        setIsFiltered(true);
    }

    /**
     * This function allows to get the pokemons by type.
     */
    const getPokemonsByTypes = async () => {
        setLoading(true);
        setPokemons([]);
        await PokemonService.getListPokemonByTypes(formTypes.types.value).then((pokemons) => setPokemons(pokemons));
        setLoading(false);
    }

    return (
        pokemons ? (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-primary" style={{ "width": "255px", "marginTop": "10px" }} onClick={() => filterByGeneration()}>Filtrer par génération</button>
                        {hideGeneration &&
                            <div>
                                <form onSubmit={e => handleGenerationSubmit(e)}>
                                    <div className="col s12 m8 offset-m2">
                                        <br />
                                        <div className="card hoverable">
                                            <div className="card-stacked">
                                                <div className="card-content">
                                                    {/* Pokemon types */}
                                                    <div className="form-group">
                                                        <div className="select-container">
                                                            <label>Génération</label>
                                                            <select id="generations" style={{ "display": "block" }} onChange={(e) => changeGeneration(e)}>
                                                                {generationsList.map((generation, index) => (
                                                                    <option key={index + 1} value={index + 1}>{generation}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-action center">
                                                    {/* Submit button */}
                                                    <button type="submit" className="btn">Valider</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-primary" style={{ "width": "255px", "marginTop": "10px" }} onClick={() => filterByTypes()}>Filtrer par types</button>
                        {hideTypes &&
                            <div>
                                <form onSubmit={e => handleTypeSubmit(e)}>
                                    <div className="col s12 m8 offset-m2">
                                        <br />
                                        <div className="card hoverable">
                                            <div className="card-stacked">
                                                <div className="card-content">
                                                    {/* Pokemon types */}
                                                    <div className="form-group">
                                                        <label>Types</label>
                                                        {pokemonTypes.map(type => (
                                                            <div key={type.name} style={{ marginBottom: '10px' }}>
                                                                <label>
                                                                    <input id={type.name} type="checkbox" className="filled-in" value={type.name} disabled={!isTypeValid(type.name)} checked={hasType(type.name)} onChange={e => selectCheckedChange(type.name, e)} />
                                                                    <span>
                                                                        <p className={formatType(type.name)}>{type.name}</p>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="card-action center">
                                                    {/* Submit button */}
                                                    <button type="submit" className="btn">Valider</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-primary" style={{ "width": "255px", "marginTop": "10px" }} onClick={() => handleResetSubmit()}>Reset le filtre</button>
                    </div>
                </div>
                <br />
                {
                    pokemons.length > 0 ? (
                        <div className="row">
                            {pokemons.map(pokemon => (
                                <PokemonCard key={pokemon.id} pokemon={pokemon} />
                            ))}
                        </div>
                    ) : (
                        <div className="d-flex justify-content-center" >
                            <h4>Aucun pokémon à afficher</h4>
                        </div>
                    )
                }

                <br />
                {loading &&
                    <div className="row d-flex justify-content-center">
                        <h4><PokemonLoader /></h4>
                    </div>
                }
            </div>
        ) : (
            <div className="d-flex justify-content-center" >
                <h4><PokemonLoader /></h4>
            </div>
        )
    )
}

export default PokemonList;