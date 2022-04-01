import { Album } from "./album";
import { Genre } from "./genre";
import { Group } from "./group";
import { Song } from "./song";

/**
 * Clase que define un artista con sus atributos y métodos. Hereda de basicSinger
 */
export class Artist {
    private genres: Set<Genre> = new Set<Genre> ();
    private listeners: number = 0;
    private groups: Set <Group> = new Set<Group>();
    private albums: Set <Album> = new Set<Album>();
    private songs: Set<Song> = new Set<Song>();

    constructor(
        private name: string
    ) {}

    public getGroups(): Set<Group> {
        return this.groups;
    }

    public getAlbums(): Set<Album> {
        return this.albums;
    }

    public getSongs(): Set<Song> {
        return this.songs;
    }
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

    public addGenre(newGenre: Genre) {
        this.genres.add(newGenre);
    }

    public addSong(newSong: Song) {
        this.songs.add(newSong);
    }

    public updateListeners(newData: number) {
        this.listeners += newData;
    }
}
