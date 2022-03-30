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
    private songs: Song[]

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

    public getSongs(): Song[] {
        return this.songs
    }
}
