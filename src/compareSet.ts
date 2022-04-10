/**
 * Recibe dos conjuntos genéricos del mismo tipo y compara si son iguales. Devuelve verdadero si lo son 
 * y false en caso contrario
 * @param first Array<T>
 * @param second Array<T>
 * @returns boolean
 */
export function areEqual<T>(first: Array<T>,  second: Array<T>): boolean {
    if (first.length !== second.length) {
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