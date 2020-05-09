import {Recipe} from '../../Types/Recipe';
import {Ingredient} from '../../Types/Ingredient';
import Months from '../../Types/Months';
import SearchableString from '../../Types/SearchableString';
import localRecipes from '../../../assets/recipes.json';

const backend = "https://my-cook-book-backend.herokuapp.com"
//const backend = "http://localhost:8080"

async function getMarmitonRecipes(search) {
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
                return Ingredient(SearchableString(ingredient), Months.wholeYear);
            });

            return Recipe(SearchableString(recipe.name), ingredients, recipe.url);
        });
    });
}

function getLocalRecipes() {
    const rawRecipes = localRecipes.recipes;
    
    return rawRecipes.map((recipe) => {
        const ingredients = recipe.ingredients.map((ingredient) => {
            return Ingredient(SearchableString(ingredient.name.value), ingredient.seasonality);
        })

        return Recipe(SearchableString(recipe.name.value), ingredients, recipe.url);
    });
}

export default {
    getMarmitonRecipes: getMarmitonRecipes,
    getLocalRecipes: getLocalRecipes
}