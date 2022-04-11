import 'mocha'
import { expect } from 'chai'
import { Artist } from '../src/artist';
import { Song } from '../src/song'
import { Genre } from '../src/genre';
import { Album } from '../src/album';
import { areEqual } from '../src/compareSet';

describe("ALBUM TEST", () => {

    let EasyMoney: Album = new Album("Easy Money", "MykeTowers", 2020, ["Diosa", "MIB"], ["Regageton"]);
    let True: Album = new Album("True", "Avicii", 2013, ["WakeMeUp", "HeyBrother"], ["Electronic"]);


    it("Se espera que se pueda acceder al nombre del album con el método getName()", () => {
        expect(EasyMoney.getName()).to.be.equal("Easy Money");
        expect(True.getName()).to.be.equal("True");
    });

    it("Se espera que se pueda acceder al año del album con el método getYear()", () => {
        expect(EasyMoney.getYear()).to.be.equal(2020);
        expect(True.getYear()).to.be.equal(2013);
    });

    it("Se espera que se pueda acceder al creador del album con el método getCreator()", () => {
        expect(EasyMoney.getCreator()).to.be.equal("MykeTowers");
        expect(True.getCreator()).to.be.equal("Avicii");
    });

    it("Se espera que se pueda acceder a los géneros del album con el método getGenres()", () => {
        expect(areEqual(EasyMoney.getGenres(), ["Reggeton"])).to.be.equal(true);
        expect(areEqual(True.getGenres(), ["Electronic"])).to.be.equal(true);
    });

    it ("Se espera que se pueda acceder a las canciones del album con el metodo getSongs()", () => {
        expect(areEqual(EasyMoney.getSongs(), ["MIB", "Diosa"])).to.be.equal(true);
        expect(areEqual(True.getSongs(), ["WakeMeUp", "HeyBrother"])).to.be.equal(true);
    });
});