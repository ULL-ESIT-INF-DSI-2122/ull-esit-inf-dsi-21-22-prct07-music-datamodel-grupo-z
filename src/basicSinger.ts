import { Genre } from "./genre";

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