import { Artist } from "./artist";
import { Genre } from "./genre";
import { Group } from "./group";
import { Song } from "./song";

/**
 * Clase que define un album con sus atributos y métodos
 */
export class Album {
    private genres: Set<Genre> = new Set<Genre> ();

    /**
     * Constructor de la clase album. Recibe el nombre, creador, año y canciones. Los géneros asociados
     * se calculan a partir de las canciones
     * @param name string
     * @param creator Artist | Song
     * @param year number
     * @param songs Set<Song>
     */
    constructor(
        private name: string,
        private creator: Artist | Group,
        private year: number,
        private songs: Set<Song> = new Set<Song> ()
    ) {
        songs.forEach((item: Song) => {
            this.genres.add(item.getGenre());
        });
    }

    /**
     * Devuelve el nombre del album
     * @returns string
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Devuelve el creador del album. Artista o grupo
     * @returns 
     */
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

    /**
     * Devuelve los géneros del album
     * @returns Set<Genre>
     */
    public getGenres(): Set<Genre> {
        return this.genres;
    }

    /**
     * Devuelve las canciones del album
     * @returns Set<Song>
     */
    public getSongs(): Set<Song> {
        return this.songs;
    }
};