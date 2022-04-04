import 'mocha'
import { expect } from 'chai'
import { Artist } from '../src/artist';
import { Song } from '../src/song'
import { Genre } from '../src/genre';
import { MusicDataBase } from '../src/musicDataBase'
import { Group } from '../src/group';
import { Album } from '../src/album';
import { compareSets } from '../src/compareSet';
/*
describe("DATABASE EMPTY TEST", () => {

    let myDataBase: MusicDataBase = new MusicDataBase;

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
        expect(compareSets(myDataBase.getAlbum(), emptySet)).to.be.equal(true)
    });

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
    });
});
*/

describe("ARTIST EMPTY TEST", () => {

    let Anuel: Artist = new Artist("Anuel");
    let Maluma: Artist = new Artist("Maluma");
    let BobMarley: Artist = new Artist("Bob Marley");
    let DavidGuetta: Artist = new Artist("David Guetta");


    it("Se espera que al crear un artista, se pueda obtener su nombre con el método getName()", () => {
        expect(Anuel.getName()).to.be.equal("Anuel");
        expect(Maluma.getName()).to.be.equal("Maluma");
        expect(BobMarley.getName()).to.be.equal("Bob Marley");
        expect(DavidGuetta.getName()).to.be.equal("David Guetta");
    });

    it("Se espera que al crear un artista, no tenga ningún género relacionado", () => {
        let emptySet: Set<Genre> = new Set<Genre> ();
        expect(Anuel.getGenres()).to.be.eql(emptySet);
        expect(Maluma.getGenres()).to.be.eql(emptySet);
        expect(BobMarley.getGenres()).to.be.eql(emptySet);
        expect(DavidGuetta.getGenres()).to.be.eql(emptySet);
    });

    it("Se espera que al crear un artista, no tenga canciones", () => {
        let emptySet: Set<Song> = new Set<Song> ();
        expect(Anuel.getSongs()).to.be.eql(emptySet);
        expect(Maluma.getSongs()).to.be.eql(emptySet);
        expect(BobMarley.getSongs()).to.be.eql(emptySet);
        expect(DavidGuetta.getSongs()).to.be.eql(emptySet);
    });

    it("Se espera que al crear un artista, sus oyentes sean cero", () => {
        expect(Anuel.getListeners()).to.be.equal(0);
        expect(Maluma.getListeners()).to.be.equal(0);
        expect(BobMarley.getListeners()).to.be.equal(0);
        expect(DavidGuetta.getListeners()).to.be.equal(0);
    });

    it("Se espera que al crear un artista, no pertenezca a ningún grupo", () => {
        let emptySet: Set<Group> = new Set<Group> ();
        expect(Anuel.getGroups()).to.be.eql(emptySet);
        expect(Maluma.getGroups()).to.be.eql(emptySet);
        expect(BobMarley.getGroups()).to.be.eql(emptySet);
        expect(DavidGuetta.getGroups()).to.be.eql(emptySet);
    });
    

    it("Se espera que al crear un artista, no tenga albumes", () => {
        let emptySet: Set<Album> = new Set<Album> ();
        expect(Anuel.getAlbums()).to.be.eql(emptySet);
        expect(Maluma.getAlbums()).to.be.eql(emptySet);
        expect(BobMarley.getAlbums()).to.be.eql(emptySet);
        expect(DavidGuetta.getAlbums()).to.be.eql(emptySet);
    });
   
});


describe("GENRE TEST", () => {
    let Reaggeton: Genre = new Genre("Reggeton");
    let Salsa: Genre = new Genre("Salsa");
    let Rap: Genre = new Genre("Rap");
    let Electronica:Genre = new Genre("Electronica");

    it("Se spera que al crear un género, se pueda obtener su nombre con el método getName()", () => {
        expect(Reaggeton.getName()).to.be.equal("Reggeton");
        expect(Salsa.getName()).to.be.equal("Salsa");
        expect(Rap.getName()).to.be.equal("Rap");
        expect(Electronica.getName()).to.be.equal("Electronica");
    });

    it("Se spera que al crear un género, no haya ningún artista o grupo vinculado", () => {
        let emptySet: Set<Artist | Group> = new Set<Artist | Group> ();

        expect(compareSets(Reaggeton.getComponents(), emptySet)).to.be.equal(true);
        expect(compareSets(Salsa.getComponents(), emptySet)).to.be.equal(true);
        expect(compareSets(Rap.getComponents(), emptySet)).to.be.equal(true);
        expect(compareSets(Electronica.getComponents(), emptySet)).to.be.equal(true);
    });

    it("Se spera que al crear un género, no haya ningún album vinculado", () => {
        let emptySet: Set<Album> = new Set<Album> ();

        expect(compareSets(Reaggeton.getAlbums(), emptySet)).to.be.equal(true);
        expect(compareSets(Salsa.getAlbums(), emptySet)).to.be.equal(true);
        expect(compareSets(Rap.getAlbums(), emptySet)).to.be.equal(true);
        expect(compareSets(Electronica.getAlbums(), emptySet)).to.be.equal(true);
    });

    it("Se spera que al crear un género, no haya ningúna canción vinculado", () => {
        let emptySet: Set<Song> = new Set<Song> ();

        expect(compareSets(Reaggeton.getSongs(), emptySet)).to.be.equal(true);
        expect(compareSets(Salsa.getSongs(), emptySet)).to.be.equal(true);
        expect(compareSets(Rap.getSongs(), emptySet)).to.be.equal(true);
        expect(compareSets(Electronica.getSongs(), emptySet)).to.be.equal(true);
    });
});


describe("SONG TEST", () =>  {
    let Reggeton: Genre = new Genre("Reggeton");
    let Electronic: Genre = new Genre("Electronica");

    let Anuel: Artist = new Artist("Anuel");
    let DavidGuetta: Artist = new Artist("David Guetta");

    let China: Song = new Song("China", Anuel, Reggeton, true, 2000, 150);
    let PlayHard: Song = new Song("Play Hard", DavidGuetta, Electronic, true, 20200, 110);
    let Sola: Song = new Song("Sola", Anuel, Reggeton, false, 1400, 99);

    it("Se espera que al crear una canción se pueda acceder a su nombre con el método getName()", () => {
        expect(China.getName()).to.be.equal("China");
        expect(PlayHard.getName()).to.be.equal("Play Hard");
        expect(Sola.getName()).to.be.equal("Sola");
    });

    it("Se espera que al crear una canción se pueda acceder a su artista con el método getCreator()", () => {
        expect(China.getCreator()).to.be.equal(Anuel);
        expect(PlayHard.getCreator()).to.be.equal(DavidGuetta);
        expect(Sola.getCreator()).to.be.equal(Anuel);
    });

    it("Se espera que al crear una canción se pueda acceder a su géenro con el método getGenre()", () => {
        expect(China.getGenre()).to.be.equal(Reggeton);
        expect(PlayHard.getGenre()).to.be.equal(Electronic);
        expect(Sola.getGenre()).to.be.equal(Reggeton);
    });

    it("Se espera que al crear una canción se pueda acceder a su artista con el método getIsSingle()", () => {
        expect(China.getIsSingle()).to.be.equal(true);
        expect(PlayHard.getIsSingle()).to.be.equal(true);
        expect(Sola.getIsSingle()).to.be.equal(false);
    });

    it("Se espera que al crear una canción se pueda acceder a las veces que ha sido escuchada con el método getTimesListened()", () => {
        expect(China.getTimesListened()).to.be.equal(2000);
        expect(PlayHard.getTimesListened()).to.be.equal(20200);
        expect(Sola.getTimesListened()).to.be.equal(1400);
    });

    it("Se espera que al crear una canción se pueda acceder a su duración en segundos con el método getSeconds()", () => {
        expect(China.getSeconds()).to.be.equal(150);
        expect(PlayHard.getSeconds()).to.be.equal(110);
        expect(Sola.getSeconds()).to.be.equal(99);
    });

    it("Se espera que al crear una canción se pueda acceder a su duración en minutos con el método getMinutes()", () => {
        expect(China.getMinutes()).to.be.equal(2.5);
        expect(PlayHard.getMinutes()).to.be.equal(1.8333333333333333);
        expect(Sola.getMinutes()).to.be.equal(1.65);
    });

});

describe("GROUP TEST", () => {
    let Wisin: Artist = new Artist("Wisin");
    let Yandel: Artist = new Artist("Yandel");

    let DavidMuñoz: Artist = new Artist("David Muñoz");
    let JoseMuñoz: Artist = new Artist("Jose Muñoz");

    let WisinYYandel: Group = new Group("Wisin & Yandel", 2001, new Set<Artist>([Wisin, Yandel]), 2545);
    let Estopa: Group = new Group("Estopa", 2004, new Set<Artist>([DavidMuñoz, JoseMuñoz]), 745);

    it ("Se espera que se pueda obtener el nombre de un grupo con el método getName()", () => {
        expect(WisinYYandel.getName()).to.be.equal("Wisin & Yandel");
        expect(Estopa.getName()).to.be.equal("Estopa");
    });

    it ("Se espera que se pueda obtener los artistas del grupo con el método getArtists()", () => {
        expect(compareSets(WisinYYandel.getArtist(), new Set<Artist>([Wisin, Yandel]))).to.be.equal(true);
        expect(compareSets(Estopa.getArtist(), new Set<Artist>([DavidMuñoz, JoseMuñoz]))).to.be.equal(true);
    });

    it ("Se espera que al crear el grupo no tengan ninguna canción asociada", () => {
        expect(compareSets(WisinYYandel.getSongs(), new Set<Song>())).to.be.equal(true);
        expect(compareSets(Estopa.getSongs(), new Set<Song>())).to.be.equal(true);
    });

    it ("Se espera que al crear el grupo no tengan ningun género asociado", () => {
        expect(compareSets(WisinYYandel.getGenres(), new Set<Genre>())).to.be.equal(true);
        expect(compareSets(Estopa.getGenres(), new Set<Genre>())).to.be.equal(true);
    });

    it ("Se espera que se pueda acceder a los oyentes del grupo con el método getListeners()", () => {
        expect(WisinYYandel.getListeners()).to.be.equal(2545);
        expect(Estopa.getListeners()).to.be.equal(745);
    });

    it ("Se espera que al crear el grupo no tengan ningun album asociado", () => {
        expect(compareSets(WisinYYandel.getAlbums(), new Set<Album>())).to.be.equal(true);
        expect(compareSets(Estopa.getAlbums(), new Set<Album>())).to.be.equal(true);
    });

    it("Se espera que se pueda obtener el año de un grupo con el método getYear", () => {
        expect(WisinYYandel.getYear()).to.be.equal(2001);
        expect(WisinYYandel.getYear()).to.be.equal(2004);
    })
});


describe("ALBUM TEST", () => {
    let Reggeton: Genre = new Genre("Reggeton");
    let Electronic: Genre = new Genre("Electronica");

    let MykeTowers: Artist = new Artist("Myke Towers");
    let Avicii: Artist = new Artist("Avicii");

    let Diosa: Song = new Song("Diosa", MykeTowers, Reggeton, false, 45845, 112);
    let MIB: Song = new Song("MIB", MykeTowers, Reggeton, false, 458, 96);

    let WakeMeUp: Song = new Song("Wake Me Up", Avicii, Electronic, false, 485285, 101);
    let HeyBrother: Song = new Song("Hey Brother", Avicii, Electronic, false, 15574, 155);

    let EasyMoney: Album = new Album("Easy Money", MykeTowers, 2020, new Set<Song>([Diosa, MIB]));
    let True: Album = new Album("True", Avicii, 2013, new Set<Song>([WakeMeUp, HeyBrother]));


    it("Se espera que se pueda acceder al nombre del album con el método getName()", () => {
        expect(EasyMoney.getName()).to.be.equal("Easy Money");
        expect(True.getName()).to.be.equal("True");
    });

    it("Se espera que se pueda acceder al año del album con el método getYear()", () => {
        expect(EasyMoney.getYear()).to.be.equal(2020);
        expect(True.getYear()).to.be.equal(2013);
    });

    it("Se espera que se pueda acceder al creador del album con el método getCreator()", () => {
        expect(EasyMoney.getCreator()).to.be.equal(MykeTowers);
        expect(True.getCreator()).to.be.equal(Avicii);
    });

    it("Se espera que se pueda acceder a los oyentes del album con el método getListeners()", () => {
        expect(compareSets(EasyMoney.getGenres(), new Set<Genre>([Reggeton]))).to.be.equal(true);
        expect(compareSets(EasyMoney.getGenres(), new Set<Genre>([Electronic]))).to.be.equal(true);
    });

    it ("Se espera que se pueda acceder a las canciones del album con el metodo getSongs()", () => {
        expect(compareSets(EasyMoney.getSongs(), new Set<Song>([MIB, Diosa]))).to.be.equal(true);
        expect(compareSets(True.getSongs(), new Set<Song>([WakeMeUp, HeyBrother]))).to.be.equal(true);
    });

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