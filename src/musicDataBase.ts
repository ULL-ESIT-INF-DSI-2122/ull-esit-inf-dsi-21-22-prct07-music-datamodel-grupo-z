import { Album } from "./album";
import { Artist } from "./artist";
import { Genre } from "./genre";
import { Group } from "./group";
import { Song } from "./song";
import * as lowdb from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';

type schemaType = {
    albums: Set<Album>,
    artists: Set<Artist>,
    groups: Set<Group>,
    genres: Set<Genre>,
    songs: Set<Song>
}


export class MusicDataBase {

    private db: lowdb.LowdbSync<schemaType>;
        
    initializeDb() {
        this.db = lowdb(new FileSync('database/db.json'));
        this.db.set('songs', new Set<Song>([])).write();
        this.db.set('albums', new Set<Album>([])).write();
        this.db.set('groups', new Set<Group>([])).write();
        this.db.set('artists', new Set<Artist>([])).write();
        this.db.set('genres', new Set<Genre>([])).write();
    }

    constructor() {
        this.initializeDb();
    }

    public defaultData() {
        this.defaultGenres();
        this.defaultArtists();
    }

    public getSongs(): Set<Song> {
        return this.db.get('songs').value();
    }

    public getAlbums(): Set<Album> {
        return this.db.get('albums').value();
    }

    public getArtists(): Set<Artist> {
        return this.db.get('artists').value();
    }

    public getGroups(): Set<Group> {
        return this.db.get('groups').value();
    }

    public getGenres() {
        return this.db.get('genres').value();

    }

    private defaultGenres() {
        let defaultGenres: Set<Genre> = new Set<Genre>([
            new Genre("Reggaeton"),
            new Genre("Electronica"),
            new Genre("Bachata"),
            new Genre("Pop"),
            new Genre("Rock"),
            new Genre("Heavy Metal"),
            new Genre("Salsa"),
            new Genre("Rap"),
            new Genre("Reggae"),
            new Genre("Trap")      
        ]);

        this.db.set('genres', defaultGenres).write();
    }

    private defaultArtists() {
        let defaultArtists: Set<Artist> = new Set<Artist>([
            new Artist("Anuel"),
            new Artist("Bob Marley"),
            new Artist("Avicii"),
            new Artist("David Guetta"),
            new Artist("Celia Cruz"),
            new Artist("Eminem"),
            new Artist("Maluma"),
            new Artist("Wisin"),
            new Artist("Yandel"),
            new Artist("David Muñoz"),
            new Artist("Jose Muñoz"),
            new Artist("Rihanna"),
            new Artist("Juan Magan"),
            new Artist("Ozuna"),
            new Artist("Freddy Mercury"),
            new Artist("John Lennon"),
            new Artist("Morad"),
            new Artist("Shakira")    
        ]);

        this.db.set('artists', defaultArtists).write();
    }
}