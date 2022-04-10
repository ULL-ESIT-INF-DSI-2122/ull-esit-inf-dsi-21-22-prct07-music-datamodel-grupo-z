import 'mocha'
import { expect } from 'chai'
import { Artist } from '../src/artist';
import { Song } from '../src/song'
import { Genre } from '../src/genre';
import { Group } from '../src/group';
import { Album } from '../src/album';
import { areEqual } from '../src/compareSet';

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
        let emptySet: Array<Artist | Group> = [];

        expect(areEqual(Reaggeton.getComponents(), emptySet)).to.be.equal(true);
        expect(areEqual(Salsa.getComponents(), emptySet)).to.be.equal(true);
        expect(areEqual(Rap.getComponents(), emptySet)).to.be.equal(true);
        expect(areEqual(Electronica.getComponents(), emptySet)).to.be.equal(true);
    });

    it("Se spera que al crear un género, no haya ningún album vinculado", () => {
        let emptySet: Array<Album>  = [];

        expect(areEqual(Reaggeton.getAlbums(), emptySet)).to.be.equal(true);
        expect(areEqual(Salsa.getAlbums(), emptySet)).to.be.equal(true);
        expect(areEqual(Rap.getAlbums(), emptySet)).to.be.equal(true);
        expect(areEqual(Electronica.getAlbums(), emptySet)).to.be.equal(true);
    });

    it("Se spera que al crear un género, no haya ningúna canción vinculado", () => {
        let emptySet: Array<Song> =  [];

        expect(areEqual(Reaggeton.getSongs(), emptySet)).to.be.equal(true);
        expect(areEqual(Salsa.getSongs(), emptySet)).to.be.equal(true);
        expect(areEqual(Rap.getSongs(), emptySet)).to.be.equal(true);
        expect(areEqual(Electronica.getSongs(), emptySet)).to.be.equal(true);
    });
});