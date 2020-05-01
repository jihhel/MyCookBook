import {useState} from "react";
import Months from './Months';
import {Pattern, parsePatterns} from './Patterns';
import Ingredients from './Ingredient';
import {exists, forall} from './functions'
import SearchableString from './SearchableString';

const {chickpea, coconutMilk, lentils, tomatoes} = Ingredients;

const chickpeaCurry = Recipe(
  SearchableString("Curry de pois-chiches"),
  [chickpea, coconutMilk],
  "https://www.youtube.com/watch?v=aP6eXpwIths"
);
const veganBolognese = Recipe(
  SearchableString("Bolognaise Vegan"),
  [lentils, tomatoes],
  "https://www.marmiton.org/recettes/recette_bolognaise-aux-lentilles_27842.aspx"
);

const allRecipes: Recipe[] = [chickpeaCurry, veganBolognese];

export function Recipe(name: SearchableString, ingredients: Ingredient[], url: string) {

    function matchesPattern(p: Pattern): boolean {
        const ingredientMatches = (i: Ingredient) => i.matchesPattern(p);

        const ingredientsMatch = exists(ingredients, ingredientMatches);
        return name.includes(p) || ingredientsMatch;
    }

    return ({
        matchesPatterns(p: Pattern[]): boolean {
            return forall(p, matchesPattern);
        },
        name: name,
        ingredients: ingredients,
        url: url,
        printIngredients(): string {
            return ingredients.map(i => i.name.value).join(', ');
        }
    });
}

export function useFilteredRecipes(): [Recipe[], ((string) => void)] {
    const [filteredRecipes, setFilteredRecipes] = useState(Recipe.allRecipes);

    const filterRecipes: void = (text: string) => {
        const patterns: Pattern[] = parsePatterns(text);
        const filtered = allRecipes.filter((recipe) => recipe.matchesPatterns(patterns));
        setFilteredRecipes(filtered);
    }

    return [filteredRecipes, filterRecipes];
}
