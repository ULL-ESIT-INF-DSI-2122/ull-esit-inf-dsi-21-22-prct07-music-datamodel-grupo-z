import { Album } from "./album";
import { Artist } from "./artist";
import { Group } from "./group";
import { Song } from "./song";

/**
 * Clase que define un género musical con sus atributos y métodos
 */
export class Genre {

    private components: Array<Artist | Group> = new Array<Artist | Group> ();
    private albums: Array<Album> = new Array<Album>();
    private songs: Array<Song> = new Array<Song> ();

    /**
     * Constructor de la clase Genre. Recibe el nombre del género
     * @param name string
     */
    constructor(
        private name: string,
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
    public getComponents(): Array<Artist | Group> {
        return this.components;
    }

    /**
     * Devuelve los albums del género
     * @returns Array<Album>
     */
    public getAlbums(): Array<Album> {
        return this.albums;
    }

    /**
     * Devuelve las canciones de el género
     * @returns Array<Song>
     */
    public getSongs(): Array<Song> {
        return this.songs
    }

    /**
     * Añade a la lista de artistas el recibido por parámetro cuando se añade a la base de datos una canción de este género
     * @param newArtit Artist | Group
     */
    public addArtist(newArtist: Artist | Group) {
        this.components.push(newArtist)
    }

    /**
     * Añade a la lista de canciones la recibida por parámetro cuando se añade a la base de datos una canción de este género
     * @param newSong Song
     */
    public addSong(newSong: Song) {
        this.songs.push(newSong);
    }
    
    public same(genre: Genre) {
        return this.getName() === genre.getName();
    }

    public print() {
        console.log(`GENERO: **${this.getName()}**`);
        if (this.getAlbums().length > 0) {
            console.log(`\tAlbumes: `)
            this.getAlbums().forEach(album => {
                console.log(`\t  - ${album.getName()} - by:  ${album.getCreator()}`);
            });
        } else {
            console.log(`\tEste genero no tiene albumes relacionados`);
        }

        if (this.getComponents().length > 0) {
            console.log(`\tArtistas Relacionados: `);
            this.getComponents().forEach(component => {
                console.log(`\t  - ${component.getName()}`);
            });
        } else {
            console.log(`\tEste genero no tiene artistas relacionados`);
        }   

        if (this.getSongs().length > 0) {
            console.log(`\tCanciones: `);
            this.getSongs().forEach(song => {
                console.log(`\t  - ${song.getName()}`);
            });
        } else {
            console.log(`\tEste genero no tiene canciones asociadas`);
        }

        console.log();
    }


    public has(element: Artist | Group | Album | Song): boolean {
        if (element instanceof (Artist || Group)) {
            this.getComponents().forEach(component => {
                if(component.same(element)) {
                    return true;
                }
            });
        } else if (element instanceof Album) {
            this.getAlbums().forEach(album => {
                if (album.same(element)) {
                    return true;
                }
            });
        } else if (element instanceof Song) {
            this.getSongs().forEach(song => {
                if (song.same(element)) {
                    return true;
                }
            });
        }
        
        return false;
    }
}
