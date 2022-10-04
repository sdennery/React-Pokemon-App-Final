import Evolution from "./Evolution";
import Resistance from "./Resistance";
import ResistanceModifyingAbility from "./ResistanceModifyingAbility";
import Stat from "./Stat";
import Type from "./Type";

export default class Pokemon {
    id: number;
    pokedexId: number;
    name: string;
    image: string;
    sprite: string;
    slug: string;
    stats: Stat;
    apiTypes: Array<Type>;
    apiGeneration: number;
    apiResistances: Array<Resistance>;
    resistanceModifyingAbilitiesForApi: ResistanceModifyingAbility; 
    apiEvolutions: Array<Evolution>;
    apiPreEvolution: string;
    apiResistancesWithAbilities: Array<Resistance>;

    constructor(
        id: number = 0,
        pokedexId: number = 0,
        name: string = "",
        image: string = "",
        sprite: string = "",
        slug: string = "",
        stats: Stat = new Stat(),
        apiTypes: Array<Type> = [],
        apiGeneration: number = 0,
        apiResistances: Array<Resistance> = [],
        resistanceModifyingAbilitiesForApi: ResistanceModifyingAbility = new ResistanceModifyingAbility(),
        apiEvolutions: Array<Evolution> = [],
        apiPreEvolution: string = "",
        apiResistancesWithAbilities: Array<Resistance> = []
    ) {
        // 3. Initialisation des stats d'un pokémons.
        this.id = id;
        this.pokedexId = pokedexId;
        this.name = name;
        this.image = image;
        this.sprite = sprite;
        this.slug = slug;
        this.stats = stats;
        this.apiTypes = apiTypes;
        this.apiGeneration = apiGeneration;
        this.apiResistances = apiResistances;
        this.resistanceModifyingAbilitiesForApi = resistanceModifyingAbilitiesForApi;
        this.apiEvolutions = apiEvolutions;
        this.apiPreEvolution = apiPreEvolution;
        this.apiResistancesWithAbilities = apiResistancesWithAbilities;
    }

}