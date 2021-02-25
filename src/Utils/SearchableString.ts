import {Pattern} from './Patterns';

export default class SearchableString {
    value: string;
    lower: string;

    constructor(value: string) {
        this.value = value;
        this.lower = value.toLowerCase();
    }

    includes(p: Pattern): boolean {
        return this.lower.includes(p);
    }
}