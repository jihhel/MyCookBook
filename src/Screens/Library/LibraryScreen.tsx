import './LibraryScreen.css';
import React, {useState} from 'react';

import { Recipe } from '../../Types/Recipe';
import Ingredient from '../../Types/Ingredient';

import { RecipeRow } from '../../Components/RecipeRow/RecipeRow';
import SearchableString from '../../Utils/SearchableString';
import {filterRecipes} from "../../Types/Recipe";

import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import * as HomeAPI from '../../API/HomeAPI';

export default function LibraryScreen() {

    const flour = new Ingredient(new SearchableString('Farine'), []);
    const recipeTitle = new SearchableString('Béchamel végétale');
    const recipe = new Recipe(recipeTitle, [flour], 'http://marmiton.fr');

    const defaultRecipes: Recipe[] = [recipe];

    const [filteredRecipes, setFilteredRecipes] = useState(defaultRecipes);
    const [textSearch, setTextSearch] = useState("");

    async function updateMarmitonRecipes() {
        const marmitonRecipes = await HomeAPI.getMarmitonRecipes(textSearch);
        updateDisplayedRecipes(marmitonRecipes);
    }

    function updateDisplayedRecipes(marmitonRecipes: Recipe[]) {
        const newFilteredRecipes = filterRecipes(defaultRecipes, textSearch);
        setFilteredRecipes(newFilteredRecipes.concat(marmitonRecipes));
    }

    return (
        <div className="mainContainer">
            <div className="desktopCentralColumn">
                <header className="header">
                    <span className="mainTitle">
                        Bibliothèque de recettes 🥞
                    </span>
                </header>
                <div className="researchContainer">
                <span className="researchLabel">Chercher une recette</span>
                <div className="searchBar">
                    <input type="text" className="searchInput" onChange={e => setTextSearch(e.target.value)} value={textSearch}/>
                    <button className="searchButton" onClick={updateMarmitonRecipes} color='#FFF'>CHERCHER !</button>
                </div>
                </div>
                <div className="searchResults">
                {filteredRecipes.map((recipe) => <div key={recipe.name.toString()}>{RecipeRow(recipe)}</div>)}
                </div>
            </div>
        </div>
    );

}