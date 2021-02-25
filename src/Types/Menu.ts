import { Recipe } from './Recipe';
import { DayValue } from 'react-modern-calendar-datepicker'


export default class Menu {
    date: DayValue;
    recipe: Recipe | string;

    constructor(date: DayValue, recipe: Recipe | string) {
        this.date = date;
        this.recipe = recipe;
    }
}