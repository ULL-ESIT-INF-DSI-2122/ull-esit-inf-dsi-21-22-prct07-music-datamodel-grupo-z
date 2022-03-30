import { Album } from "./album";
import { Genre } from "./genre";
import { Group } from "./group";
import { Song } from "./song";

/**
 * Clase que define un artista con sus atributos y métodos. Hereda de basicSinger
 */
export class Artist {
    private genres: Genre[];
    private listeners: number;
    private groups: Group[];
    private albums: Album[];
    private songs: Song[];

    constructor(
        private name: string
    ) {}

    public getGroups(): Group[] {
        return this.groups;
    }

    public getAlbums(): Album[] {
        return this.albums;
    }

    public getSongs(): Song[] {
        return this.songs;
    }
    public getName(): string {
        return this.name;
    }

    public getGenres(): Genre[] {
        return this.genres;
    }

    /**
     * Devuelve el número de oyentes
     * @returns number
     */
    public getListeners(): number {
        return this.listeners;
    }
}
