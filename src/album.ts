import { Artist } from "./artist";
import { BasicSinger } from "./basicSinger";
import { Genre } from "./genre";
import { Group } from "./group";
import { Song } from "./song";

/**
 * Clase que define un album con sus atributos y métodos
 */
export class Album {
    constructor(
        private name: string,
        private creator: BasicSinger,
        private year: number,
        private genres: Genre[],
        private songs: Song[]
    ) {}

    /**
     * Devuelve el nombre del album
     * @returns string
     */
    public getName(): string {
        return this.name;
    }

    public getCreator(): BasicSinger {
        return this.creator;
    }

    /**
     * Devuelve el año de lanzamiento del album
     * @returns number
     */
    public getYear(): number {
        return this.year;
    }

    public getGenres(): Genre[] {
        return this.genres;
    }

    public getSongs(): Song[] {
        return this.songs;
    }
};