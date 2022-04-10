import 'mocha'
import { expect } from 'chai'
import { Artist } from '../src/artist';
import { Song } from '../src/song'
import { Genre } from '../src/genre';
import { Group } from '../src/group';
import { Album } from '../src/album';
import { areEqual } from '../src/compareSet';

describe("GROUP TEST", () => {
    let Wisin: Artist = new Artist("Wisin");
    let Yandel: Artist = new Artist("Yandel");

    let DavidMuñoz: Artist = new Artist("David Muñoz");
    let JoseMuñoz: Artist = new Artist("Jose Muñoz");

    let WisinYYandel: Group = new Group("Wisin & Yandel", 2001, new Array<Artist>(Wisin, Yandel), 2545);
    let Estopa: Group = new Group("Estopa", 2004, new Array<Artist>(DavidMuñoz, JoseMuñoz), 745);

    it ("Se espera que se pueda obtener el nombre de un grupo con el método getName()", () => {
        expect(WisinYYandel.getName()).to.be.equal("Wisin & Yandel");
        expect(Estopa.getName()).to.be.equal("Estopa");
    });

    it ("Se espera que se pueda obtener los artistas del grupo con el método getArtists()", () => {
        expect(areEqual(WisinYYandel.getArtist(), new Array<Artist>(Wisin, Yandel))).to.be.equal(true);
        expect(areEqual(Estopa.getArtist(), new Array<Artist>(DavidMuñoz, JoseMuñoz))).to.be.equal(true);
    });

    it ("Se espera que al crear el grupo no tengan ninguna canción asociada", () => {
        expect(areEqual(WisinYYandel.getSongs(), new Array<Song>())).to.be.equal(true);
        expect(areEqual(Estopa.getSongs(), new Array<Song>())).to.be.equal(true);
    });

    it ("Se espera que al crear el grupo no tengan ningun género asociado", () => {
        expect(areEqual(WisinYYandel.getGenres(), new Array<Genre>())).to.be.equal(true);
        expect(areEqual(Estopa.getGenres(), new Array<Genre>())).to.be.equal(true);
    });

    it ("Se espera que se pueda acceder a los oyentes del grupo con el método getListeners()", () => {
        expect(WisinYYandel.getListeners()).to.be.equal(2545);
        expect(Estopa.getListeners()).to.be.equal(745);
    });

    it ("Se espera que al crear el grupo no tengan ningun album asociado", () => {
        expect(areEqual(WisinYYandel.getAlbums(), new Array<Album>())).to.be.equal(true);
        expect(areEqual(Estopa.getAlbums(), new Array<Album>())).to.be.equal(true);
    });

    it("Se espera que se pueda obtener el año de un grupo con el método getYear", () => {
        expect(WisinYYandel.getYear()).to.be.equal(2001);
        expect(Estopa.getYear()).to.be.equal(2004);
    })
});