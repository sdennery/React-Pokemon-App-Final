export default class Stat {
    HP: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;

    constructor(
        HP: number = 1,
        attack: number = 1,
        defense: number = 1,
        special_attack: number = 1,
        special_defense: number = 1,
        speed: number = 1
    ) {
        this.HP = HP;
        this.attack = attack;
        this.defense = defense;
        this.special_attack = special_attack;
        this.special_defense = special_defense;
        this.speed = speed;
    }
}