export function compareSets<T>(first: Set<T>,  second: Set<T>): boolean {
    if (first.size !== second.size) {
        return false;
    } 

    let objects1: string[] = [];

    first.forEach((item: T) => {
        objects1.push(JSON.stringify(item))
    });

    second.forEach((item: T) => {
        let itemString: string = JSON.stringify(item)
        objects1.forEach((item: string) => {
            if (itemString !== item) {
                return false;
            }
        });
    })

    return true;
}