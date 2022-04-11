import { Album } from "./album";
import { Artist } from "./artist";
import { Genre } from "./genre";
import { Group } from "./group";
import { Song } from "./song";
import { Playlist } from "./playlist";

import * as lowdb from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';


type schemaType = {
    albums: Array<Album>,
    artists: Array<Artist>,
    groups: Array<Group>,
    genres: Array<Genre>,
    songs: Array <Song>,
    playlists: Array<Playlist>
}


export class MusicDataBase {

    private db: lowdb.LowdbSync<schemaType>;
        
    public initializeDB() {
        this.db.set('songs', []).write();
        this.db.set('albums', []).write();
        this.db.set('groups', []).write();
        this.db.set('artists', []).write();
        this.db.set('genres', []).write();
        this.db.set('playlists', []).write();
    }

    constructor() {
        this.db = lowdb(new FileSync('database/db.json'));
        this.initializeDB();
    }



    public getSongs(): Array<Song> {
        return this.db.get('songs').value();
    }

    public getAlbums(): Array<Album> {
        return this.db.get('albums').value();
    }

    public getArtists(): Array<Artist> {
        // Probando cosas: 
        const serializedArtists = this.db.get('artists').value();
        const myArtists = Artist.deserialize(serializedArtists);
        return myArtists;
    }

    public getGroups(): Array<Group> {
        return this.db.get('groups').value();
    }

    public getGenres(): Array<Genre> {
        // Probando cosas: 
        const serializedGenres = this.db.get('genres').value();
        const myGenre = Genre.deserialize(serializedGenres);
        return myGenre;
    }

    public getPlaylists():Array<Playlist> {
        return this.db.get('playlists').value();
    }


    public addSongToPlaylist(user: string, playlist: string, song: Song) {
        let myPlaylists: Array<Playlist> = this.getPlaylists();

        // Realizar filtrado por usuarios

        myPlaylists.forEach((pl) => {
            if (playlist === pl.getName()) {
                pl.addSong(song);
            }
        });
        
        this.db.set('playlists', myPlaylists).write();   
    }

    public addGenre(newGenre: Genre) {
        const genreValue: Array<Genre> = this.getGenres();
        genreValue.push(newGenre);
        this.db.set('genres', genreValue).write();
    }

    public addArtist(newArtist: Artist) {
        const artistValue: Array<Artist> = this.getArtists();
        artistValue.push(newArtist);
        this.db.set('artists', artistValue).write();
    }

    public addGroup(newGroup: Group) {
        //const groupValue: Array<Group> = this.getGroups();
        //groupValue.push(newGroup);
        this.db.set('groups', newGroup).write();

        let artists: Array<Artist> = newGroup.getArtist();
        let dbArtists: Array<Artist> = this.getArtists(); 
        dbArtists.forEach(artist1 => {
            artists.forEach(artist2 => {
                if (artist1.same(artist2)) {
                    artist1.addGroup(newGroup);
                }
            })
        });
        this.db.set('artists', dbArtists).write();
    }


    public addPlaylist(newPlaylist: Playlist) {
        // Metodo de busqueda por usuario 
        const playlistValue: Array<Playlist> = this.getPlaylists();
        playlistValue.push(newPlaylist);
        this.db.set('playlists', playlistValue).write();
    }

    public addSong(newSong: Song) {
        const songValue: Array<Song> = this.getSongs();
        songValue.push(newSong);
        this.db.set('songs', songValue).write();

        let artistsUpdated: Array<Artist> = this.getArtists();
        artistsUpdated.forEach((artist) => {
            if(artist.same(newSong.getCreator())) {
                artist.addSong(newSong);
                artist.addGenre(newSong.getGenre());
                artist.updateListeners(newSong.getTimesListened())
            }
        });
        this.db.set('artists', artistsUpdated).write();


        let groupsUpdated: Array<Group> = this.getGroups();
        groupsUpdated.forEach((group) => {
            if(group.same(newSong.getCreator())) {
                group.addSong(newSong);
                group.addGenre(newSong.getGenre());
                group.updateListeners(newSong.getTimesListened())
            }
        });
        this.db.set('artists', artistsUpdated).write();
        
        let genresUpdated: Array<Genre> = this.getGenres(); 
        genresUpdated.forEach((genre) => {
            if(genre.same(newSong.getGenre())) {
                genre.addSong(newSong);
            }
        });
        this.db.set('genres', genresUpdated).write();
        
    }

    public addAlbum(newAlbum: Album) {
        const albumValue: Array<Album> = this.getAlbums();
        albumValue.push(newAlbum);
        this.db.set('albums', albumValue).write();

        let artistsUpdated: Array<Artist> = this.getArtists();

        
        artistsUpdated.forEach((artist) => {
            if(artist.same(newAlbum.getCreator())) {
                artist.addAlbum(newAlbum);
            }
        });
        this.db.set('artists', artistsUpdated).write();


        let groupsUpdated: Array<Group> = this.getGroups();

        
        groupsUpdated.forEach((group) => {
            if(group.same(newAlbum.getCreator())) {
                group.addAlbum(newAlbum);
            }
        });
        this.db.set('groups', groupsUpdated).write();
    }

    /**
     * Si el tipo == 0 se ordena por nombre de cancion ascendentemente
     * Si el tipo == 1 se ordena por nombre de cancion descententemente
     * Si el tipo == 2 se ordena por numero de reproducciones totales ascententemente
     * Si el tipo == 3 se ordena por numero de reproducciones totales descendentemente
     */
    public songSort(type: number): Array<Song> {
        let sortedList: Array<Song> = Array.from(this.getSongs());

        let a: Song;
        let b: Song;
        
        sortedList.sort(function (a, b) {
            if (type === 0) {
                return a.getName() > b.getName() ? 1 : -1;
            } else if (type == 2) {
                return a.getName() > b.getName() ? -1 : 1;
            } else if (type == 3) {
                return a.getTimesListened() - b.getTimesListened();
            } else {
                return a.getTimesListened() > b.getTimesListened() ? -1 : 1;
            }
        });

        return sortedList;
    }


    public albumSort(asc: boolean = true): Array<Album> {
        let sortedList: Array<Album> = Array.from(this.getAlbums());

        let a: Album;
        let b: Album;
        
        sortedList.sort(function (a, b) {
            if (asc) {
                return a.getName() > b.getName() ? 1 : -1;
            } else {
                return a.getName() > b.getName() ? -1 : 1;
            }
        });

        return sortedList;
    }

    public artistSort(asc: boolean = true): Array<Artist> {
        let sortedList: Array<Artist> = Array.from(this.getArtists());

        let a: Artist;
        let b: Artist;
        
        sortedList.sort(function (a, b) {
            if (asc) {
                return a.getName() > b.getName() ? 1 : -1;
            } else {
                return a.getName() > b.getName() ? -1 : 1;
            }
        });

        return sortedList;
    }


    public genreSort(asc: boolean = true): Array<Genre> {
        let sortedList: Array<Genre> = this.getGenres();

        let a: Genre;
        let b: Genre;
        
        sortedList.sort(function (a, b) {
            if (asc) {
                return a.getName() > b.getName() ? 1 : -1;
            } else {
                return a.getName() > b.getName() ? -1 : 1;
            }
        });

        return sortedList;
    }

    public playListSort(asc: boolean = true): Array<Playlist> {
        let sortedList: Array<Playlist> = Array.from(this.getPlaylists());

        let a: Playlist;
        let b: Playlist;
        
        sortedList.sort(function (a, b) {
            if (asc) {
                return a.getName() > b.getName() ? 1 : -1;
            } else {
              return a.getName() > b.getName() ? -1 : 1;
            }
        });

        return sortedList;
    }


    public defaultData() {
        let Reggeton: Genre = new Genre("Reggeton");
        let Electronica: Genre = new Genre("Electronica");
        let Bachata: Genre = new Genre("Bachata");
        let Pop: Genre = new Genre("Pop");
        let Rock: Genre = new Genre("Rock");
        let HeavyMetal: Genre = new Genre("Heavy Metal");
        let Salsa: Genre = new Genre("Salsa");
        let Rap: Genre = new Genre("Rap");
        let Reggae: Genre = new Genre("Reggae");
        let Trap: Genre = new Genre("Trap");

        let defaultGenres: Array<Genre> = [
            Reggeton, Electronica, Bachata, Pop, Rock, HeavyMetal, Salsa, Rap, Reggae, Trap 
        ];

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

        let defaultArtists: Array<Artist> = [
            Anuel, BobMarley, Avicii, DavidGuetta, CeliaCruz, Eminem, Maluma, Wisin, Yandel, DavidMuñoz, JoseMuñoz,
            Rihanna, JuanMagan, Ozuna, FreddyMercury, JohnLennon, Morad, Shakira
        ];

        defaultArtists.forEach((artist) => {
            this.addArtist(artist);
        });

        let WisinYYandel: Group = new Group("Wisin & Yandel", 2001, [Wisin, Yandel], 12563);
        let Estopa: Group = new Group("Estopa", 2006, [DavidMuñoz, JoseMuñoz], 4123);

        let defaultGroups: Array<Group> = [
            WisinYYandel, Estopa
        ];

        defaultGroups.forEach((group) => {
            this.addGroup(group);
        });


        let China: Song = new Song("China", Anuel, Reggeton, true, 10000000, 120);
        let Sola: Song = new Song("Sola", Anuel, Reggeton, true, 50000000, 100);
        let Abusadora: Song = new Song("Abusadora", WisinYYandel, Reggeton, true, 1000025, 110);

        let defaultSongs: Array<Song> = [China, Sola, Abusadora];

        defaultSongs.forEach((song) => {
            this.addSong(song)
        });

        let RHLM: Album = new Album("Real Hasta La Muerte", Anuel, 100, [Sola, China]);

        let defaultAlbums: Array<Album> = [
            RHLM
        ];

        defaultAlbums.forEach((album) => {
            this.addAlbum(album);
        });
    }
}
