import 'mocha'
import { expect } from 'chai'
import { Artist } from '../src/artist';
import { Song } from '../src/song'
import { Genre } from '../src/genre';
import { Group } from '../src/group';
import { Album } from '../src/album';
import { compareSets } from '../src/compareSet';

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