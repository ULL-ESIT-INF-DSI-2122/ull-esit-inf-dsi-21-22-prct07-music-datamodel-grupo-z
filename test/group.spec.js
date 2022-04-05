"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const artist_1 = require("../src/artist");
const group_1 = require("../src/group");
const compareSet_1 = require("../src/compareSet");
describe("GROUP TEST", () => {
    let Wisin = new artist_1.Artist("Wisin");
    let Yandel = new artist_1.Artist("Yandel");
    let DavidMuñoz = new artist_1.Artist("David Muñoz");
    let JoseMuñoz = new artist_1.Artist("Jose Muñoz");
    let WisinYYandel = new group_1.Group("Wisin & Yandel", 2001, new Set([Wisin, Yandel]), 2545);
    let Estopa = new group_1.Group("Estopa", 2004, new Set([DavidMuñoz, JoseMuñoz]), 745);
    it("Se espera que se pueda obtener el nombre de un grupo con el método getName()", () => {
        (0, chai_1.expect)(WisinYYandel.getName()).to.be.equal("Wisin & Yandel");
        (0, chai_1.expect)(Estopa.getName()).to.be.equal("Estopa");
    });
    it("Se espera que se pueda obtener los artistas del grupo con el método getArtists()", () => {
        (0, chai_1.expect)((0, compareSet_1.compareSets)(WisinYYandel.getArtist(), new Set([Wisin, Yandel]))).to.be.equal(true);
        (0, chai_1.expect)((0, compareSet_1.compareSets)(Estopa.getArtist(), new Set([DavidMuñoz, JoseMuñoz]))).to.be.equal(true);
    });
    it("Se espera que al crear el grupo no tengan ninguna canción asociada", () => {
        (0, chai_1.expect)((0, compareSet_1.compareSets)(WisinYYandel.getSongs(), new Set())).to.be.equal(true);
        (0, chai_1.expect)((0, compareSet_1.compareSets)(Estopa.getSongs(), new Set())).to.be.equal(true);
    });
    it("Se espera que al crear el grupo no tengan ningun género asociado", () => {
        (0, chai_1.expect)((0, compareSet_1.compareSets)(WisinYYandel.getGenres(), new Set())).to.be.equal(true);
        (0, chai_1.expect)((0, compareSet_1.compareSets)(Estopa.getGenres(), new Set())).to.be.equal(true);
    });
    it("Se espera que se pueda acceder a los oyentes del grupo con el método getListeners()", () => {
        (0, chai_1.expect)(WisinYYandel.getListeners()).to.be.equal(2545);
        (0, chai_1.expect)(Estopa.getListeners()).to.be.equal(745);
    });
    it("Se espera que al crear el grupo no tengan ningun album asociado", () => {
        (0, chai_1.expect)((0, compareSet_1.compareSets)(WisinYYandel.getAlbums(), new Set())).to.be.equal(true);
        (0, chai_1.expect)((0, compareSet_1.compareSets)(Estopa.getAlbums(), new Set())).to.be.equal(true);
    });
    it("Se espera que se pueda obtener el año de un grupo con el método getYear", () => {
        (0, chai_1.expect)(WisinYYandel.getYear()).to.be.equal(2001);
        (0, chai_1.expect)(Estopa.getYear()).to.be.equal(2004);
    });
});
