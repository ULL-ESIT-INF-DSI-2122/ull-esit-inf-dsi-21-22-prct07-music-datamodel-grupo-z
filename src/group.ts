import { Album } from "./album";
import { Artist } from "./artist";
import { Genre } from "./genre";

/**
 * Clase que define un grupo de cantantes con sus atributos y métodos. Hereda de basicSinger
 */
export class Group {
    private genres: Set<Genre>;
    private listeners: number;
    private artists: Set<Artist>;
    private albums: Set<Album>;

    constructor(
        private name: string,
        private year: number,
    ) {}

    public getArtist(): Set<Artist> {
        return this.artists;
    }

    /**
     * Devuelve el año de creación del grupo
     * @returns number
     */
    public getYear(): number {
        return this.year;
    }

    public getAlbums(): Set<Album> {
        return this.albums;
    }

    /**
    * Devuelve el nombre del basicSinger (grupo o artista)
    * @returns string
    */
    public getName(): string {
        return this.name;
    }

    public getGenres(): Set<Genre> {
        return this.genres;
    }

    /**
     * Devuelve el número de oyentes
     * @returns number
     */
    public getListeners(): number {
        return this.listeners;
    }
};