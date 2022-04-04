/**
 * Recibe dos conjuntos genéricos del mismo tipo y compara si son iguales. Devuelve verdadero si lo son 
 * y false en caso contrario
 * @param first Set<T>
 * @param second Set<T>
 * @returns boolean
 */
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