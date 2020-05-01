import Months from './Months';
import {MonthPattern} from './Patterns';
import SearchableString from './SearchableString';

const chickpea = Ingredient(SearchableString("Pois-Chiches"), Months.wholeYear);
const coconutMilk = Ingredient(SearchableString("Lait de Coco"), Months.wholeYear);
const lentils = Ingredient(SearchableString("Lentilles"), Months.wholeYear);
const tomatoes = Ingredient(SearchableString("Tomates"), Months.range(Months.June, Months.September));

function Ingredient(name: SearchableString, seasonality: Months[]) {
    return ({
        name: name,
        seasonality: seasonality,
        isAvailableIn(p: MonthPattern): boolean {
            return seasonality.filter(m => m.name.includes(p)).length != 0;
        },
        matchesPattern(p: Pattern): boolean {
            return name.includes(p) || this.isAvailableIn(p);
        },
    });
}

export default {
    Ingredient: Ingredient,
    coconutMilk: Ingredient(SearchableString("Lait de Coco"), Months.wholeYear),
    lentils: Ingredient(SearchableString("Lentilles"), Months.wholeYear),
    tomatoes: Ingredient(SearchableString("Tomates"), Months.range(Months.June, Months.September)),
    chickpea: Ingredient(SearchableString("Pois-Chiches"), Months.wholeYear),
};