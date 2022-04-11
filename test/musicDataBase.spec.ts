import 'mocha'
import { expect } from 'chai'
import { Artist } from '../src/artist';
import { Song } from '../src/song'
import { Genre } from '../src/genre';
import { MusicDataBase } from '../src/musicDataBase'
import { Group } from '../src/group';
import { Album } from '../src/album';
import { areEqual } from '../src/compareSet';

describe("DATABASE EMPTY TEST", () => {

    let myDataBase: MusicDataBase = new MusicDataBase();

    it("Se espera que al crear una base de datos, no tenga artistas", () => {
        let emptySet: Array<Artist> = [];
        expect(areEqual(myDataBase.getArtists(), emptySet)).to.be.equal(true)
    });

    it("Se espera que al crear una base de datos, no tenga canciones", () => {
        let emptySet: Array<Song> = [];
        expect(areEqual(myDataBase.getSongs(), emptySet)).to.be.equal(true)
    });

    it("Se espera que al crear una base de datos, no tenga grupos", () => {
        let emptySet: Array<Group> = [];
        expect(areEqual(myDataBase.getGroups(), emptySet)).to.be.equal(true);
    });

    it("Se espera que al crear una base de datos, no tenga albumes", () => {
        let emptySet: Array<Album> = [];
        expect(areEqual(myDataBase.getAlbums(), emptySet)).to.be.equal(true);
    });

    it("Se espera que al crear una base de datos, no tenga géneros", () => {
        let emptySet: Array<Genre> = [];
        expect(areEqual(myDataBase.getGenres(), emptySet)).to.be.equal(true)
    });
});


describe("CARGA DE LA BASE DE DATOS TESTS", () => {
    let myDataBase: MusicDataBase = new MusicDataBase();
    myDataBase.defaultData();

    it("Se espera que la base de datos se cargue con los géneros por defecto", () => {

        let defaultGenres: Array<Genre> = [
            new Genre("Reggeton"),
            new Genre("Electronica"),
            new Genre("Bachata"),
            new Genre("Pop"),
            new Genre("Rock"),
            new Genre("Heavy Metal"),
            new Genre("Salsa"),
            new Genre("Rap"),
            new Genre("Reggae"),
            new Genre("Trap")      
        ];

        expect(areEqual(myDataBase.getGenres(), defaultGenres)).to.be.equal(true);
    });


    it("Se espera que la base de datos se cargue con los artistas por defecto", () => {

        let defaultArtists: Array<Artist> = [
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
        ];

        console.log( "MYDB", myDataBase.getArtists())
        console.log( "DEF",defaultArtists)

        expect(areEqual(myDataBase.getArtists(), defaultArtists)).to.be.equal(true);
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

       let defaultGroups: Array<Group> = [
            new Group("Wisin & Yandel", 2001, new Array<Artist>(Wisin, Yandel), 12563),
            new Group("Estopa", 2006, new Array<Artist>(DavidMuñoz, JoseMuñoz), 4123)
        ];

        expect(areEqual(myDataBase.getGroups(), defaultGroups)).to.be.equal(true);
    });


    it("Se espera que la base de datos se cargue con las canciones por defecto", () => {
        let WisinYYandel: Group;
        let Anuel: Artist;

        myDataBase.getArtists().forEach((a) => { if(a.getName() == 'Anuel') Anuel = a});
        myDataBase.getGroups().forEach((a) => { if(a.getName() == 'Wisin & Yandel') WisinYYandel = a});


        let Reggeton: Genre;

        myDataBase.getGenres().forEach((a) => { if(a.getName() == 'Reggeton') Reggeton = a});

        let defaultSongs: Array<Song> = [
            new Song("China", Anuel, Reggeton, true, 1000025, 120),
            new Song("Sola", Anuel, Reggeton, true, 458845, 100),
            new Song("Abusadora", WisinYYandel, Reggeton, true, 1000025, 110),
        ];

        expect(areEqual(myDataBase.getSongs(), defaultSongs)).to.be.equal(true);
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


        let defaultAlbums: Array<Album> = [
            new Album("Real Hasta La Muerte", Anuel, 100, new Array<Song>(Sola, China)),
        ];

        expect(areEqual(myDataBase.getAlbums(), defaultAlbums)).to.be.equal(true);
    })


    it("Se actualizan correctamente las canciones al artista al añadir una canción a la base de datos", () => {
        let a = myDataBase.getArtists();
        a.forEach((artist) => {
            switch(artist.getName()) {
                case 'Anuel': {
                    expect(artist.getSongs().length).to.be.equal(2);
                    break;
                }

                case 'Maluma': {
                    expect(artist.getSongs().length).to.be.equal(0);
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
                    expect(artist.getGenres().length).to.be.equal(1);
                    break;
                }

                case 'Maluma': {
                    expect(artist.getSongs().length).to.be.equal(0);
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

    it("Se actualizan correctamente los grupos del artista al añadirlo a un grupo", () => {
        let a = myDataBase.getArtists();
        a.forEach((artist) => {
            switch(artist.getName()) {
                case 'Anuel': {
                    expect(artist.getGroups().length).to.be.equal(0);
                    break;
                }

                case 'Wisin': {
                    expect(artist.getGroups().length).to.be.equal(1);
                    break;
                }

                default: {
                    break;
                }
            }   
        });
    });


    it("Se actualizan correctamente los albums del artista al añadir un album a la base de datos", () => {
        let a = myDataBase.getArtists();
        a.forEach((artist) => {
            switch(artist.getName()) {
                case 'Anuel': {
                    expect(artist.getAlbums().length).to.be.equal(1);
                    break;
                }

                case 'Wisin': {
                    expect(artist.getAlbums().length).to.be.equal(0);
                    break;
                }

                default: {
                    break;
                }
            }   
        });
    });


    it("Se pueden ordenar los géneros alfabeticamente", () => {
        let myGenres: Array<Genre> = myDataBase.genreSort();
        let myGenresNames: Array<string> = [];

        myGenres.forEach((genre: Genre) => {
            myGenresNames.push(genre.getName());
        });

        expect(myGenresNames).to.be.eql([
            "Bachata", 
            "Electronica",
            "Heavy Metal",
            "Pop",
            "Rap",
            "Reggae",
            "Reggeton",
            "Rock",
            "Salsa",
            "Trap"
        ]);
    });
});
 