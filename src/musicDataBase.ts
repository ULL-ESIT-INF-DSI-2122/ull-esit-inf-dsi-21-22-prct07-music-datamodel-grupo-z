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
        this.db.set('songs', new Array<Song>()).write();
        this.db.set('albums', new Array<Album>()).write();
        this.db.set('groups', new Array<Group>()).write();
        this.db.set('artists', new Array<Artist>()).write();
        this.db.set('genres', new Array<Genre>()).write();
        this.db.set('playlists', new Array<Playlist>()).write();
    }

    constructor() {
        this.db = lowdb(new FileSync('database/db.json'));
    }



    public getSongs(): Array<Song> {
        return Array.from(this.db.get('songs').value());
    }

    public getAlbums(): Array<Album> {
        return Array.from(this.db.get('albums').value());
    }

    public getArtists(): Array<Artist> {
        return Array.from(this.db.get('artists').value());
    }

    public getGroups(): Array<Group> {
        return Array.from(this.db.get('groups').value());
    }

    public getGenres(): Array<Genre> {
        return Array.from(this.db.get('genres').value());
    }

    public getPlaylists():Array<Playlist> {
        return Array.from(this.db.get('playlists').value());
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
        this.db.set('genres', this.getGenres().push(newGenre)).write();
    }

    public addArtist(newArtist: Artist) {
        this.db.set('artists', newArtist).write();
    }

    public addGroup(newGroup: Group) {
        this.db.set('groups', newGroup).write();

        let artists: Array<Artist> = newGroup.getArtist();
        let dbArtists: Array<Artist> = this.getArtists(); 
        
        Array.prototype.forEach.call(dbArtists, artist1 => {
            artists.forEach(artist2 => {
                if (artist1.same(artist2)) {
                    artist1.addGroup(newGroup);
                }
            })
        });
        /*
        dbArtists.forEach(artist1 => {
            artists.forEach(artist2 => {
                if (artist1.same(artist2)) {
                    artist1.addGroup(newGroup);
                }
            })
        });*/

        this.db.set('artists', dbArtists).write();
    }


    public addPlaylist(newPlaylist: Playlist) {
        // Metodo de busqueda por usuario 
        this.db.set('playlists', newPlaylist).write();
    }

    public addSong(newSong: Song) {
        this.db.set('songs', newSong).write();

        let artistsUpdated: Array<Artist> = this.getArtists();

        Array.prototype.forEach.call(artistsUpdated, artist => {
            if(artist.same(newSong.getCreator())) {
                artist.addSong(newSong);
                artist.addGenre(newSong.getGenre());
                artist.updateListeners(newSong.getTimesListened())
            }
        });
        /*
        artistsUpdated.forEach((artist) => {
            if(artist.same(newSong.getCreator())) {
                artist.addSong(newSong);
                artist.addGenre(newSong.getGenre());
                artist.updateListeners(newSong.getTimesListened())
            }
        });*/
        this.db.set('artists', artistsUpdated).write();


        let groupsUpdated: Array<Group> = this.getGroups();
        Array.prototype.forEach.call(groupsUpdated, group => {
            if(group.same(newSong.getCreator())) {
                group.addSong(newSong);
                group.addGenre(newSong.getGenre());
                group.updateListeners(newSong.getTimesListened())
            }
        });
        /*
        groupsUpdated.forEach((group) => {
            if(group.same(newSong.getCreator())) {
                group.addSong(newSong);
                group.addGenre(newSong.getGenre());
                group.updateListeners(newSong.getTimesListened())
            }
        });*/
        this.db.set('artists', artistsUpdated).write();
        let genresUpdated: Array<Genre> = this.getGenres();
        /*
        Array.prototype.forEach.call(genresUpdated,genre  => {
            if(genre.same(newSong.getGenre())) {
                genre.addSong(newSong);
            }
        });*/
        genresUpdated.forEach((genre) => {
            if(genre.same(newSong.getGenre())) {
                genre.addSong(newSong);
            }
        });
        this.db.set('genres', genresUpdated).write();

    }

    public addAlbum(newAlbum: Album) {
        this.db.set('albums', newAlbum).write();

        let artistsUpdated: Array<Artist> = this.getArtists();

        Array.prototype.forEach.call(artistsUpdated, artist => {
            if(artist.same(newAlbum.getCreator())) {
                artist.addAlbum(newAlbum);
            }
        });
        /*
        artistsUpdated.forEach((artist) => {
            if(artist.same(newAlbum.getCreator())) {
                artist.addAlbum(newAlbum);
            }
        });*/
        this.db.set('artists', artistsUpdated).write();


        let groupsUpdated: Array<Group> = this.getGroups();

        Array.prototype.forEach.call(groupsUpdated, group => {
            if(group.same(newAlbum.getCreator())) {
                group.addAlbum(newAlbum);
            }
        });
        /*
        groupsUpdated.forEach((group) => {
            if(group.same(newAlbum.getCreator())) {
                group.addAlbum(newAlbum);
            }
        });*/
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
        console.log("Lista sin ordenar: ", sortedList);

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
