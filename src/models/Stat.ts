export default class Stat {
    // 1. Typage des propiétés d'un pokémon.
    HP: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;

    // 2. Définition des valeurs par défaut des stats d'un pokémon.
    constructor(
        HP: number = 1,
        attack: number = 1,
        defense: number = 1,
        special_attack: number = 1,
        special_defense: number = 1,
        speed: number = 1
    ) {
        // 3. Initialisation des stats d'un pokémons.
        this.HP = HP;
        this.attack = attack;
        this.defense = defense;
        this.special_attack = special_attack;
        this.special_defense = special_defense;
        this.speed = speed;
    }
}