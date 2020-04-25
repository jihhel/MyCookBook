export type Pattern = string;

export function parsePatterns(str: string): Pattern[] {
    return str.split(" ").map(s => s.trim()).filter(s => s.length > 0);
};