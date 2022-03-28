import { Artist } from './artist'
import { Time } from './durationType';
import { Genre } from './genre';

export class Song {
    private duration: Time;
    constructor(
        private name: string,
        private artist: Artist,
        private genre: Genre,
        private isSingle: boolean,
        private timesListened: number,
        durationInSeconds: number,
    ) {
        this.duration = {hours: durationInSeconds / 3600, minutes: durationInSeconds / 60, seconds: durationInSeconds}
    }

    public getName(): string {
        return this.name;
    }

    public getArtist(): Artist {
        return this.artist;
    }

    public getGenre(): Genre {
        return this.genre;
    }

    public getIsSingle(): boolean {
        return this.isSingle
    }

    public getTimesListened(): number {
        return this.timesListened;
    }

    public getSeconds(): number {
        return this.duration.seconds;
    }

    public getMinutes(): number {
        return this.duration.minutes;
    }
}


