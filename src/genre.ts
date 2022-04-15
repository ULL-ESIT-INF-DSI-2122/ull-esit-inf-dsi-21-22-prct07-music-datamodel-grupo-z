import { Album } from "./album";
import { Artist } from "./artist";
import { Group } from "./group";
import { Song } from "./song";

/**
 * Clase que define un género musical con sus atributos y métodos
 */
export class Genre {

    /**
     * Constructor de la clase Genre. Recibe el nombre del género
     * @param name string
     */
    constructor(
        private name: string,
        private components: Array<string> = [],
        private albums: Array<string> = [],
        private songs: Array<string> = [],
    ) {}

    /**
     * Devuelve el nombre del género musical
     * @returns 
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Devuelve un conjunto con los artistas y grupos que han lanzado canciones del género
     * @returns Array<Artist | Group>
     */
    public getComponents(): Array<string> {
        return this.components;
    }

    /**
     * Devuelve los albums del género
     * @returns Array<Album>
     */
    public getAlbums(): Array<string> {
        return this.albums;
    }

    /**
     * Devuelve las canciones de el género
     * @returns Array<Song>
     */
    public getSongs(): Array<string> {
        return this.songs
    }

    public addAlbum(newAlbum: string) {
        this.albums.push(newAlbum)
    }

    /**
     * Añade a la lista de artistas el recibido por parámetro cuando se añade a la base de datos una canción de este género
     * @param newArtit Artist | Group
     */
    public addArtist(newArtist: string) {
        if (!this.components.includes(newArtist))
            this.components.push(newArtist)
    }

    /**
     * Añade a la lista de canciones la recibida por parámetro cuando se añade a la base de datos una canción de este género
     * @param newSong Song
     */
    public addSong(newSong: Song) {
        this.songs.push(newSong.getName());
    }
    
    /**
     * Compara dos géneros por su nombre. Devuelve true en caso que sean iguales y false en el contrario
     * @param genre Genre
     * @returns boolean
     */
    public same(genre: Genre): boolean {
        return this.getName() === genre.getName();
    }

    /**
     * Imprime por pantalla una cadena correctamente formateada en la que se muestra toda la información relativa a un género
     */
    public print() {
        console.log(`GENERO: **${this.getName()}**`);
        if (this.getAlbums().length > 0) {
            console.log(`\tAlbumes: `)
            this.getAlbums().forEach(album => {
                console.log(`\t  - ${album}`);
            });
        } else {
            console.log(`\tEste genero aun no tiene albumes relacionados`);
        }

        if (this.getComponents().length > 0) {
            console.log(`\tArtistas Relacionados: `);
            this.getComponents().forEach(component => {
                console.log(`\t  - ${component}`);
            });
        } else {
            console.log(`\tEste genero aun no tiene artistas relacionados`);
        }   

        if (this.getSongs().length > 0) {
            console.log(`\tCanciones: `);
            this.getSongs().forEach(song => {
                console.log(`\t  - ${song}`);
            });
        } else {
            console.log(`\tEste genero aun no tiene canciones asociadas`);
        }

        console.log();
    }

    /**
     * Comprueba si uno de los elementos pertenece al genero
     * @param element 
     * @returns 
     */
    public has(element: Artist | Group | Album | Song): boolean {
        if (element instanceof (Artist || Group)) {
            this.getComponents().forEach(component => {
                if(component == element.getName()) {
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

    /**
     * Convierte un conjunto de generos con formato json a un conjunto de generos objeto
     * @param genres 
     * @returns 
     */
    public static deserialize(genres: Genre[]): Genre[] {
        const myGenres: Genre[] = [];

        genres.forEach((genre) => {
        const myGenre = new Genre(genre.name, genre.components, genre.albums, genre.songs);
        myGenres.push(myGenre);
        });

        return myGenres;
    } 

}
