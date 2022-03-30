import { Artist } from "./artist";
import { Genre } from "./genre";
import { Group } from "./group";
import { Song } from "./song";

/**
 * Clase que define un album con sus atributos y métodos
 */
export class Album {
    private genres: Set<Genre>;

    constructor(
        private name: string,
        private creator: Artist | Group,
        private year: number,
        private songs: Song[]
    ) {}

    /**
     * Devuelve el nombre del album
     * @returns string
     */
    public getName(): string {
        return this.name;
    }

    public getCreator(): Artist | Group {
        return this.creator;
    }

    /**
     * Devuelve el año de lanzamiento del album
     * @returns number
     */
    public getYear(): number {
        return this.year;
    }

    public getGenres(): Set<Genre> {
        return this.genres;
    }

    public getSongs(): Song[] {
        return this.songs;
    }
};