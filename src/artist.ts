import { Album } from "./album";
import { Genre } from "./genre";
import { Group } from "./group";
import { Song } from "./song";

/**
 * Clase que define un artista con sus atributos y métodos
 */
export class Artist {
    private genres: Array<Genre> = new Array<Genre> ();
    private listeners: number = 0;
    private groups: Array <Group> = new Array<Group>();
    private albums: Array <Album> = new Array<Album>();
    private songs: Array<Song> = new Array<Song>();

    /**
     * Constructor de la clase Artist. Recibe el nombre del artista
     * @param name string 
     */
    constructor(
        private name: string
    ) {}

    /**
     * Devuelve los grupos de los que forma parte el artista
     * @returns Array<Group>
     */
    public getGroups(): Array<Group> {
        return this.groups;
    }

    /**
     * Devuelve los albumes del artista
     * @returns Array<Album>
     */
    public getAlbums(): Array<Album> {
        return this.albums;
    }

    /**
     * Devuelve las canciones del artista
     * @returns Array<Song>
     */
    public getSongs(): Array<Song> {
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
    public getGenres(): Array<Genre> {
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
    public addGenre(newGenre: Genre) {
        this.genres.push(newGenre);
    }

    /**
     * Añade un nueva canción al artista cuando se añade una nueva canción suya a la base de datos. 
     * @param newSong 
     */
    public addSong(newSong: Song) {
        this.songs.push(newSong);
    }

    /**
     * Añade un nuevo grupo al artista cuando se añade un nuevo grupo al que pertenece a la base de datos. 
     * @param newSong 
     */
    public addGroup(newGroup: Group) {
        this.groups.push(newGroup);
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
        this.albums.push(newAlbum)
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
                console.log(`\t   - ${album.getName()}`);

            });
        } else {
            console.log(`\tEste artista no tiene albumes relacionados`);
        }

        if (this.getSongs().length > 0) {
            console.log('\tCanciones:')
            this.getSongs().forEach((song) => {
                console.log(`\t   - ${song.getName()}`);

            });
        } else {
            console.log(`\tEste artista no tiene canciones aun`);
        }

        if (this.getGenres().length > 0) {
            console.log('\tGeneros::')
            this.getGenres().forEach((genre) => {
                console.log(`\t   - ${genre.getName()}`);

            });
        } else {
            console.log(`\tEste artista no tiene generos relacionados aun`);
        }
    }

    public has(element: Genre | Group | Album | Song): boolean {
        if (element instanceof Genre) {
            this.getGenres().forEach(genre => {
                if(genre.same(element)) {
                    return true;
                }
            });
        } else if (element instanceof Group) {
            this.getGroups().forEach(component => {
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

    public static deserialize(artists: Artist[]): Artist[] {
        const myArtists: Artist[] = [];

        artists.forEach((artist) => {
            const myArtist = new Artist(artist.name);
            artist.getAlbums().forEach(album => {
                myArtist.addAlbum(album);
            })

            artist.getGenres().forEach(genre => {
                myArtist.addGenre(genre);
            })

            artist.getGroups().forEach(group => {
                myArtist.addGroup(group);
            })

            artist.getSongs().forEach(song => {
                myArtist.addSong(song);
            })

            myArtist.updateListeners(artist.getListeners());
            myArtists.push(myArtist);
        });

        return myArtists;
  }
}
