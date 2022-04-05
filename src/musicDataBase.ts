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
}