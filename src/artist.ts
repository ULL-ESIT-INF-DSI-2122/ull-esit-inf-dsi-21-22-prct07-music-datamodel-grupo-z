import { Album } from "./album";
import { Genre } from "./genre";
import { Group } from "./group";
import { Song } from "./song";

/**
 * Clase que define un artista con sus atributos y métodos
 */
export class Artist {

    /**
     * 
     * @param name 
     * @param genres 
     * @param listeners 
     * @param groups 
     * @param albums 
     * @param songs 
     */
    constructor(
        private name: string,
        private genres: Array<string> = [],
        private listeners: number = 0,
        private groups: Array<string> = [],
        private albums: Array<string> = [],
        private songs: Array<string> = [],
    ) {}

    /**
     * Devuelve los grupos de los que forma parte el artista
     * @returns Array<string>
     */
    public getGroups(): Array<string> {
        return this.groups;
    }

    /**
     * Devuelve los albumes del artista
     * @returns Array<Album>
     */
    public getAlbums(): Array<string> {
        return this.albums;
    }

    /**
     * Devuelve las canciones del artista
     * @returns Array<string>
     */
    public getSongs(): Array<string> {
        return this.songs;
    }

    /**
     * Devuelve el nombre del artista
     * @returns string
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Devuelve los géneros asociados con el artista
     * @returns 
     */
    public getGenres(): Array<string> {
        return this.genres;
    }

    /**
     * Devuelve el número de oyentes
     * @returns number
     */
    public getListeners(): number {
        return this.listeners;
    }

    /**
     * Añade un nuevo género a los asociados al artista cuando se añade a la base de datos una nueva canción.
     * @param newGenre Genre
     */
    public addGenre(newGenre: string) {
        if(!this.genres.includes(newGenre))
            this.genres.push(newGenre);
    }

    /**
     * Añade un nueva canción al artista cuando se añade una nueva canción suya a la base de datos. 
     * @param newSong 
     */
    public addSong(newSong: Song) {
        this.songs.push(newSong.getName());
    }

    /**
     * Añade un nuevo grupo al artista cuando se añade un nuevo grupo al que pertenece a la base de datos. 
     * @param newSong 
     */
    public addGroup(newGroup: Group) {
        this.groups.push(newGroup.getName());
    }

    /**
     * Suma los nuevos oyentes al artista cuando se añade una nueva canción
     * @param newData number
     */
    public updateListeners(newData: number) {
        this.listeners += newData;
    }

    /**
     * Añade un album a los relacionados con el artista
     * @param newAlbum Album
     */
    public addAlbum(newAlbum: Album) {
        this.albums.push(newAlbum.getName())
    }

    public same(artist: Artist | Group): boolean {
        if (artist instanceof Group) {
            return false;
        }
        return this.getName() === artist.getName();
    }

    public print() {
        console.log(`ARTISTA: **${this.getName()}**`);
        if (this.getAlbums().length > 0) {
            console.log('\tAlbums:')
            this.getAlbums().forEach((album) => {
                console.log(`\t   - ${album}`);

            });
        } else {
            console.log(`\tEste artista no tiene albumes relacionados`);
        }

        if (this.getSongs().length > 0) {
            console.log('\tCanciones:')
            this.getSongs().forEach((song) => {
                console.log(`\t   - ${song}`);

            });
        } else {
            console.log(`\tEste artista no tiene canciones aun`);
        }

        if (this.getGenres().length > 0) {
            console.log('\tGeneros::')
            this.getGenres().forEach((genre) => {
                console.log(`\t   - ${genre}`);

            });
        } else {
            console.log(`\tEste artista no tiene generos relacionados aun`);
        }
    }

    public has(element: Genre | Group | Album | Song): boolean {
        if (element instanceof Genre) {
            this.getGenres().forEach(genre => {
                if(genre == element.getName()) {
                    return true;
                }
            });
        } else if (element instanceof Group) {
            this.getGroups().forEach(component => {
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


    public static deserialize(artists: Artist[]): Artist[] {
        const myArtists: Artist[] = [];

        artists.forEach((artist) => {
            const myArtist = new Artist(artist.getName(), artist.getGenres(), 
            artist.getListeners(), artist.getGroups(), artist.getAlbums(), artist.getSongs());

            myArtists.push(myArtist);
        });

        return myArtists;
    }
}
