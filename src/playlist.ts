import { Time } from "./durationType";
import { Genre } from "./genre";
import { Song } from "./song";

/**
 * Clase que define una playlist con sus atributos y métodos
 */
export class Playlist {

    /**
     * 
     * @param name 
     * @param songs 
     * @param duration 
     * @param genres 
     */
    constructor(
        private name: string,
        private songs: Array<string> = [],
        private duration: Time = {seconds: 0, minutes: 0, hours: 0},
        private genres: Array<string> = []
    ) {}

    /**
     * Devuelve el nombre de la playlist
     * @returns string
     */
    public getName(): string {
        return this.name;
    }

    public getSongs(): Array<string> {
        return this.songs;
    }

    public getDuration(): Time {
        return this.duration;
    }

    /**
     * Devuelve la duración de la playlist en horas
     * @returns number
     */
    public getHours(): number {
        return this.duration.hours;
    }

    /**
     * Devuelve la duración de la playlist en minutos
     * @returns number
     */
    public getMinutes(): number {
        return this.duration.minutes;
    }

    public getGenres(): Array<string> {
        return this.genres;
    }

    public addSong(newSong: Song) {
        this.songs.push(newSong.getName());
        this.genres.push(newSong.getGenre())
        this.duration.seconds += newSong.getSeconds();
        this.duration.minutes += newSong.getMinutes();
        this.duration.hours += newSong.getMinutes() / 60;
    }


    public static deserialize(playlists: Playlist[]): Playlist[] {
        const myPlaylists: Playlist[] = [];

        playlists.forEach((playlist) => {
            const myPlaylist = new Playlist(playlist.name, playlist.songs, 
                playlist.duration, playlist.genres);

            myPlaylists.push(myPlaylist);
        });

        return myPlaylists;
    }
} 