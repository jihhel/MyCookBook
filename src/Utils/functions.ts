export function forall(list: any[], predicate: (a: any) => boolean): boolean {
    return list.filter(predicate).length === list.length;
}

export function exists(list: any[], predicate: (a: any) => boolean): boolean {
    return list.filter(predicate).length !== 0;
}