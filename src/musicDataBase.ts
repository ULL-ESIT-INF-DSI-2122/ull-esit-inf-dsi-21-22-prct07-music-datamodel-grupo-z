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
        
    public clear() {
    }

    constructor() {
        this.db = lowdb(new FileSync('database/db.json'));


        this.db.defaults({ 
            albums: [], 
            artists: [],
            groups: [],
            genres:[],
            songs: [],
            playlists: [],
        }).write();

        if (this.db.get("genres").value() === undefined) {
            this.db.set("genres", []).write();
            this.defaultGenres();
        }

        if (this.db.get("artists").value() === undefined) {
            this.db.set("artists", []).write();
            this.defaultArtists();
        }

        if (this.db.get("groups").value() === undefined) {
            this.db.set("groups", []).write();
            this.defaultGroups();
        }

        if (this.db.get("songs").value() === undefined) {
            this.db.set("songs", []).write();
            this.defaultSongs();
        }

        if (this.db.get("albums").value() === undefined) {
            this.db.set("albums", []).write();
            this.defaultAlbums();
        }

        if (this.db.get("playlists").value() === undefined) {
            this.db.set("playlists", []).write();
        }
    }


    public getSongs(): Array<Song> {
        // Probando cosas: 
        const serializedSongs = this.db.get('songs').value();
        const mySongs = Song.deserialize(serializedSongs);
        return mySongs;
    }

    public getAlbums(): Array<Album> {
        // Probando cosas: 
        const serializedAlbums = this.db.get('albums').value();
        const myAlbums = Album.deserialize(serializedAlbums);
        return myAlbums;
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

        let artists: Array<string> = newGroup.getArtist();
        let dbArtists: Array<Artist> = this.getArtists();

        dbArtists.forEach((artist1: Artist) => {
            artists.forEach((artist2: string) => {
                if (artist1.getName() === artist2) {
                    artist1.addGroup(newGroup);
                }
            });
        });
        this.db.set('artists', dbArtists).write();
    }

    public addPlaylist(newPlaylist: Playlist) {
        this.db.set('playlists', newPlaylist).write();
    }

    public addSong(newSong: Song) {
        this.db.get('songs').push(newSong).write();

        let artistsUpdated: Array<Artist> = this.getArtists();
        artistsUpdated.forEach((artist) => {
            if(artist.getName() == newSong.getCreator()) {
                artist.addSong(newSong);
                artist.addGenre(newSong.getGenre());
                artist.updateListeners(newSong.getTimesListened())
            }
        });
        this.db.set('artists', artistsUpdated).write();


        let groupsUpdated: Array<Group> = this.getGroups();
        groupsUpdated.forEach((group: Group) => {
            if(group.getName() == newSong.getCreator()) {
                group.addSong(newSong);
                group.addGenre(newSong.getGenre());
                group.updateListeners(newSong.getTimesListened())
            }
        });
        this.db.set('groups', groupsUpdated).write();

        let genresUpdated: Array<Genre> = this.getGenres();
        genresUpdated.forEach((genre) => {
            if(genre.getName() == newSong.getGenre()) {
                genre.addSong(newSong);
                genre.addArtist(newSong.getCreator())
            }
        });
        this.db.set('genres', genresUpdated).write();
        
    }

    public addAlbum(newAlbum: Album) {
        this.db.get('albums').push(newAlbum).write();

        let artistsUpdated: Array<Artist> = this.getArtists();

        artistsUpdated.forEach((artist: Artist) => {
            if(artist.getName() === newAlbum.getCreator()) {
                artist.addAlbum(newAlbum);
            }
        });
        this.db.set('artists', artistsUpdated).write();


        let groupsUpdated: Array<Group> = this.getGroups();

        
        groupsUpdated.forEach((group) => {
            if(group.getName() == newAlbum.getCreator()) {
                group.addAlbum(newAlbum);
            }
        });
        this.db.set('artists', artistsUpdated).write();

        let genresUpdated: Array<Genre> = this.getGenres();
        genresUpdated.forEach((genre) => {
            if(newAlbum.getGenres().includes(genre.getName())) {
                genre.addAlbum(newAlbum.getName());
            }
        });
        this.db.set('artists', artistsUpdated).write();
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

        sortedList.sort(function (a: Genre, b: Genre) {
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


    public defaultGenres() {
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
    }

    public defaultArtists() {
        let defaultArtists: Array<Artist> = [
            new Artist("Bob Marley"),
            new Artist("Avicii"),
            new Artist("David Guetta"),
            new Artist("Celia Cruz"),
            new Artist("Anuel"),
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
            new Artist("Shakira"),
        ];

        defaultArtists.forEach((artist) => {
            this.addArtist(artist);
        });
    }

    public defaultGroups() {
        let defaultGroups: Array<Group> = [
            new Group("Wisin & Yandel", 2001, ["Wisin", "Yandel"], 12563),
            new Group("Estopa", 2006, ["DavidMuñoz", "JoseMuñoz"], 4123),
            new Group("Queen", 1970, ["Freddy Mercury"], 14520300),
        ];

        defaultGroups.forEach((group) => {
            this.addGroup(group);
        });
    }

    public defaultSongs() {
        let defaultSongs: Array<Song> = [
            new Song("China", "Anuel", "Reggeton", true, 10000000, 120),
            new Song("Sola", "Anuel", "Reggeton", true, 50000000, 100),
            new Song("Abusadora", "WisinYYandel", "Reggeton", true, 1000025, 110),
            new Song("Waka Waka", "Shakira", "Pop", true, 4584684, 110),
            new Song("La vida es un carnaval", "Celia Cruz", "Salsa", true, 44711100, 140),
            new Song("El farsante", "Ozuna", "Trap", false, 47580000, 110),
            new Song("Work", "Rihana", "Pop", true, 23000000, 98),
            new Song("Diamonds", "Rihana", "Pop", true, 400000, 170),
            new Song("Dile que tú me quieres", "Ozuna", "Reggeton", false, 412000000, 146),
            new Song("Without me", "Eminem", "Rap", true, 7410000, 102),
            new Song("Lose Yourself", "Eminem", "Rap", true, 4705000, 103),
            new Song("Stan", "Eminem", "Pop", true, 5880000, 100),
            new Song("La negra tiene tumbao", "Celia Cruz", "Salsa", true, 45020000, 104),
            new Song("Wake me Up", "Avicii", "Electronica", false, 9900000, 88),
            new Song("The nights", "Avicii", "Electronica", false, 47500000, 148),
            new Song("The days", "Avicii", "Electronica", false, 63000000, 178),
            new Song("Play Hard", "David Guetta", "Electronica", true, 5000000, 133),
            new Song("Sobredosis", "Ozuna", "Bachata", true, 1300000, 155),
            new Song("Smack that", "David Guetta", "Electronica", false, 77778800, 144),
            new Song("We are the Champions", "Queen", "Rock", true, 77746000, 200),
            new Song("Bohemian Raphsody", "Queen", "Rock", true, 30000000, 220),
        ];

        defaultSongs.forEach((song) => {
            this.addSong(song)
        });
    }
    

    public defaultAlbums() {
        let defaultAlbums: Array<Album> = [
            new Album("Real Hasta La Muerte", "Anuel", 100, ["Sola", "China"], ["Reggeton"]),
            new Album("Odisea", "Ozuna", 2018, ["El farsante", "Dile que tu me quieres"], ["Reggeton", "Trap"]),
            new Album("True", "Avicii", 2013, ["Wake me Up", "The nights", "The days"], ["Electronica"]),
        ];

        defaultAlbums.forEach((album) => {
            this.addAlbum(album);
        });
    }
}
