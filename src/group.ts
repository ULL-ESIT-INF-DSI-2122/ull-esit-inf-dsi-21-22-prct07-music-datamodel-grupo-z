import { Album } from "./album";
import { Artist } from "./artist";
import { Genre } from "./genre";
import { Song } from "./song";

/**
 * Clase que define un grupo de cantantes con sus atributos y métodos. Hereda de basicSinger
 */
export class Group {
    private genres: Set<Genre> = new Set<Genre>();
    private listeners: number;
    private albums: Set<Album> = new Set<Album>();
    private songs: Set<Song> = new Set<Song>();

    constructor(
        private name: string,
        private year: number,
        private artists: Set<Artist> = new Set <Artist>()
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

    public getSongs(): Set<Song> {
        return this.songs;
    }

    /**
     * Devuelve el número de oyentes
     * @returns number
     */
    public getListeners(): number {
        return this.listeners;
    }

    public addGenre(newGenre: Genre) {
        this.genres.add(newGenre);
    }

    public addSong(newSong: Song) {
        this.songs.add(newSong);
    }

    public updateListeners(newData: number) {
        this.listeners += newData;
    }
};