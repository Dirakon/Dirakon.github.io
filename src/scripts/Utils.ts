export const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
    arr.reduce((groups, item) => {
        (groups[key(item)] ||= []).push(item);
        return groups;
    }, {} as Record<K, T[]>);

export function removeDuplicates<T>(array: T[]): T[] {
    return [...new Set(array)];
}


export function randomRangeF(min: number, max: number): number {
    return Math.random() * (max - min) + min
}

export function normalized(vec2D: number[]) {
    let directionLength = Math.sqrt(vec2D[0] * vec2D[0] + vec2D[1] * vec2D[1])
    return [vec2D[0] / directionLength, vec2D[1] / directionLength]
}

export function angleFromDirection(vec2D: number[]) {
    let sign = vec2D[1] < 0 ? (-1) : 1;
    return sign * Math.acos(vec2D[0]);
}