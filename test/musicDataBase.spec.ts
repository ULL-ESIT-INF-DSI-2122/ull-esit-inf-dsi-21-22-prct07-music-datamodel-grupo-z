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
        expect(compareSets(myDataBase.getGroups(), emptySet)).to.be.equal(true)
    });

    it("Se espera que al crear una base de datos, no tenga albumes", () => {
        let emptySet: Set<Album> = new Set<Album>();
        expect(compareSets(myDataBase.getAlbums(), emptySet)).to.be.equal(true)
    });
/*
    it("Se espera que al crear una base de datos, tenga los géneros por defecto", () => {
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

        expect(compareSets(defaultGenres, myDataBase.getGenres())).to.be.eql(true);
    });*/
});


/*
describe("INCLUDE ARTIST IN DATA BASE  TEST", () => {

    let myDataBase: MusicDataBase = new MusicDataBase;

    let Anuel: Artist = new Artist("Anuel");
    let Maluma: Artist = new Artist("Maluma");
    let BobMarley: Artist = new Artist("Bob Marley");
    let DavidGuetta: Artist = new Artist("David Guetta");

    myDataBase.addArtist(Anuel);
    myDataBase.addArtist(Maluma);
    myDataBase.addArtist(BobMarley);
    myDataBase.addArtist(DavidGuetta);   

    it("Se espera que se puedan añadir artistas a la base de datos", () => {
        let expectedArtist: Set<Artist> = new Set <Artist> ([Anuel, Maluma, BobMarley, DavidGuetta]);
        expect(compareSets(expectedArtist, myDataBase.getArtists())).to.be.equal(true);
    });
});*/