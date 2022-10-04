export default class Type {
    // 1. Typage des propiétés d'un pokémon.
    name: string;
    image: string;

    // 2. Définition des valeurs par défaut des types d'un pokémon.
    constructor(
        name: string = "",
        image: string = "",
    ) {
        // 3. Initialisation des types d'un pokémons.
        this.name = name;
        this.image = image;
    }
}