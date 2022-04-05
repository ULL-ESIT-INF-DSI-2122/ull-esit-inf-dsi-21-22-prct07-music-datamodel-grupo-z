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
   
});

