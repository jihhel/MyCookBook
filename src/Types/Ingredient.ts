import {Month} from './Months';
import {Pattern} from '../Utils/Patterns'
import SearchableString from '../Utils/SearchableString';

export default class Ingredient {
    name: SearchableString;
    seasonality: Month[];

    constructor(name: SearchableString, seasonality: Month[]) {
        this.name = name;
        this.seasonality = seasonality;
    }

    isAvailableIn(p: Pattern): boolean {
        return this.seasonality.filter(m => m.name.includes(p)).length !== 0;
    }

    matchesPattern(p: Pattern): boolean {
        return this.name.includes(p) || this.isAvailableIn(p);
    }
}
/*
export default {
    Ingredient: Ingredient,
    coconutMilk: Ingredient(SearchableString("Lait de Coco"), Months.wholeYear),
    lentils: Ingredient(SearchableString("Lentilles"), Months.wholeYear),
    tomato: Ingredient(SearchableString("Tomates"), Months.range(Months.June, Months.September)),
    chickpea: Ingredient(SearchableString("Pois-Chiches"), Months.wholeYear),
    leek: Ingredient(SearchableString("Poireaux"), Months.range(Months.September, Months.April)),
    turnip: Ingredient(SearchableString("Navets"), Months.range(Months.October, Months.May)),
    carrot: Ingredient(SearchableString("Carottes"), Months.range(Months.September, Months.March)),
    celeryBranch: Ingredient(SearchableString("Branches de céleri"), Months.range(Months.October, Months.March)),
    parisMushroom: Ingredient(SearchableString("Champignons de Paris"), Months.wholeYear),
    onion: Ingredient(SearchableString("Oignons"), Months.range(Months.September, Months.April)),
    garlic: Ingredient(SearchableString("Gousse d'ail"), Months.range(Months.July, Months.December)),
    soySauce: Ingredient(SearchableString("Sauce Soja"), Months.wholeYear)
};*/