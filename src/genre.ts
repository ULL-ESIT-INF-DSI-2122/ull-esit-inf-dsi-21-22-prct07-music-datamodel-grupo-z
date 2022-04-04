import { Album } from "./album";
import { Artist } from "./artist";
import { Group } from "./group";
import { Song } from "./song";

/**
 * Clase que define un género musical con sus atributos y métodos
 */
export class Genre {

    private components: Set<Artist | Group> = new Set<Artist | Group> ();
    private albums: Set<Album> = new Set<Album>();
    private songs: Set<Song> = new Set<Song> ();

    /**
     * Constructor de la clase Genre. Recibe el nombre del género
     * @param name string
     */
    constructor(
        private name: string,
    ) {}

    /**
     * Devuelve el nombre del género musical
     * @returns 
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Devuelve un conjunto con los artistas y grupos que han lanzado canciones del género
     * @returns Set<Artist | Group>
     */
    public getComponents(): Set<Artist | Group> {
        return this.components;
    }

    /**
     * Devuelve los albums del género
     * @returns Set<Album>
     */
    public getAlbums(): Set<Album> {
        return this.albums;
    }

    /**
     * Devuelve las canciones de el género
     * @returns Set<Song>
     */
    public getSongs(): Set<Song> {
        return this.songs
    }

    /**
     * Añade a la lista de artistas el recibido por parámetro cuando se añade a la base de datos una canción de este género
     * @param newArtit Artist | Group
     */
    public addArtist(newArtist: Artist | Group) {
        this.components.add(newArtist)
    }

    /**
     * Añade a la lista de canciones la recibida por parámetro cuando se añade a la base de datos una canción de este género
     * @param newSong Song
     */
    public addSong(newSong: Song) {
        this.songs.add(newSong);
    }
}
