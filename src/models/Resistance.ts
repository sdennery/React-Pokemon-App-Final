export default class Resistance {
    name: string;
    damage_multiplier: number;
    damage_relation: string;

    constructor(
        name: string = "",
        damage_multiplier: number = 1,
        damage_relation: string = ""
    ) {
        this.name = name;
        this.damage_multiplier = damage_multiplier;
        this.damage_relation = damage_relation;
    }
}