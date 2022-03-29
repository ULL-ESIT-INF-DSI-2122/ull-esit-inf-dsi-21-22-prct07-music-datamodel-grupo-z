import { Time } from "./durationType";
import { Genre } from "./genre";
import { Song } from "./song";

/**
 * Clase que define una playlist con sus atributos y métodos
 */
export class Playlist {
    constructor(
        private name: string,
        private songs: Song[],
        private duration: Time,
        private genres: Genre[]
    ) {}

    public getName(): string {
        return this.name;
    }

    public getSongs(): Song[] {
        return this.songs;
    }

    public getHours(): number {
        return this.duration.hours;
    }

    public getMinutes(): number {
        return this.duration.minutes;
    }

    public getGenres(): Genre[] {
        return this.genres;
    }
} 