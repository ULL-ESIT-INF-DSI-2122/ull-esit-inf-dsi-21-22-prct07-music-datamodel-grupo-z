import { Artist } from "./artist";
import { Genre } from "./genre";
import { Group } from "./group";
import { Song } from "./song";

/**
 * Clase que define un album con sus atributos y métodos
 */
export class Album {
    private genres: Array<Genre> = new Array<Genre> ();

    /**
     * Constructor de la clase album. Recibe el nombre, creador, año y canciones. Los géneros asociados
     * se calculan a partir de las canciones
     * @param name string
     * @param creator Artist | Group
     * @param year number
     * @param songs Array<Song>
     */
    constructor(
        private name: string,
        private creator: Artist | Group,
        private year: number,
        private songs: Array<Song> = new Array<Song> ()
    ) {
        this.songs.forEach((item: Song) => {
            this.genres.push(item.getGenre());
        });
    }

    /**
     * Devuelve el nombre del album
     * @returns string
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Devuelve el creador del album. Artista o grupo
     * @returns 
     */
    public getCreator(): Artist | Group {
        return this.creator;
    }

    /**
     * Devuelve el año de lanzamiento del album
     * @returns number
     */
    public getYear(): number {
        return this.year;
    }

    /**
     * Devuelve los géneros del album
     * @returns Array<Genre>
     */
    public getGenres(): Array<Genre> {
        return this.genres;
    }

    /**
     * Devuelve las canciones del album
     * @returns Array<Song>
     */
    public getSongs(): Array<Song> {
        return this.songs;
    }

    public same(album: Album): boolean {
        if ((this.getName() === album.getName()) && (this.getYear() === album.getYear())) { 
            this.getSongs().forEach(song1 => {
                let same: boolean = false;
                album.getSongs().forEach(song2 => {
                    if (song1.same(song2)) {
                        same = true;
                    }
                });
                if (!same) {
                    return false;
                }
            });
            return true;
        }
        return false;
    }

    public print() {
        console.log(`ALBUM: **${this.getName()}**`);
        if (this.getCreator() instanceof Artist) {
            console.log(`\tCantante: ${this.getCreator().getName()}`)
        } else {
            console.log(`\tGrupo: ${this.getCreator()}`);
        }

        console.log(`\tAño: ${this.getYear()}`);

        console.log(`\tCanciones:`)
        this.getSongs().forEach(song => {
            console.log(`\t   - ${song.getName()}`);
        });

        console.log();
    }

    public has(element: Genre | Artist | Group | Song): boolean {
        if (element instanceof Genre) {
            this.getGenres().forEach(album => {
                if (album.same(element)) {
                    return true;
                }
            });
        } else if (element instanceof (Artist || Group)) {
            if (this.getCreator().same(element)) {
                    return true;
            }
        } else if (element instanceof Song) {
            this.getSongs().forEach(song => {
                if (song.same(element)) {
                    return true;
                }
            });
        }

        return false;
    }
};