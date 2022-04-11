import { Time } from "./durationType";
import { Genre } from "./genre";
import { Song } from "./song";

/**
 * Clase que define una playlist con sus atributos y métodos
 */
export class Playlist {
    private songs: Set<string> = new Set<string>();
    private duration: Time = {seconds: 0, minutes: 0, hours: 0}
    private genres: Set<string> = new Set<string>();

    constructor(
        private name: string,
    ) {}

    /**
     * Devuelve el nombre de la playlist
     * @returns string
     */
    public getName(): string {
        return this.name;
    }

    public getSongs(): Set<string> {
        return this.songs;
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

    public getGenres(): Set<string> {
        return this.genres;
    }

    public addSong(newSong: Song) {
        this.songs.add(newSong.getName());
        this.genres.add(newSong.getGenre())
        this.duration.seconds += newSong.getSeconds();
        this.duration.minutes += newSong.getMinutes();
        this.duration.hours += newSong.getMinutes() / 60;
    }

} 