"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const genre_1 = require("../src/genre");
const compareSet_1 = require("../src/compareSet");
describe("GENRE TEST", () => {
    let Reaggeton = new genre_1.Genre("Reggeton");
    let Salsa = new genre_1.Genre("Salsa");
    let Rap = new genre_1.Genre("Rap");
    let Electronica = new genre_1.Genre("Electronica");
    it("Se spera que al crear un género, se pueda obtener su nombre con el método getName()", () => {
        (0, chai_1.expect)(Reaggeton.getName()).to.be.equal("Reggeton");
        (0, chai_1.expect)(Salsa.getName()).to.be.equal("Salsa");
        (0, chai_1.expect)(Rap.getName()).to.be.equal("Rap");
        (0, chai_1.expect)(Electronica.getName()).to.be.equal("Electronica");
    });
    it("Se spera que al crear un género, no haya ningún artista o grupo vinculado", () => {
        let emptySet = new Set();
        (0, chai_1.expect)((0, compareSet_1.compareSets)(Reaggeton.getComponents(), emptySet)).to.be.equal(true);
        (0, chai_1.expect)((0, compareSet_1.compareSets)(Salsa.getComponents(), emptySet)).to.be.equal(true);
        (0, chai_1.expect)((0, compareSet_1.compareSets)(Rap.getComponents(), emptySet)).to.be.equal(true);
        (0, chai_1.expect)((0, compareSet_1.compareSets)(Electronica.getComponents(), emptySet)).to.be.equal(true);
    });
    it("Se spera que al crear un género, no haya ningún album vinculado", () => {
        let emptySet = new Set();
        (0, chai_1.expect)((0, compareSet_1.compareSets)(Reaggeton.getAlbums(), emptySet)).to.be.equal(true);
        (0, chai_1.expect)((0, compareSet_1.compareSets)(Salsa.getAlbums(), emptySet)).to.be.equal(true);
        (0, chai_1.expect)((0, compareSet_1.compareSets)(Rap.getAlbums(), emptySet)).to.be.equal(true);
        (0, chai_1.expect)((0, compareSet_1.compareSets)(Electronica.getAlbums(), emptySet)).to.be.equal(true);
    });
    it("Se spera que al crear un género, no haya ningúna canción vinculado", () => {
        let emptySet = new Set();
        (0, chai_1.expect)((0, compareSet_1.compareSets)(Reaggeton.getSongs(), emptySet)).to.be.equal(true);
        (0, chai_1.expect)((0, compareSet_1.compareSets)(Salsa.getSongs(), emptySet)).to.be.equal(true);
        (0, chai_1.expect)((0, compareSet_1.compareSets)(Rap.getSongs(), emptySet)).to.be.equal(true);
        (0, chai_1.expect)((0, compareSet_1.compareSets)(Electronica.getSongs(), emptySet)).to.be.equal(true);
    });
});
