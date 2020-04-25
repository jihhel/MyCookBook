export function forall(list: A[], predicate: (A) => boolean): boolean {
    return list.filter(predicate).length === list.length;
}

export function exists(list: A[], predicate: (A) => boolean): boolean {
    return list.filter(predicate).length != 0;
}