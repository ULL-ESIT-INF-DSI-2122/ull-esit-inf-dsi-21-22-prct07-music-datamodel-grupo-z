import 'mocha'
import { expect } from 'chai'
import { Artist } from '../src/artist';
import { Song } from '../src/song'
import { Genre } from '../src/genre';
import { MusicDataBase } from '../src/musicDataBase'
import { Group } from '../src/group';
import { Album } from '../src/album';
import { areEqual } from '../src/compareSet';

describe("CARGA DE LA BASE DE DATOS TESTS", () => {
    let myDataBase: MusicDataBase = new MusicDataBase();
    myDataBase.toDefault();

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

        expect(areEqual(myDataBase.getArtists(), defaultArtists)).to.be.equal(true);
    });

    it("Se espera que la base de datos se cargue con los grupos por defecto", () => {

       let defaultGroups: Array<Group> = [
            new Group("Wisin & Yandel", 2001, ["Wisin", "Yandel"], 12563),
            new Group("Estopa", 2006, ["DavidMuñoz", "JoseMuñoz"], 4123),
            new Group("Queen", 1970, ["Freddy Mercury"], 14520300),
        ];

        expect(areEqual(myDataBase.getGroups(), defaultGroups)).to.be.equal(true);
    });

    it("Se espera que la base de datos se cargue con las canciones por defecto", () => {

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

        expect(areEqual(myDataBase.getSongs(), defaultSongs)).to.be.equal(true);
    });


    it("Se espera que al cargar la base de datos esta tenga los albumes por defecto", () => {
        
        let defaultAlbums: Array<Album> = [
            new Album("Real Hasta La Muerte", "Anuel", 100, ["Sola", "China"], ["Reggeton"]),
            new Album("Odisea", "Ozuna", 2018, ["El farsante", "Dile que tu me quieres"], ["Reggeton", "Trap"]),
            new Album("True", "Avicii", 2013, ["Wake me Up", "The nights", "The days"], ["Electronica"]),
        ];

        expect(areEqual(myDataBase.getAlbums(), defaultAlbums)).to.be.equal(true);
    })


    it("Se actualizan correctamente las canciones al artista al añadir una canción a la base de datos", () => {
        let artists: Array<Artist> = myDataBase.getArtists();

        artists.forEach((artist: Artist) => {
            switch(artist.getName()) {
                case "Anuel": {
                    expect(artist.getSongs().length).to.be.equal(2);
                    break;
                }

                case "Maluma": {
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
        let artists: Array<Artist> = myDataBase.getArtists();
        artists.forEach((artist: Artist) => {
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
        let artists: Array<Artist> = myDataBase.getArtists();
        artists.forEach((artist: Artist) => {
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
        let artists: Array<Artist> = myDataBase.getArtists();
        artists.forEach((artist: Artist) => {
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
        let artists: Array<Artist> = myDataBase.getArtists();
        artists.forEach((artist: Artist) => {
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
 