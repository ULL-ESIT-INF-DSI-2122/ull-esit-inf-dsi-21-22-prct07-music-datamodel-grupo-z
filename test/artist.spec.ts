import 'mocha'
import { expect } from 'chai'
import { Artist } from '../src/artist';
import { Song } from '../src/song'
import { Genre } from '../src/genre';
import { Group } from '../src/group';
import { Album } from '../src/album';

describe("ARTIST EMPTY TEST", () => {

    let Anuel: Artist = new Artist("Anuel");
    let Maluma: Artist = new Artist("Maluma");
    let BobMarley: Artist = new Artist("Bob Marley");
    let DavidGuetta: Artist = new Artist("David Guetta");


    it("Se espera que al crear un artista, se pueda obtener su nombre con el método getName()", () => {
        expect(Anuel.getName()).to.be.equal("Anuel");
        expect(Maluma.getName()).to.be.equal("Maluma");
        expect(BobMarley.getName()).to.be.equal("Bob Marley");
        expect(DavidGuetta.getName()).to.be.equal("David Guetta");
    });

    it("Se espera que al crear un artista, no tenga ningún género relacionado", () => {
        let emptySet: Set<Genre> = new Set<Genre> ();
        expect(Anuel.getGenres()).to.be.eql(emptySet);
        expect(Maluma.getGenres()).to.be.eql(emptySet);
        expect(BobMarley.getGenres()).to.be.eql(emptySet);
        expect(DavidGuetta.getGenres()).to.be.eql(emptySet);
    });

    it("Se espera que al crear un artista, no tenga canciones", () => {
        let emptySet: Set<Song> = new Set<Song> ();
        expect(Anuel.getSongs()).to.be.eql(emptySet);
        expect(Maluma.getSongs()).to.be.eql(emptySet);
        expect(BobMarley.getSongs()).to.be.eql(emptySet);
        expect(DavidGuetta.getSongs()).to.be.eql(emptySet);
    });

    it("Se espera que al crear un artista, sus oyentes sean cero", () => {
        expect(Anuel.getListeners()).to.be.equal(0);
        expect(Maluma.getListeners()).to.be.equal(0);
        expect(BobMarley.getListeners()).to.be.equal(0);
        expect(DavidGuetta.getListeners()).to.be.equal(0);
    });

    it("Se espera que al crear un artista, no pertenezca a ningún grupo", () => {
        let emptySet: Set<Group> = new Set<Group> ();
        expect(Anuel.getGroups()).to.be.eql(emptySet);
        expect(Maluma.getGroups()).to.be.eql(emptySet);
        expect(BobMarley.getGroups()).to.be.eql(emptySet);
        expect(DavidGuetta.getGroups()).to.be.eql(emptySet);
    });
    

    it("Se espera que al crear un artista, no tenga albumes", () => {
        let emptySet: Set<Album> = new Set<Album> ();
        expect(Anuel.getAlbums()).to.be.eql(emptySet);
        expect(Maluma.getAlbums()).to.be.eql(emptySet);
        expect(BobMarley.getAlbums()).to.be.eql(emptySet);
        expect(DavidGuetta.getAlbums()).to.be.eql(emptySet);
    });
   
});