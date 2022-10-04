export default class Type {
    // 1. Typage des propiétés d'un pokémon.
    name: string;
    pokedexId: number;

    // 2. Définition des valeurs par défaut des types d'un pokémon.
    constructor(
        name: string = "",
        pokedexId: number = 0,
    ) {
        // 3. Initialisation des types d'un pokémons.
        this.name = name;
        this.pokedexId = pokedexId;
    }
}