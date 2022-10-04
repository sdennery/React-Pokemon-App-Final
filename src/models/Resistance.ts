export default class Resistance {
    // 1. Typage des propiétés d'un pokémon.
    name: string;
    damage_multiplier: number;
    damage_relation: string;

    // 2. Définition des valeurs par défaut des stats d'un pokémon.
    constructor(
        name: string = "",
        damage_multiplier: number = 1,
        damage_relation: string = ""
    ) {
        // 3. Initialisation des stats d'un pokémons.
        this.name = name;
        this.damage_multiplier = damage_multiplier;
        this.damage_relation = damage_relation;
    }
}