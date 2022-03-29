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

    /**
     * Devuelve el nombre de la playlist
     * @returns string
     */
    public getName(): string {
        return this.name;
    }

    public getSongs(): Song[] {
        return this.songs;
    }

    /**
     * Devuelve la duración de la playlist en horas
     * @returns number
     */
    public getHours(): number {
        return this.duration.hours;
    }

    /**
     * Devuelve la duración de la playlist en minutos
     * @returns number
     */
    public getMinutes(): number {
        return this.duration.minutes;
    }

    public getGenres(): Genre[] {
        return this.genres;
    }
} 