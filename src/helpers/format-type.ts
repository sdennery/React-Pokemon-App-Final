/**
 * 
 * @param type 
 * @return a specific type with his color.
 */
const formatType = (type: string): string => {
    let color: string;

    switch (type) {
        case 'Feu':
            color = 'red lighten-1';
            break;
        case 'Eau':
            color = 'blue lighten-1';
            break;
        case 'Plante':
            color = 'green lighten-1';
            break;
        case 'Insecte':
            color = 'brown lighten-1';
            break;
        case 'Normal':
            color = 'grey lighten-3';
            break;
        case 'Vol':
            color = 'blue lighten-3';
            break;
        case 'Poison':
            color = 'deep-purple accent-1';
            break;
        case 'Fée':
            color = 'pink lighten-4';
            break;
        case 'Psy':
            color = 'deep-purple darken-2';
            break;
        case 'Électrik':
            color = 'lime accent-1';
            break;
        case 'Combat':
            color = 'deep-orange';
            break;
        case 'Sol':
            color = 'brown lighten-2';
            break;
        case 'Roche':
            color = 'grey lighten-2';
            break;
        case 'Spectre':
            color = 'deep-purple darken-3';
            break;
        case 'Acier':
            color = 'grey lighten-1';
            break;
        case 'Glace':
            color = 'blue lighten-2';
            break;
        case 'Dragon':
            color = 'deep-purple darken-2';
            break;
        case 'Ténèbre':
            color = 'brown lighten-3';
            break;
        default:
            color = 'grey';
            break;
    }

    return `chip ${color}`;
}

export default formatType;