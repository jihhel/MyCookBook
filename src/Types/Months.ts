import {matches} from 'z';

type Month = {
    name: string,
    value: number
}
const Months = {
  January: {name: "janvier", value: 1},
  February: {name: "février", value: 2},
  March: {name: "mars", value: 3},
  April: {name: "avril", value: 4},
  May: {name: "mai", value: 5},
  June: {name: "juin", value: 6},
  July: {name: "juillet", value: 7},
  August: {name: "août", value: 8},
  September: {name: "septembre", value: 9},
  October: {name: "octobre", value: 10},
  November: {name: "novembre", value: 11},
  December: {name: "décembre", value: 12},
};

const wholeYear = [
    Months.January, 
    Months.February, 
    Months.March, 
    Months.April, 
    Months.May, 
    Months.June, 
    Months.July, 
    Months.August, 
    Months.September, 
    Months.October, 
    Months.November, 
    Months.December
];

function range(begin: Month, end: Month): List[Month] {
    if (begin == end) return begin;
    if (begin <= end) {
        return wholeYear.filter(m => m.value >= begin.value && m.value <= end.value);    
    }
    return wholeYear.filter(m => m >= end || m <= start);
}

export default {
    ...Months,
    wholeYear,
    range,
    toString,
};