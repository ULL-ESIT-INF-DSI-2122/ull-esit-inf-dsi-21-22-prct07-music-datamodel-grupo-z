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
        this.defaultGroups();
        this.defaultSongs();
        this.defaultAlbums();
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

    public addGenre(newGenre: Genre) {
        let newGenres: Set<Genre> = this.getGenres().add(newGenre);
        this.db.set('genre', newGenres).write();
    }

    public addArtist(newArtist: Artist) {
        let newArtists: Set<Artist> = this.getArtists().add(newArtist);
        this.db.set('artist', newArtists).write();
    }

    public addGroup(newGroup: Group) {
        let newGroups: Set<Group> = this.getGroups().add(newGroup);
        this.db.set('artist', newGroups).write();
    }

    public addSong(newSong: Song) {
        let newSongs: Set<Song> = this.getSongs().add(newSong);
        this.db.set('songs', newSongs).write();
    }

    public addAlbum(newAlbum: Album) {
        let newAlbums: Set<Album> = this.getAlbums().add(newAlbum);
        this.db.set('albums', newAlbums).write()
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

        defaultGenres.forEach((genre) => {
            this.addGenre(genre);
        })
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

        defaultArtists.forEach((artist) => {
            this.addArtist(artist);
        })
    }


    private defaultGroups() {
        let Wisin: Artist;
        let Yandel: Artist;
        let DavidMuñoz: Artist;
        let JoseMuñoz: Artist;

        this.getArtists().forEach((a) => { if(a.getName() == 'Wisin') Wisin = a});
        this.getArtists().forEach((a) => { if(a.getName() == 'Yandel') Yandel = a});
        this.getArtists().forEach((a) => { if(a.getName() == 'David Muñoz') DavidMuñoz = a});
        this.getArtists().forEach((a) => { if(a.getName() == 'Jose Muñoz') JoseMuñoz = a});

        let defaultGroups: Set<Group> = new Set<Group>([
            new Group("Wisin & Yandel", 2001, new Set<Artist>([Wisin, Yandel]), 12563),
            new Group("Estopa", 2006, new Set<Artist>([DavidMuñoz, JoseMuñoz]), 4123)
        ]);

        defaultGroups.forEach((group) => {
            this.addGroup(group);
        })
    }

    private defaultSongs() {

        let WisinYYandel: Group;
        let Anuel: Artist;

        this.getArtists().forEach((a) => { if(a.getName() == 'Anuel') Anuel = a});
        this.getGroups().forEach((a) => { if(a.getName() == 'Wisin & Yandel') WisinYYandel = a});


        let Reggeton: Genre;

        this.getGenres().forEach((a) => { if(a.getName() == 'Reggaeton') Reggeton = a});


        let defaultSongs: Set<Song> = new Set<Song>([
            new Song("China", Anuel, Reggeton, true, 1000025, 120),
            new Song("Sola", Anuel, Reggeton, true, 458845, 100),
            new Song("Abusadora", WisinYYandel, Reggeton, true, 1000025, 110),
        ]);

        defaultSongs.forEach((song) => {
            this.addSong(song)
        });
    }


    private defaultAlbums() {

        let Anuel: Artist;

        this.getArtists().forEach((a) => { if(a.getName() == 'Anuel') Anuel = a});


        let Reggeton: Genre;

        this.getGenres().forEach((a) => { if(a.getName() == 'Reggeton') Reggeton = a});


        let China: Song;
        let Sola: Song

        this.getSongs().forEach((a) => { if(a.getName() === "China") { China = a}})
        this.getSongs().forEach((a) => { if(a.getName() === "Sola") { Sola = a}})


        let defaultAlbums: Set<Album> = new Set<Album>([
            new Album("Real Hasta La Muerte", Anuel, 100, new Set<Song>([Sola, China])),
        ]);

        defaultAlbums.forEach((album) => {
            this.addAlbum(album);
        })
    }
}