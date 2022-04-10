import 'mocha'
import { expect } from 'chai'
import { Artist } from '../src/artist';
import { Song } from '../src/song'
import { Genre } from '../src/genre';
import { Album } from '../src/album';
import { areEqual } from '../src/compareSet';

describe("ALBUM TEST", () => {
    let Reggeton: Genre = new Genre("Reggeton");
    let Electronic: Genre = new Genre("Electronica");

    let MykeTowers: Artist = new Artist("Myke Towers");
    let Avicii: Artist = new Artist("Avicii");

    let Diosa: Song = new Song("Diosa", MykeTowers, Reggeton, false, 45845, 112);
    let MIB: Song = new Song("MIB", MykeTowers, Reggeton, false, 458, 96);

    let WakeMeUp: Song = new Song("Wake Me Up", Avicii, Electronic, false, 485285, 101);
    let HeyBrother: Song = new Song("Hey Brother", Avicii, Electronic, false, 15574, 155);

    let EasyMoney: Album = new Album("Easy Money", MykeTowers, 2020, new Array<Song>(Diosa, MIB));
    let True: Album = new Album("True", Avicii, 2013, new Array<Song>(WakeMeUp, HeyBrother));


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

    it("Se espera que se pueda acceder a los géneros del album con el método getGenres()", () => {
        expect(areEqual(EasyMoney.getGenres(), new Array<Genre>(Reggeton))).to.be.equal(true);
        expect(areEqual(True.getGenres(), new Array<Genre>(Electronic))).to.be.equal(true);
    });

    it ("Se espera que se pueda acceder a las canciones del album con el metodo getSongs()", () => {
        expect(areEqual(EasyMoney.getSongs(), new Array<Song>(MIB, Diosa))).to.be.equal(true);
        expect(areEqual(True.getSongs(), new Array<Song>(WakeMeUp, HeyBrother))).to.be.equal(true);
    });
});