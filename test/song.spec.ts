import 'mocha'
import { expect } from 'chai'
import { Artist } from '../src/artist';
import { Song } from '../src/song'
import { Genre } from '../src/genre';


describe("SONG TEST", () =>  {
    let Reggeton: Genre = new Genre("Reggeton");
    let Electronic: Genre = new Genre("Electronica");

    let Anuel: Artist = new Artist("Anuel");
    let DavidGuetta: Artist = new Artist("David Guetta");

    let China: Song = new Song("China", Anuel, Reggeton, true, 2000, 150);
    let PlayHard: Song = new Song("Play Hard", DavidGuetta, Electronic, true, 20200, 110);
    let Sola: Song = new Song("Sola", Anuel, Reggeton, false, 1400, 99);

    it("Se espera que al crear una canción se pueda acceder a su nombre con el método getName()", () => {
        expect(China.getName()).to.be.equal("China");
        expect(PlayHard.getName()).to.be.equal("Play Hard");
        expect(Sola.getName()).to.be.equal("Sola");
    });

    it("Se espera que al crear una canción se pueda acceder a su artista con el método getCreator()", () => {
        expect(China.getCreator()).to.be.equal(Anuel);
        expect(PlayHard.getCreator()).to.be.equal(DavidGuetta);
        expect(Sola.getCreator()).to.be.equal(Anuel);
    });

    it("Se espera que al crear una canción se pueda acceder a su géenro con el método getGenre()", () => {
        expect(China.getGenre()).to.be.equal(Reggeton);
        expect(PlayHard.getGenre()).to.be.equal(Electronic);
        expect(Sola.getGenre()).to.be.equal(Reggeton);
    });

    it("Se espera que al crear una canción se pueda acceder a su artista con el método getIsSingle()", () => {
        expect(China.getIsSingle()).to.be.equal(true);
        expect(PlayHard.getIsSingle()).to.be.equal(true);
        expect(Sola.getIsSingle()).to.be.equal(false);
    });

    it("Se espera que al crear una canción se pueda acceder a las veces que ha sido escuchada con el método getTimesListened()", () => {
        expect(China.getTimesListened()).to.be.equal(2000);
        expect(PlayHard.getTimesListened()).to.be.equal(20200);
        expect(Sola.getTimesListened()).to.be.equal(1400);
    });

    it("Se espera que al crear una canción se pueda acceder a su duración en segundos con el método getSeconds()", () => {
        expect(China.getSeconds()).to.be.equal(150);
        expect(PlayHard.getSeconds()).to.be.equal(110);
        expect(Sola.getSeconds()).to.be.equal(99);
    });

    it("Se espera que al crear una canción se pueda acceder a su duración en minutos con el método getMinutes()", () => {
        expect(China.getMinutes()).to.be.equal(2.5);
        expect(PlayHard.getMinutes()).to.be.equal(1.8333333333333333);
        expect(Sola.getMinutes()).to.be.equal(1.65);
    });

});