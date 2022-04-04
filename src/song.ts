import { Artist } from './artist'
import { Time } from './durationType';
import { Genre } from './genre';
import { Group } from './group';

/**
 * Clase que define una canción con sus atributos y métodos
 */
export class Song {
    private duration: Time;

    /**
     * Constructor de la clase Song. Recibe el nombre, creador, género, veces que ha sido escuchada, duración y si es un single o no
     * @param name string
     * @param creator Artist | Group
     * @param genre Genre
     * @param isSingle boolean
     * @param timesListened number
     * @param durationInSeconds number
     */
    constructor(
        private name: string,
        private creator: Artist | Group,
        private genre: Genre,
        private isSingle: boolean,
        private timesListened: number,
        durationInSeconds: number,
    ) {
        this.duration = {hours: durationInSeconds / 3600, minutes: durationInSeconds / 60, seconds: durationInSeconds}
    }

    /**
     * Retorna el nombre de la canción
     * @returns string
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Devuelve el creador de la canción: Artista o Grupo
     * @returns Artist | Group
     */
    public getCreator(): Artist | Group {
        return this.creator;
    }

    /**
     * Devuelve el género de la canción
     * @returns Genre
     */
    public getGenre(): Genre {
        return this.genre;
    }

    /**
     * Devuelve true si la canción es un single, false en caso contrario
     * @returns boolean
     */
    public getIsSingle(): boolean {
        return this.isSingle
    }

    /**
     * Devuelve el número de veces que ha sido escuchada la canción
     * @returns 
     */
    public getTimesListened(): number {
        return this.timesListened;
    }

    /**
     * Devuelve la duración en segundos de la canción
     * @returns number
     */
    public getSeconds(): number {
        return this.duration.seconds;
    }

    /**
     * Devuelve la duración de la canción en minutos
     * @returns number
     */
    public getMinutes(): number {
        return this.duration.minutes;
    }
}


