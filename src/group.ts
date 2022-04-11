import { Album } from "./album";
import { Artist } from "./artist";
import { Genre } from "./genre";
import { Song } from "./song";

/**
 * Clase que define un grupo de cantantes con sus atributos y métodos
 */
export class Group {
    private genres: Array<string> = new Array<string>();
    private albums: Array<string> = new Array<string>();
    private songs: Array<string> = new Array<string>();

    /**
     * Constructor de la clase Group. Recibe el nombre, año de creación, artistas y oyentes.
     * @param name string
     * @param year number
     * @param artists Array<Artists>
     * @param listeners number
     */
    constructor(
        private name: string,
        private year: number,
        private artists: Array<string>,
        private listeners: number
    ) {}

    /**
     * Devuelve los artistas que componen el grupo
     * @returns Array<Artist>
     */
    public getArtist(): Array<string> {
        return this.artists;
    }

    /**
     * Devuelve el año de creación del grupo
     * @returns number
     */
    public getYear(): number {
        return this.year;
    }

    /**
     * Devuelve los albums del grupo
     * @returns Array<string>
     */
    public getAlbums(): Array<string> {
        return this.albums;
    }

    /**
    * Devuelve el nombre del grupo
    * @returns string
    */
    public getName(): string {
        return this.name;
    }

    /**
     * Devuelve los géneros asociados con el grupo
     * @returns Array<string>
     */
    public getGenres(): Array<string> {
        return this.genres;
    }

    /**
     * Devuelve las canciones del grupo
     * @returns Array<string>
     */
    public getSongs(): Array<string> {
        return this.songs;
    }

    /**
     * Devuelve el número de oyentes
     * @returns number
     */
    public getListeners(): number {
        return this.listeners;
    }

    /**
     * Añade un nuevo género a los asociados con el grupo
     * @param newGenre Genre
     */
    public addGenre(newGenre: string) {
        this.genres.push(newGenre);
    }

    /**
     * Añade una canción al grupo
     * @param newSong Song
     */
    public addSong(newSong: Song) {
        this.songs.push(newSong.getName());
    }

    /**
     * Añade un album a los relacionados con el grupo
     * @param newAlbum Album
     */
    public addAlbum(newAlbum: Album) {
        this.albums.push(newAlbum.getName());
    }

    /**
     * Actualiza los oyentes del grupo
     * @param newData number
     */
    public updateListeners(newData: number) {
        this.listeners += newData;
    }

    public same(group: Group | Artist) {
        if (group instanceof Artist) {
            return false;
        }

        if ((this.getName() == group.getName()) && (this.getYear() == group.getYear())) {
            this.getArtist().forEach(artist1 => {
                let same: boolean = false;
                group.getArtist().forEach(artist2 => {
                    if (artist1 == artist2) {
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
        console.log(`GRUPO: **${this.getName()}**`);
        console.log('\tComponentes:')
        this.getArtist().forEach((artist) => {
            console.log(`\t   - ${artist}`);
  
        });

        console.log('\tCanciones:')
        this.getSongs().forEach((song) => {
            console.log(`\t   - ${song}`);
  
        });

        if (this.getAlbums().length > 0) {
            console.log('\tAlbums:')
            this.getAlbums().forEach((album) => {
                console.log(`\t   - ${album}`);

            });
        } else {
            console.log(`\tEste grupo no tiene albumes relacionados`);
        }

        console.log('\n');
    }

    public has(element: Genre | Artist | Album | Song): boolean {
        if (element instanceof Genre) {
            this.getGenres().forEach(genre => {
                if(genre == element.getName()) {
                    return true;
                }
            });
        } else if (element instanceof Artist) {
            this.getArtist().forEach(artist => {
                if(artist == element.getName()) {
                    return true;
                }
            });
        } else if (element instanceof Album) {
            this.getAlbums().forEach(album => {
                if (album == element.getName()) {
                    return true;
                }
            });
        } else if (element instanceof Song) {
            this.getSongs().forEach(song => {
                if (song == element.getName()) {
                    return true;
                }
            });
        }
        
        return false;
    }
};