import { Album } from "./album";
import { BasicSinger } from "./basicSinger";
import { Song } from "./song";

export class Genre {
    constructor(
        private name: string,
        private componets: BasicSinger[],
        private albums: Album[],
        private songs: Song[]
    ) {}

    public getName(): string {
        return this.name;
    }

    public getComponents(): BasicSinger[] {
        return this.componets;
    }

    public getAlbums(): Album[] {
        return this.albums;
    }

    public getSongs(): Song[] {
        return this.songs
    }
}
