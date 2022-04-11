import 'mocha'
import { expect } from 'chai'
import { Artist } from '../src/artist';
import { Song } from '../src/song'
import { Genre } from '../src/genre';
import { Group } from '../src/group';
import { Album } from '../src/album';
import { areEqual } from '../src/compareSet';

describe("GROUP TEST", () => {

    let WisinYYandel: Group = new Group("Wisin & Yandel", 2001, ["Wisin", "Yandel"], 2545);
    let Estopa: Group = new Group("Estopa", 2004, ["DavidMuñoz", "JoseMuñoz"], 745);

    it ("Se espera que se pueda obtener el nombre de un grupo con el método getName()", () => {
        expect(WisinYYandel.getName()).to.be.equal("Wisin & Yandel");
        expect(Estopa.getName()).to.be.equal("Estopa");
    });

    it ("Se espera que se pueda obtener los artistas del grupo con el método getArtists()", () => {
        expect(areEqual(WisinYYandel.getArtist(), ["Wisin", "Yandel"])).to.be.equal(true);
        expect(areEqual(Estopa.getArtist(), ["DavidMuñoz", "JoseMuñoz"])).to.be.equal(true);
    });

    it ("Se espera que al crear el grupo no tengan ninguna canción asociada", () => {
        expect(areEqual(WisinYYandel.getSongs(), [])).to.be.equal(true);
        expect(areEqual(Estopa.getSongs(), [])).to.be.equal(true);
    });

    it ("Se espera que al crear el grupo no tengan ningun género asociado", () => {
        expect(areEqual(WisinYYandel.getGenres(), [])).to.be.equal(true);
        expect(areEqual(Estopa.getGenres(), [])).to.be.equal(true);
    });

    it ("Se espera que se pueda acceder a los oyentes del grupo con el método getListeners()", () => {
        expect(WisinYYandel.getListeners()).to.be.equal(2545);
        expect(Estopa.getListeners()).to.be.equal(745);
    });

    it ("Se espera que al crear el grupo no tengan ningun album asociado", () => {
        expect(areEqual(WisinYYandel.getAlbums(), [])).to.be.equal(true);
        expect(areEqual(Estopa.getAlbums(), [])).to.be.equal(true);
    });

    it("Se espera que se pueda obtener el año de un grupo con el método getYear", () => {
        expect(WisinYYandel.getYear()).to.be.equal(2001);
        expect(Estopa.getYear()).to.be.equal(2004);
    })
});