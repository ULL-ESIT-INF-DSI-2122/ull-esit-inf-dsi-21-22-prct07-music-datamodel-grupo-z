export function compareSets<T>(first: Set<T>,  second: Set<T>): boolean {
    if (first.size !== second.size) {
        return false;
    } 

    for (let a of first) {
        if (!second.has(a)) {
            return false;  
        }
    }

    return true;
}