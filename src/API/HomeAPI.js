
import Ingredient from '../Types/Ingredient';
import {Recipe} from '../Types/Recipe';
import * as Months from '../Types/Months';

import SearchableString from '../Utils/SearchableString';

// const backend = "https://my-cook-book-backend.herokuapp.com"
const backend = "http://localhost:8080"

export async function getMarmitonRecipes(search) {
    const queryParam = search ? `?aqt=${search}` : '';

    return fetch(`${backend}/marmiton${queryParam}`, {
        headers: {
            'access-control-allow-origin': backend
        }
    }).then((response) => {
        return response.json();
    }).then((rawRecipes) => {
        return rawRecipes.map((recipe) => {
            const ingredients = recipe.ingredients.map((ingredient) => {
                return new Ingredient(new SearchableString(ingredient), Months.wholeYear);
            });

            return new Recipe(new SearchableString(recipe.name), ingredients, recipe.url);
        });
    });
}

/* export function getLocalRecipes() {
    const rawRecipes = localRecipes.recipes;
    
    return rawRecipes.map((recipe) => {
        const ingredients = recipe.ingredients.map((ingredient) => {
            return Ingredient(SearchableString(ingredient.name.value), ingredient.seasonality);
        })

        return Recipe(SearchableString(recipe.name.value), ingredients, recipe.url);
    });
}*/