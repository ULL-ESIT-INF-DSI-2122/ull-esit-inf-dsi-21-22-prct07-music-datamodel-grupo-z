import { Album } from "./album";
import { Genre } from "./genre";
import { Group } from "./group";
import { Song } from "./song";

/**
 * Clase que define un artista con sus atributos y métodos
 */
export class Artist {
    private genres: Set<Genre> = new Set<Genre> ();
    private listeners: number = 0;
    private groups: Set <Group> = new Set<Group>();
    private albums: Set <Album> = new Set<Album>();
    private songs: Set<Song> = new Set<Song>();

    /**
     * Constructor de la clase Artist. Recibe el nombre del artista
     * @param name string 
     */
    constructor(
        private name: string
    ) {}

    /**
     * Devuelve los grupos de los que forma parte el artista
     * @returns Set<Group>
     */
    public getGroups(): Set<Group> {
        return this.groups;
    }

    /**
     * Devuelve los albumes del artista
     * @returns Set<Album>
     */
    public getAlbums(): Set<Album> {
        return this.albums;
    }

    /**
     * Devuelve las canciones del artista
     * @returns Set<Song>
     */
    public getSongs(): Set<Song> {
        return this.songs;
    }

    /**
     * Devuelve el nombre del artista
     * @returns string
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Devuelve los géneros asociados con el artista
     * @returns 
     */
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

    /**
     * Añade un nuevo género a los asociados al artista cuando se añade a la base de datos una nueva canción.
     * @param newGenre Genre
     */
    public addGenre(newGenre: Genre) {
        this.genres.add(newGenre);
    }

    /**
     * Añade un nueva canción al artista cuando se añade una nueva canción suya a la base de datos. 
     * @param newSong 
     */
    public addSong(newSong: Song) {
        this.songs.add(newSong);
    }

    /**
     * Suma los nuevos oyentes al artista cuando se añade una nueva canción
     * @param newData number
     */
    public updateListeners(newData: number) {
        this.listeners += newData;
    }
}
