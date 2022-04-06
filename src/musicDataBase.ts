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
        
    public initializeDb() {
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

    public getGenres(): Set<Genre> {
        return this.db.get('genres').value();
    }

    public addGenre(newGenre: Genre) {
        this.db.set('genres', this.getGenres().add(newGenre)).write();
    }

    public addArtist(newArtist: Artist) {
        this.db.set('artists', this.getArtists().add(newArtist)).write();
    }

    public addGroup(newGroup: Group) {
        this.db.set('groups', this.getGroups().add(newGroup)).write();

        let artists: Set<Artist> = newGroup.getArtist();
        let dbArtists: Set<Artist> = this.getArtists(); 
        
        dbArtists.forEach((artist1) => {
            artists.forEach((artist2) => {
                if (artist1.same(artist2)) {
                    artist2.addGroup(newGroup);
                }
            })
        });

        this.db.set('artists', dbArtists).write();
    }


    public addSong(newSong: Song) {
        this.db.set('songs', this.getSongs().add(newSong)).write();

        let artistsUpdated: Set<Artist> = this.getArtists();
        artistsUpdated.forEach((artist) => {
            if(artist.same(newSong.getCreator())) {
                artist.addSong(newSong);
                artist.addGenre(newSong.getGenre());
                artist.updateListeners(newSong.getTimesListened())
            }
        });
        this.db.set('artists', artistsUpdated).write();


        let groupsUpdated: Set<Group> = this.getGroups();
        groupsUpdated.forEach((group) => {
            if(group.same(newSong.getCreator())) {
                group.addSong(newSong);
                group.addGenre(newSong.getGenre());
                group.updateListeners(newSong.getTimesListened())
            }
        });
        this.db.set('artist', artistsUpdated).write();

        let genresUpdated: Set<Genre> = this.getGenres();
        genresUpdated.forEach((genre) => {
            if(genre.same(newSong.getGenre())) {
                genre.addSong(newSong);
            }
        });
        this.db.set('genres', genresUpdated).write();

    }

    public addAlbum(newAlbum: Album) {
        this.db.set('albums', this.getAlbums().add(newAlbum)).write();

        let artistsUpdated: Set<Artist> = this.getArtists();
        artistsUpdated.forEach((artist) => {
            if(artist.same(newAlbum.getCreator())) {
                artist.addAlbum(newAlbum);
            }
        });
        this.db.set('artists', artistsUpdated).write();


        let groupsUpdated: Set<Group> = this.getGroups();
        groupsUpdated.forEach((group) => {
            if(group.same(newAlbum.getCreator())) {
                group.addAlbum(newAlbum);
            }
        });
        this.db.set('artist', artistsUpdated).write();
    }

    public defaultData() {
        let Reggeton: Genre = new Genre("Reggaeton");
        let Electronica: Genre = new Genre("Electronica");
        let Bachata: Genre = new Genre("Bachata");
        let Pop: Genre = new Genre("Pop");
        let Rock: Genre = new Genre("Rock");
        let HeavyMetal: Genre = new Genre("Heavy Metal");
        let Salsa: Genre = new Genre("Salsa");
        let Rap: Genre = new Genre("Rap");
        let Reggae: Genre = new Genre("Reggae");
        let Trap: Genre = new Genre("Trap");

        let defaultGenres: Set<Genre> = new Set<Genre>([
            Reggeton, Electronica, Bachata, Pop, Rock, HeavyMetal, Salsa, Rap, Reggae, Trap
        ]);

        defaultGenres.forEach((genre) => {
            this.addGenre(genre);
        });


        let Anuel: Artist = new Artist("Anuel");
        let BobMarley: Artist = new Artist("Bob Marley");
        let Avicii: Artist = new Artist("Avicii");
        let DavidGuetta: Artist = new Artist("David Guetta");
        let CeliaCruz: Artist = new Artist("Celia Cruz");
        let Eminem: Artist = new Artist("Eminem");
        let Maluma: Artist = new Artist("Maluma");
        let Wisin: Artist = new Artist("Wisin");
        let Yandel: Artist = new Artist("Yandel");
        let DavidMuñoz: Artist = new Artist("David Muñoz");
        let JoseMuñoz: Artist = new Artist("Jose Muñoz");
        let Rihanna: Artist = new Artist("Rihanna");
        let JuanMagan: Artist = new Artist("Juan Magan");
        let Ozuna: Artist = new Artist("Ozuna");
        let FreddyMercury: Artist = new Artist("Freddy Mercury");
        let JohnLennon: Artist = new Artist("John Lennon");
        let Morad: Artist = new Artist("Morad");
        let Shakira: Artist = new Artist("Shakira");

        let defaultArtists: Set<Artist> = new Set<Artist>([
            Anuel, BobMarley, Avicii, DavidGuetta, CeliaCruz, Eminem, Maluma, Wisin, Yandel, DavidMuñoz, JoseMuñoz,
            Rihanna, JuanMagan, Ozuna, FreddyMercury, JohnLennon, Morad, Shakira
        ]);

        defaultArtists.forEach((artist) => {
            this.addArtist(artist);
        });

        let WisinYYandel: Group = new Group("Wisin & Yandel", 2001, new Set<Artist>([Wisin, Yandel]), 12563);
        let Estopa: Group = new Group("Estopa", 2006, new Set<Artist>([DavidMuñoz, JoseMuñoz]), 4123);

        let defaultGroups: Set<Group> = new Set<Group>([
            WisinYYandel, Estopa
        ]);

        defaultGroups.forEach((group) => {
            this.addGroup(group);
        });


        let China: Song = new Song("China", Anuel, Reggeton, true, 10000000, 120);
        let Sola: Song = new Song("Sola", Anuel, Reggeton, true, 50000000, 100);
        let Abusadora: Song = new Song("Abusadora", WisinYYandel, Reggeton, true, 1000025, 110);

        let defaultSongs: Set<Song> = new Set<Song>([
            China, Sola, Abusadora
        ]);

        defaultSongs.forEach((song) => {
            this.addSong(song)
        });

        let RHLM: Album = new Album("Real Hasta La Muerte", Anuel, 100, new Set<Song>([Sola, China]));

        let defaultAlbums: Set<Album> = new Set<Album>([
            RHLM
        ]);

        defaultAlbums.forEach((album) => {
            this.addAlbum(album);
        });
    }
}