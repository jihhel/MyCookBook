import {exists, forall} from '../Utils/functions'

import {Pattern, parsePatterns} from '../Utils/Patterns'
import SearchableString from '../Utils/SearchableString';
import Ingredient from './Ingredient';

/*
const {
    chickpea, 
    coconutMilk, 
    lentils, 
    tomato, 
    leek,
    turnip,
    carrot,
    celeryBranch,
    parisMushroom,
    onion,
    garlic,
    soySauce,
} = Ingredients;

const chickpeaCurry = Recipe(
  SearchableString("Curry de pois-chiches"),
  [chickpea, coconutMilk],
  "https://www.youtube.com/watch?v=aP6eXpwIths"
);
const veganBolognese = Recipe(
  SearchableString("Bolognaise Végan"),
  [lentils, tomato],
  "https://www.marmiton.org/recettes/recette_bolognaise-aux-lentilles_27842.aspx"
);
const veganParmentier = Recipe(
    SearchableString("Hachis parmentier végan"),
    [tomato, leek, turnip, carrot, celeryBranch, parisMushroom, onion, garlic, soySauce],
    "https://www.marmiton.org/recettes/recette_hachis-parmentier-vegetarien_14594.aspx"
);
const allRecipes: Recipe[] = [chickpeaCurry, veganBolognese, veganParmentier];
*/

class Recipe {
    name: SearchableString;
    ingredients: Ingredient[];
    url: string;

    constructor(name: SearchableString, ingredients: Ingredient[], url: string) {
        this.name = name;
        this.ingredients = ingredients;
        this.url = url;
    }

    matchesPattern(p: Pattern): boolean {
        const ingredientMatches = (i: Ingredient) => i.matchesPattern(p);

        console.log('recipe', this);
        const ingredientsMatch = exists(this.ingredients, ingredientMatches);

        return this.name.includes(p) || ingredientsMatch;
    }

    matchesPatterns(p: Pattern[]): boolean {
        return forall(p, this.matchesPattern.bind(this));
    }

    printIngredients(): string {
        return this.ingredients.map(i => i.name.value).join(', ');
    }
}

export { Recipe };

export function filterRecipes(recipes: Recipe[], search: string): Recipe[] {
    const patterns: Pattern[] = parsePatterns(search);
    const filtered = recipes.filter((recipe) => recipe.matchesPatterns(patterns));

    return filtered;
}
/*
export function useFilteredRecipes(): [Recipe[], ((string) => void)] {
    const [filteredRecipes, setFilteredRecipes] = useState(allRecipes);

    const filterRecipes: void = (text: string) => {
        const patterns: Pattern[] = parsePatterns(text);
        const filtered = allRecipes.filter((recipe) => recipe.matchesPatterns(patterns));
        setFilteredRecipes(filtered);
    }

    return [filteredRecipes, filterRecipes];
}*/
