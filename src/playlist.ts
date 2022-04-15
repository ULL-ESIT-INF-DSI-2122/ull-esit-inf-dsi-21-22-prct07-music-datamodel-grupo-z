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
        private user: string = '',
        private songs: Array<string> = [],
        private duration: Time = {seconds: 0, minutes: 0, hours: 0},
        private genres: Array<string> = [],
    ) {}

    /**
     * Devuelve el nombre de la playlist
     * @returns string
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Devuelve las canciones de la playlist
     * @returns Array<string>
     */
    public getSongs(): Array<string> {
        return this.songs;
    }

    /**
     * Devuelve la duración de la playlist
     * @returns Time
     */
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

    /**
     * Devuelve los géneros de la playlist
     * @returns Array<string>
     */
    public getGenres(): Array<string> {
        return this.genres;
    }

    /**
     * Devuelve el usuario propietario de la playlist
     * @returns string
     */
    public getUser(): string {
        return this.user;
    }

    /**
     * Añade una canción a la playlist
     * @param newSong 
     */
    public addSong(newSong: Song) {
        if (!this.has(newSong)) {
            this.songs.push(newSong.getName());
        }
        if (!this.has(new Genre(newSong.getGenre()))) {
            this.genres.push(newSong.getGenre())
        }
        this.duration.seconds += newSong.getSeconds();
        this.duration.minutes += newSong.getMinutes();
        this.duration.hours += newSong.getMinutes() / 60;
    }

    /**
     * Elimina una canción de la playlist
     * @param newSong 
     */
    public removeSong(newSong: Song) {
        let n: number = this.getSongs().indexOf(newSong.getName())
        this.songs.splice(n, 1);
        this.duration.seconds -= newSong.getSeconds();
        this.duration.minutes -= newSong.getMinutes();
        this.duration.hours -= newSong.getMinutes() / 60;
    }


    public static deserialize(playlists: Playlist[]): Playlist[] {
        const myPlaylists: Playlist[] = [];

        playlists.forEach((playlist) => {
            const myPlaylist = new Playlist(playlist.name,  playlist.user, playlist.songs, 
                playlist.duration, playlist.genres);

            myPlaylists.push(myPlaylist);
        });

        return myPlaylists;
    }

    /**
     * Imprime por pantalla la información de la playlist correctamente formateada
     */
    public print() {
        console.log(`PLAYLIST: **${this.getName()}**`);
        console.log('\tAdministrador: ', this.getUser());
        console.log('\tDuracion: ', this.getDuration());

        console.log('\tCanciones:')
        this.getSongs().forEach((song) => {
            console.log(`\t   - ${song}`);
  
        });

        console.log('\tGeneros:')
        this.getGenres().forEach((genre) => {
            console.log(`\t   - ${genre}`);
  
        });

        console.log('\n');
    }

    /**
     * Devuelve las canciones ordenadas
     * @param asc 
     * @returns 
     */
    public songSort(asc: boolean): Array<string> {
        let sortedList: Array<string> = this.getSongs();

        let a: Song;
        let b: Song;
        
        sortedList.sort(function (a, b) {
            if (asc) {
                return a > b ? 1 : -1;
            } else {
                return a > b ? -1 : 1;
            } 
        });

        return sortedList;
    }


    /**
     * Comprueba si el elemento se encuentra ya en la playlist antes de añadirlo
     * @param element 
     * @returns 
     */
    public has(element: Song | Genre): boolean {
        if (element instanceof Song) {
            this.songs.forEach(song => {
                if (song == element.getName()) {
                    return true;
                }
            });
        } else if (element instanceof Genre) {
            this.genres.forEach(genre => {
                if (genre == element.getName()) {
                    return true;
                }
            })
        }

        return false;
    }
} 