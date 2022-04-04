import { Album } from "./album";
import { Artist } from "./artist";
import { Genre } from "./genre";
import { Group } from "./group";
import { Song } from "./song";

import { LowSync, JSONFileSync } from 'lowdb'



export class MusicDataBase {
    private db;
    
    initializeDb() {
        this.db = new LowSync(new JSONFileSync('file.json'));
        this.db.songs =  new Set<Song>();
        this.db.artists =  new Set<Artist>(); 
        this.db.groups =  new Set<Group>(); 
        this.db.album =  new Set<Album>();
        this.db.genre =  new Set<Genre>();
    }

    constructor() {
        this.initializeDb;
    }

    public getSongs(): Set<Song> {
        return this.db.songs;
    }

    public getAlbums(): Set<Album> {
        return this.db.albums;
    }

    public getArtists(): Set<Artist> {
        return this.db.artists;
    }

    public getGroups(): Set<Group> {
        return this.db.group;
    }

    public getGenres(): Set<Genre> {
        return this.db.genres;
    }

}