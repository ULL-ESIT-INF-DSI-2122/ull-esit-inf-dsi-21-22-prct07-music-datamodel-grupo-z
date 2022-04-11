import { Genre } from "./genre";
import { Group } from "./group";
import { Song } from "./song";

/**
 * Clase que define un album con sus atributos y métodos
 */
export class Album {
    /**
     * Constructor de la clase album. Recibe el nombre, creador, año y canciones. Los géneros asociados
     * se calculan a partir de las canciones
     * @param name string
     * @param creator Album | Group
     * @param year number
     * @param songs Array<Song>
     */
    
    constructor(
        private name: string,
        private creator: string,
        private year: number,
        private songs: Array<string>,
        private genres: Array<string>,
    ) {}


    /**
     * Devuelve el nombre del album
     * @returns string
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Devuelve el creador del album. Albuma o grupo
     * @returns 
     */
    public getCreator(): string {
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
    public getGenres(): Array<string> {
        return this.genres;
    }

    /**
     * Devuelve las canciones del album
     * @returns Array<Song>
     */
    public getSongs(): Array<string> {
        return this.songs;
    }

    public same(album: Album): boolean {
        if ((this.getName() === album.getName()) && (this.getYear() === album.getYear())) { 
            this.getSongs().forEach(song1 => {
                let same: boolean = false;
                album.getSongs().forEach(song2 => {
                    if (song1 == song2) {
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
        console.log(`\tCreador: ${this.getCreator()}`);

        console.log(`\tAño: ${this.getYear()}`);

        console.log(`\tCanciones:`)
        this.getSongs().forEach(song => {
            console.log(`\t   - ${song}`);
        });

        console.log();
    }

    public has(element: Genre | Album | Group | Song): boolean {
        if (element instanceof Genre) {
            this.getGenres().forEach(genre => {
                if (genre == element.getName()) {
                    return true;
                }
            });
        } else if (element instanceof (Album || Group)) {
            if (this.getCreator() == element.getName()) {
                    return true;
            }
        } else if (element instanceof Song) {
            this.getSongs().forEach(song => {
                if (song == element.getName()) {
                    return true;
                }
            });
        }

        return false;
    }

    public static deserialize(albums: Album[]): Album[] {
        const myAlbums: Album[] = [];

        albums.forEach((album) => {
            const myAlbum = new Album(album.name, album.creator, 
            album.year, album.songs, album.genres);

            myAlbums.push(myAlbum);
        });

        return myAlbums;
    }
};