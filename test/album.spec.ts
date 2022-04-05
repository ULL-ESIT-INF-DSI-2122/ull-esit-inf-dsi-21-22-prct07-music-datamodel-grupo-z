import 'mocha'
import { expect } from 'chai'
import { Artist } from '../src/artist';
import { Song } from '../src/song'
import { Genre } from '../src/genre';
import { Album } from '../src/album';
import { compareSets } from '../src/compareSet';

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