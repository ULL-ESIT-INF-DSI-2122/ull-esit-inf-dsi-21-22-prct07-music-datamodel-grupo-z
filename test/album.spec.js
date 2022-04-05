"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const artist_1 = require("../src/artist");
const song_1 = require("../src/song");
const genre_1 = require("../src/genre");
const album_1 = require("../src/album");
const compareSet_1 = require("../src/compareSet");
describe("ALBUM TEST", () => {
    let Reggeton = new genre_1.Genre("Reggeton");
    let Electronic = new genre_1.Genre("Electronica");
    let MykeTowers = new artist_1.Artist("Myke Towers");
    let Avicii = new artist_1.Artist("Avicii");
    let Diosa = new song_1.Song("Diosa", MykeTowers, Reggeton, false, 45845, 112);
    let MIB = new song_1.Song("MIB", MykeTowers, Reggeton, false, 458, 96);
    let WakeMeUp = new song_1.Song("Wake Me Up", Avicii, Electronic, false, 485285, 101);
    let HeyBrother = new song_1.Song("Hey Brother", Avicii, Electronic, false, 15574, 155);
    let EasyMoney = new album_1.Album("Easy Money", MykeTowers, 2020, new Set([Diosa, MIB]));
    let True = new album_1.Album("True", Avicii, 2013, new Set([WakeMeUp, HeyBrother]));
    it("Se espera que se pueda acceder al nombre del album con el método getName()", () => {
        (0, chai_1.expect)(EasyMoney.getName()).to.be.equal("Easy Money");
        (0, chai_1.expect)(True.getName()).to.be.equal("True");
    });
    it("Se espera que se pueda acceder al año del album con el método getYear()", () => {
        (0, chai_1.expect)(EasyMoney.getYear()).to.be.equal(2020);
        (0, chai_1.expect)(True.getYear()).to.be.equal(2013);
    });
    it("Se espera que se pueda acceder al creador del album con el método getCreator()", () => {
        (0, chai_1.expect)(EasyMoney.getCreator()).to.be.equal(MykeTowers);
        (0, chai_1.expect)(True.getCreator()).to.be.equal(Avicii);
    });
    it("Se espera que se pueda acceder a los oyentes del album con el método getListeners()", () => {
        (0, chai_1.expect)((0, compareSet_1.compareSets)(EasyMoney.getGenres(), new Set([Reggeton]))).to.be.equal(true);
        (0, chai_1.expect)((0, compareSet_1.compareSets)(EasyMoney.getGenres(), new Set([Electronic]))).to.be.equal(true);
    });
    it("Se espera que se pueda acceder a las canciones del album con el metodo getSongs()", () => {
        (0, chai_1.expect)((0, compareSet_1.compareSets)(EasyMoney.getSongs(), new Set([MIB, Diosa]))).to.be.equal(true);
        (0, chai_1.expect)((0, compareSet_1.compareSets)(True.getSongs(), new Set([WakeMeUp, HeyBrother]))).to.be.equal(true);
    });
});
