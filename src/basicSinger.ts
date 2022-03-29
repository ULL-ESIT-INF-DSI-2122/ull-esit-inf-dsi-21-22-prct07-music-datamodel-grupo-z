import { Genre } from "./genre";

/**
 * Clase que abstracta que define los atributos y métodos básicos para un cantante o grupo de cantantes
 */
export abstract class BasicSinger{
    constructor(
        private name: string,
        private genres: Genre[],
        private listeners: number
    ) {}

    public getName(): string {
        return this.name;
    }

    public getGenres(): Genre[] {
        return this.genres;
    }

    public getListeners(): number {
        return this.listeners;
    }
}