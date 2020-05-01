import Months from './Months';
import {MonthPattern} from './Patterns';
import SearchableString from './SearchableString';

const chickpea = Ingredient(SearchableString("Pois-Chiches"), Months.wholeYear);
const coconutMilk = Ingredient(SearchableString("Lait de Coco"), Months.wholeYear);
const lentils = Ingredient(SearchableString("Lentilles"), Months.wholeYear);
const tomato = Ingredient(SearchableString("Tomates"), Months.range(Months.June, Months.September));
const potato = Ingredient(SearchableString("Pommes de terre"), Months.wholeYear);
const leek = Ingredient(SearchableString("Poireaux"), Months.wholeYear);
const turnip = Ingredient(SearchableString("Navets"), Months.wholeYear);
const carrot = Ingredient(SearchableString("Carottes"), Months.wholeYear);
const celeryBranch = Ingredient(SearchableString("Branches de céleri"), Months.wholeYear);
const parisMushroom = Ingredient(SearchableString("Champignons de Paris"), Months.wholeYear);
const onion = Ingredient(SearchableString("Oignons"), Months.wholeYear);
const garlic = Ingredient(SearchableString("Gousse d'ail"), Months.wholeYear);
const soySauce = Ingredient(SearchableString("Sauce Soja"), Months.wholeYear);

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
};