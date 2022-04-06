import 'mocha'
import { expect } from 'chai'
import { Artist } from '../src/artist';
import { Song } from '../src/song'
import { Genre } from '../src/genre';
import { MusicDataBase } from '../src/musicDataBase'
import { Group } from '../src/group';
import { Album } from '../src/album';
import { compareSets } from '../src/compareSet';

describe("DATABASE EMPTY TEST", () => {

    let myDataBase: MusicDataBase = new MusicDataBase();

    it("Se espera que al crear una base de datos, no tenga artistas", () => {
        let emptySet: Set<Artist> = new Set<Artist> ();
        expect(compareSets(myDataBase.getArtists(), emptySet)).to.be.equal(true)
    });

    it("Se espera que al crear una base de datos, no tenga canciones", () => {
        let emptySet: Set<Song> = new Set<Song> ();
        expect(compareSets(myDataBase.getSongs(), emptySet)).to.be.equal(true)
    });

    it("Se espera que al crear una base de datos, no tenga grupos", () => {
        let emptySet: Set<Group> = new Set<Group> ();
        expect(compareSets(myDataBase.getGroups(), emptySet)).to.be.equal(true);
    });

    it("Se espera que al crear una base de datos, no tenga albumes", () => {
        let emptySet: Set<Album> = new Set<Album>();
        expect(compareSets(myDataBase.getAlbums(), emptySet)).to.be.equal(true);
    });

    it("Se espera que al crear una base de datos, no tenga géneros", () => {
        let emptySet: Set<Genre> = new Set<Genre>();
        expect(compareSets(myDataBase.getGenres(), emptySet)).to.be.equal(true)
    });
});


describe("CARGA DE LA BASE DE DATOS TESTS", () => {
    let myDataBase: MusicDataBase = new MusicDataBase();
    myDataBase.defaultData();

    it("Se espera que la base de datos se cargue con los géneros por defecto", () => {

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

        expect(compareSets(myDataBase.getGenres(), defaultGenres)).to.be.equal(true);
    });


    it("Se espera que la base de datos se cargue con los artistas por defecto", () => {

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

        expect(compareSets(myDataBase.getArtists(), defaultArtists)).to.be.equal(true);
    });

    it("Se espera que la base de datos se cargue con los grupos por defecto", () => {
        let Wisin: Artist;
        let Yandel: Artist;
        let DavidMuñoz: Artist;
        let JoseMuñoz: Artist;

        myDataBase.getArtists().forEach((a) => { if(a.getName() == 'Wisin') Wisin = a});
        myDataBase.getArtists().forEach((a) => { if(a.getName() == 'Yandel') Yandel = a});
        myDataBase.getArtists().forEach((a) => { if(a.getName() == 'David Muñoz') DavidMuñoz = a});
        myDataBase.getArtists().forEach((a) => { if(a.getName() == 'Jose Muñoz') JoseMuñoz = a});

       let defaultGroups: Set<Group> = new Set<Group>([
            new Group("Wisin & Yandel", 2001, new Set<Artist>([Wisin, Yandel]), 12563),
            new Group("Estopa", 2006, new Set<Artist>([DavidMuñoz, JoseMuñoz]), 4123)
        ]);

        expect(compareSets(myDataBase.getGroups(), defaultGroups)).to.be.equal(true);
    });


    it("Se espera que la base de datos se cargue con las canciones por defecto", () => {
        let WisinYYandel: Group;
        let Anuel: Artist;

        myDataBase.getArtists().forEach((a) => { if(a.getName() == 'Anuel') Anuel = a});
        myDataBase.getGroups().forEach((a) => { if(a.getName() == 'Wisin & Yandel') WisinYYandel = a});


        let Reggeton: Genre;

        myDataBase.getGenres().forEach((a) => { if(a.getName() == 'Reggaeton') Reggeton = a});

        let defaultSongs: Set<Song> = new Set<Song>([
            new Song("China", Anuel, Reggeton, true, 1000025, 120),
            new Song("Sola", Anuel, Reggeton, true, 458845, 100),
            new Song("Abusadora", WisinYYandel, Reggeton, true, 1000025, 110),
        ]);

        expect(compareSets(myDataBase.getSongs(), defaultSongs)).to.be.equal(true);
    });


    it("Se espera que al cargar la base de datos esta tenga los albumes por defecto", () => {
        let Anuel: Artist;

        myDataBase.getArtists().forEach((a) => { if(a.getName() == 'Anuel') Anuel = a});


        let Reggeton: Genre;

        myDataBase.getGenres().forEach((a) => { if(a.getName() == 'Reggeton') Reggeton = a});


        let China: Song;
        let Sola: Song

        myDataBase.getSongs().forEach((a) => { if(a.getName() === "China") { China = a}})
        myDataBase.getSongs().forEach((a) => { if(a.getName() === "Sola") { Sola = a}})


        let defaultAlbums: Set<Album> = new Set<Album>([
            new Album("Real Hasta La Muerte", Anuel, 100, new Set<Song>([Sola, China])),
        ]);

        expect(compareSets(myDataBase.getAlbums(), defaultAlbums)).to.be.equal(true);
    })
   
});


describe("SE ACTUALIZA CORRECTAMENTE AL AÑADIR INFORMACION", () => {
    let myDataBase: MusicDataBase = new MusicDataBase;
    myDataBase.defaultData();

    it("Se actualizan correctamente las canciones al artista al añadir una canción a la base de datos", () => {
        let a = myDataBase.getArtists();
        a.forEach((artist) => {
            switch(artist.getName()) {
                case 'Anuel': {
                    expect(artist.getSongs().size).to.be.equal(2);
                    break;
                }

                case 'Maluma': {
                    expect(artist.getSongs().size).to.be.equal(0);
                    break;
                }

                default: {
                    break;
                }
            }   
        });
    });


    it("Se actualizan correctamente los generos relacionados al artista al añadir una canción a la base de datos", () => {
        let a = myDataBase.getArtists();
        a.forEach((artist) => {
            switch(artist.getName()) {
                case 'Anuel': {
                    expect(artist.getGenres().size).to.be.equal(1);
                    break;
                }

                case 'Maluma': {
                    expect(artist.getSongs().size).to.be.equal(0);
                    break;
                }

                default: {
                    break;
                }
            }   
        });
    });

    it("Se actualizan correctamente los oyentes del artista al añadir una canción a la base de datos", () => {
        let a = myDataBase.getArtists();
        a.forEach((artist) => {
            switch(artist.getName()) {
                case 'Anuel': {
                    expect(artist.getListeners()).to.be.equal(60000000);
                    break;
                }

                case 'Maluma': {
                    expect(artist.getListeners()).to.be.equal(0);
                    break;
                }

                default: {
                    break;
                }
            }   
        });
    });
})
