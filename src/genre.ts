import { Album } from "./album";
import { Artist } from "./artist";
import { Group } from "./group";
import { Song } from "./song";

/**
 * Clase que define un género musical con sus atributos y métodos
 */
export class Genre {

    private components: Set<Artist | Group>;
    private albums: Album[];
    private songs: Set<Song>

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

    public getComponents(): Set<Artist | Group> {
        return this.components;
    }

    public getAlbums(): Album[] {
        return this.albums;
    }

    public getSongs(): Set<Song> {
        return this.songs
    }

    public addArtist(newArtit: Artist | Group) {
        this.components.add(newArtit)
    }

    public addSong(newSong: Song) {
        this.songs.add(newSong);
    }
}
