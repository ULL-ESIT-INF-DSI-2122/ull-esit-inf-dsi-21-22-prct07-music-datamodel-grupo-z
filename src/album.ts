import { Artist } from "./artist";
import { BasicSinger } from "./basicSinger";
import { Genre } from "./genre";
import { Group } from "./group";
import { Song } from "./song";

export class Album {
    constructor(
        private name: string,
        private creator: BasicSinger,
        private year: number,
        private genres: Genre[],
        private songs: Song[]
    ) {}

    public getName(): string {
        return this.name;
    }

    public getCreator(): BasicSinger {
        return this.creator;
    }

    public getYear(): number {
        return this.year;
    }

    public getGenres(): Genre[] {
        return this.genres;
    }

    public getSongs(): Song[] {
        return this.songs;
    }
};