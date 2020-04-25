import {Pattern} from './Patterns';

export default function SearchableString(str: string) {
    const lower: string = str.toLowerCase();

    return ({
        includes(p: Pattern): boolean {
            return lower.includes(p);
        },
        value: str
    });
    
}