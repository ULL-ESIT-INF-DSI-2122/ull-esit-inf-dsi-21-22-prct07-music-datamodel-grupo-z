"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const artist_1 = require("../src/artist");
const song_1 = require("../src/song");
const genre_1 = require("../src/genre");
describe("SONG TEST", () => {
    let Reggeton = new genre_1.Genre("Reggeton");
    let Electronic = new genre_1.Genre("Electronica");
    let Anuel = new artist_1.Artist("Anuel");
    let DavidGuetta = new artist_1.Artist("David Guetta");
    let China = new song_1.Song("China", Anuel, Reggeton, true, 2000, 150);
    let PlayHard = new song_1.Song("Play Hard", DavidGuetta, Electronic, true, 20200, 110);
    let Sola = new song_1.Song("Sola", Anuel, Reggeton, false, 1400, 99);
    it("Se espera que al crear una canción se pueda acceder a su nombre con el método getName()", () => {
        (0, chai_1.expect)(China.getName()).to.be.equal("China");
        (0, chai_1.expect)(PlayHard.getName()).to.be.equal("Play Hard");
        (0, chai_1.expect)(Sola.getName()).to.be.equal("Sola");
    });
    it("Se espera que al crear una canción se pueda acceder a su artista con el método getCreator()", () => {
        (0, chai_1.expect)(China.getCreator()).to.be.equal(Anuel);
        (0, chai_1.expect)(PlayHard.getCreator()).to.be.equal(DavidGuetta);
        (0, chai_1.expect)(Sola.getCreator()).to.be.equal(Anuel);
    });
    it("Se espera que al crear una canción se pueda acceder a su géenro con el método getGenre()", () => {
        (0, chai_1.expect)(China.getGenre()).to.be.equal(Reggeton);
        (0, chai_1.expect)(PlayHard.getGenre()).to.be.equal(Electronic);
        (0, chai_1.expect)(Sola.getGenre()).to.be.equal(Reggeton);
    });
    it("Se espera que al crear una canción se pueda acceder a su artista con el método getIsSingle()", () => {
        (0, chai_1.expect)(China.getIsSingle()).to.be.equal(true);
        (0, chai_1.expect)(PlayHard.getIsSingle()).to.be.equal(true);
        (0, chai_1.expect)(Sola.getIsSingle()).to.be.equal(false);
    });
    it("Se espera que al crear una canción se pueda acceder a las veces que ha sido escuchada con el método getTimesListened()", () => {
        (0, chai_1.expect)(China.getTimesListened()).to.be.equal(2000);
        (0, chai_1.expect)(PlayHard.getTimesListened()).to.be.equal(20200);
        (0, chai_1.expect)(Sola.getTimesListened()).to.be.equal(1400);
    });
    it("Se espera que al crear una canción se pueda acceder a su duración en segundos con el método getSeconds()", () => {
        (0, chai_1.expect)(China.getSeconds()).to.be.equal(150);
        (0, chai_1.expect)(PlayHard.getSeconds()).to.be.equal(110);
        (0, chai_1.expect)(Sola.getSeconds()).to.be.equal(99);
    });
    it("Se espera que al crear una canción se pueda acceder a su duración en minutos con el método getMinutes()", () => {
        (0, chai_1.expect)(China.getMinutes()).to.be.equal(2.5);
        (0, chai_1.expect)(PlayHard.getMinutes()).to.be.equal(1.8333333333333333);
        (0, chai_1.expect)(Sola.getMinutes()).to.be.equal(1.65);
    });
});
