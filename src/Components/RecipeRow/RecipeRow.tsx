import React from 'react';
import './RecipeRow.css';

import {EButton} from '../UIComponents/EButton/EButton';

import { Recipe } from '../../Types/Recipe';

export function RecipeRow(recipe: Recipe) {
    return (
        <div className='row'>
            <div className='details'>
                <span className='title'>{recipe.name.value}</span>
                <div>
                    <span> Ingrédients : {recipe.printIngredients()}.</span>
                </div>
            </div>
            <EButton className='button' text={'VOIR LA RECETTE'} onClick={() => window.open(recipe.url, "_blank")}/>
        </div>
    );
}