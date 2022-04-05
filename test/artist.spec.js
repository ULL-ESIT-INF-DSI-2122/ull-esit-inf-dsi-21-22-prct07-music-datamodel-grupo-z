"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const artist_1 = require("../src/artist");
describe("ARTIST EMPTY TEST", () => {
    let Anuel = new artist_1.Artist("Anuel");
    let Maluma = new artist_1.Artist("Maluma");
    let BobMarley = new artist_1.Artist("Bob Marley");
    let DavidGuetta = new artist_1.Artist("David Guetta");
    it("Se espera que al crear un artista, se pueda obtener su nombre con el método getName()", () => {
        (0, chai_1.expect)(Anuel.getName()).to.be.equal("Anuel");
        (0, chai_1.expect)(Maluma.getName()).to.be.equal("Maluma");
        (0, chai_1.expect)(BobMarley.getName()).to.be.equal("Bob Marley");
        (0, chai_1.expect)(DavidGuetta.getName()).to.be.equal("David Guetta");
    });
    it("Se espera que al crear un artista, no tenga ningún género relacionado", () => {
        let emptySet = new Set();
        (0, chai_1.expect)(Anuel.getGenres()).to.be.eql(emptySet);
        (0, chai_1.expect)(Maluma.getGenres()).to.be.eql(emptySet);
        (0, chai_1.expect)(BobMarley.getGenres()).to.be.eql(emptySet);
        (0, chai_1.expect)(DavidGuetta.getGenres()).to.be.eql(emptySet);
    });
    it("Se espera que al crear un artista, no tenga canciones", () => {
        let emptySet = new Set();
        (0, chai_1.expect)(Anuel.getSongs()).to.be.eql(emptySet);
        (0, chai_1.expect)(Maluma.getSongs()).to.be.eql(emptySet);
        (0, chai_1.expect)(BobMarley.getSongs()).to.be.eql(emptySet);
        (0, chai_1.expect)(DavidGuetta.getSongs()).to.be.eql(emptySet);
    });
    it("Se espera que al crear un artista, sus oyentes sean cero", () => {
        (0, chai_1.expect)(Anuel.getListeners()).to.be.equal(0);
        (0, chai_1.expect)(Maluma.getListeners()).to.be.equal(0);
        (0, chai_1.expect)(BobMarley.getListeners()).to.be.equal(0);
        (0, chai_1.expect)(DavidGuetta.getListeners()).to.be.equal(0);
    });
    it("Se espera que al crear un artista, no pertenezca a ningún grupo", () => {
        let emptySet = new Set();
        (0, chai_1.expect)(Anuel.getGroups()).to.be.eql(emptySet);
        (0, chai_1.expect)(Maluma.getGroups()).to.be.eql(emptySet);
        (0, chai_1.expect)(BobMarley.getGroups()).to.be.eql(emptySet);
        (0, chai_1.expect)(DavidGuetta.getGroups()).to.be.eql(emptySet);
    });
    it("Se espera que al crear un artista, no tenga albumes", () => {
        let emptySet = new Set();
        (0, chai_1.expect)(Anuel.getAlbums()).to.be.eql(emptySet);
        (0, chai_1.expect)(Maluma.getAlbums()).to.be.eql(emptySet);
        (0, chai_1.expect)(BobMarley.getAlbums()).to.be.eql(emptySet);
        (0, chai_1.expect)(DavidGuetta.getAlbums()).to.be.eql(emptySet);
    });
});
