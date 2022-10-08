export default class Type {
    name: string;
    pokedexId: number;

    constructor(
        name: string = "",
        pokedexId: number = 0,
    ) {
        this.name = name;
        this.pokedexId = pokedexId;
    }
}