import { Album } from "./album";
import { Artist } from "./artist";
import { BasicSinger } from "./basicSinger";
import { Genre } from "./genre";

export class Group extends BasicSinger {
    constructor(
        name: string,
        genres: Genre[],
        listeners: number,
        private artists: Artist[],
        private year: number,
        private albums: Album[]
    ) {
        super(name, genres, listeners)
    }

    public getArtist(): Artist[] {
        return this.artists;
    }

    public getYear(): number {
        return this.year;
    }

    public getAlbums(): Album[] {
        return this.albums;
    }
};