import { Album } from "./album";
import { BasicSinger } from "./basicSinger";
import { Genre } from "./genre";
import { Group } from "./group";
import { Song } from "./song";

export class Artist extends BasicSinger {
    constructor(
        name: string,
        genres: Genre[],
        listeners: number,
        private groups: Group[],
        private albums: Album[],
        private songs: Song[]
    ) {
        super(name, genres, listeners);
    }

    public getGroups(): Group[] {
        return this.groups;
    }

    public getAlbums(): Album[] {
        return this.albums;
    }

    public getSongs(): Song[] {
        return this.songs;
    }


}
