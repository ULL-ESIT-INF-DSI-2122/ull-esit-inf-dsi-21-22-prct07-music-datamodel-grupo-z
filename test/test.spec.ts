import 'mocha'
import { expect } from 'chai'
import { Artist } from '../src/artist';
import { Song } from '../src/song'
import { Genre } from '../src/genre';
import { MusicDataBase } from '../src/musicDataBase'
import { Group } from '../src/group';
import { Album } from '../src/album';
import { compareSets } from '../src/compareSet';

describe("DATABASE EMPTY TEST", () => {

    let myDataBase: MusicDataBase = new MusicDataBase;

    it("Se espera que al crear una base de datos, no tenga artistas", () => {
        let emptySet: Set<Artist> = new Set<Artist> ();
        expect(compareSets(myDataBase.getArtists(), emptySet)).to.be.equal(true)
    });

    it("Se espera que al crear una base de datos, no tenga canciones", () => {
        let emptySet: Set<Song> = new Set<Song> ();
        expect(compareSets(myDataBase.getSongs(), emptySet)).to.be.equal(true)
    });

    it("Se espera que al crear una base de datos, no tenga grupos", () => {
        let emptySet: Set<Group> = new Set<Group> ();
        expect(compareSets(myDataBase.getGroups(), emptySet)).to.be.equal(true)
    });

    it("Se espera que al crear una base de datos, no tenga albumes", () => {
        let emptySet: Set<Album> = new Set<Album>();
        expect(compareSets(myDataBase.getAlbum(), emptySet)).to.be.equal(true)
    });

    it("Se espera que al crear una base de datos, tenga los géneros por defecto", () => {
        let defaultGenres: Set<Genre> = new Set<Genre>([
            new Genre("Reggaeton"),
            new Genre("Electronica"),
            new Genre("Bachata"),
            new Genre("Pop"),
            new Genre("Rock"),
            new Genre("Heavy Metal"),
            new Genre("Salsa"),
            new Genre("Rap"),
            new Genre("Reggae"),
            new Genre("Trap")      
        ]);

        expect(compareSets(defaultGenres, myDataBase.getGenres())).to.be.eql(true);
    });
});


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
//song test
//group test
//album test

describe("INCLUDE ARTIST IN DATA BASE  TEST", () => {

    let myDataBase: MusicDataBase = new MusicDataBase;

    let Anuel: Artist = new Artist("Anuel");
    let Maluma: Artist = new Artist("Maluma");
    let BobMarley: Artist = new Artist("Bob Marley");
    let DavidGuetta: Artist = new Artist("David Guetta");

    myDataBase.addArtist(Anuel);
    myDataBase.addArtist(Maluma);
    myDataBase.addArtist(BobMarley);
    myDataBase.addArtist(DavidGuetta);   
    
    it("Se espera que se puedan añadir artistas a la base de datos", () => {
        let expectedArtist: Set<Artist> = new Set <Artist> ([Anuel, Maluma, BobMarley, DavidGuetta]);
        expect(compareSets(expectedArtist, myDataBase.getArtists())).to.be.equal(true);
    });
});
/*  

    it("getName() test", () => {
        expect(songTest1.getName()).to.eq();
        expect(songTest2.getName()).to.eq();
        expect(songTest3.getName()).to.eq();
        expect(songTest4.getName()).to.eq();
        expect(songTest5.getName()).to.eq();
    });

    it("getArtist() test", () => {
        expect(songTest1.getArtists()).to.eq();
        expect(songTest2.getArtists()).to.eq();
        expect(songTest3.getArtists()).to.eq();
        expect(songTest4.getArtists()).to.eq();
        expect(songTest5.getArtists()).to.eq();
    });
    
    it("getGenre() test", () => {
        expect(songTest1.getGenre()).to.eq();
        expect(songTest2.getGenre()).to.eq();
        expect(songTest3.getGenre()).to.eq();
        expect(songTest4.getGenre()).to.eq();
        expect(songTest5.getGenre()).to.eq();
    });
    
    it("getIsSingle() test", () => {
        expect(songTest1.getIsSingle()).to.eq();
        expect(songTest2.getIsSingle()).to.eq();
        expect(songTest3.getIsSingle()).to.eq();
        expect(songTest4.getIsSingle()).to.eq();
        expect(songTest5.getIsSingle()).to.eq();
    });

    it("getTimesListened() test", () => {
        expect(songTest1.getTimesListened()).to.eq();
        expect(songTest2.getTimesListened()).to.eq();
        expect(songTest3.getTimesListened()).to.eq();
        expect(songTest4.getTimesListened()).to.eq();
        expect(songTest5.getTimesListened()).to.eq();
    });

    it("getSeconds() test", () => {
        expect(songTest1.getSeconds()).to.eq();
        expect(songTest2.getSeconds()).to.eq();
        expect(songTest3.getSeconds()).to.eq();
        expect(songTest4.getSeconds()).to.eq();
        expect(songTest5.getSeconds()).to.eq();
    });    
    
    it("getMinutes() test", () => {
        expect(songTest1.getMinutes()).to.eq();
        expect(songTest2.getMinutes()).to.eq();
        expect(songTest3.getMinutes()).to.eq();
        expect(songTest4.getMinutes()).to.eq();
        expect(songTest5.getMinutes()).to.eq();
    });

});


describe("PLAYLIST TEST", () => {

    it("getName() test", () => {
        expect(playlistTest1.getName()).to.eq();
        expect(playlistTest2.getName()).to.eq();
    });
    
    it("getGenres() test", () => {
        expect(playlistTest1.getGenres()).to.eq();
        expect(playlistTest2.getGenres()).to.eq();
    });
    
    it("getHours() test", () => {
        expect(playlistTest1.getHours()).to.eq();
        expect(playlistTest2.getHours()).to.eq();
    });    
    
    it("getMinutes() test", () => {
        expect(playlistTest1.getMinutes()).to.eq();
        expect(playlistTest2.getMinutes()).to.eq();
    });

    it("getSongs() test", () => {
        expect(playlistTest1.getSongs()).to.eq();
        expect(playlistTest2.getSongs()).to.eq();
    });describe("ARTIST TEST", () => {

        it("getName() test", () => {
            expect(artistTest1.getName()).to.eq();
            expect(artistTest2.getName()).to.eq();
            expect(artistTest3.getName()).to.eq();
            expect(artistTest4.getName()).to.eq();
    
});



describe("GROUP TEST", () => {

    it("getName() test", () => {
        expect(groupTest1.getName()).to.eq();
        expect(groupTest2.getName()).to.eq();
        expect(groupTest3.getName()).to.eq();
    })
    
    it("getGenres() test", () => {
        expect(groupTest1.getGenres()).to.eq();
        expect(groupTest2.getGenres()).to.eq();
        expect(groupTest3.getGenres()).to.eq();
    });
    
    it("getListeners() test", () => {
        expect(groupTest1.getListeners()).to.eq();
        expect(groupTest2.getListeners()).to.eq();
        expect(groupTest3.getListeners()).to.eq();
    });    
    
    it("getArtists() test", () => {
        expect(groupTest1.getArtists()).to.eq();
        expect(groupTest2.getArtists()).to.eq();
        expect(groupTest3.getArtists()).to.eq();
    });

    it("getYear() test", () => {
        expect(groupTest1.getYear()).to.eq();
        expect(groupTest2.getYear()).to.eq();
        expect(groupTest3.getYear()).to.eq();
    });

    it("getAlbums() test", () => {
        expect(groupTest1.getAlbums()).to.eq();
        expect(groupTest2.getAlbums()).to.eq();
        expect(groupTest3.getAlbums()).to.eq();
    });
    
});



describe("GENRE TEST", () => {

    it("getName() test", () => {
        expect(genreTest1.getName()).to.eq();
        expect(genreTest2.getName()).to.eq();
        expect(genreTest3.getName()).to.eq();
        expect(genreTest4.getName()).to.eq();
        expect(genreTest5.getName()).to.eq();
    });
    
    it("getComponents() test", () => {
        expect(genreTest1.getComponents()).to.eq();
        expect(genreTest2.getComponents()).to.eq();
        expect(genreTest3.getComponents()).to.eq();
        expect(genreTest4.getComponents()).to.eq();
        expect(genreTest5.getComponents()).to.eq();
    });
    
    it("getSongs() test", () => {
        expect(genreTest1.getSongs()).to.eq();
        expect(genreTest2.getSongs()).to.eq();
        expect(genreTest3.getSongs()).to.eq();
        expect(genreTest4.getSongs()).to.eq();
        expect(genreTest5.getSongs()).to.eq();
    });    

    it("getAlbums() test", () => {
        expect(genreTest1.getAlbums()).to.eq();
        expect(genreTest2.getAlbums()).to.eq();
        expect(genreTest3.getAlbums()).to.eq();
        expect(genreTest4.getAlbums()).to.eq();
        expect(genreTest5.getAlbums()).to.eq();
    });
    
});



describe("ARTIST TEST", () => {

    it("getName() test", () => {
        expect(artistTest1.getName()).to.eq();
        expect(artistTest2.getName()).to.eq();
        expect(artistTest3.getName()).to.eq();
        expect(artistTest4.getName()).to.eq();
        expect(artistTest5.getName()).to.eq();
    });

    it("getGenre() test", () => {
        expect(genreTest1.getGenres()).to.eq();
        expect(genreTest2.getGenres()).to.eq();
        expect(genreTest3.getGenres()).to.eq();
        expect(genreTest4.getGenres()).to.eq();
        expect(genreTest5.getGenres()).to.eq();
    });

    it("getListeners() test", () => {
        expect(genreTest1.getListeners()).to.eq();
        expect(genreTest2.getListeners()).to.eq();
        expect(genreTest3.getListeners()).to.eq();
        expect(genreTest4.getListeners()).to.eq();
        expect(genreTest5.getListeners()).to.eq();
    });

    it("getGroups() test", () => {
        expect(genreTest1.getGroups()).to.eq();
        expect(genreTest2.getGroups()).to.eq();
        expect(genreTest3.getGroups()).to.eq();
        expect(genreTest4.getGroups()).to.eq();
        expect(genreTest5.getGroups()).to.eq();
    });

    it("getAlbums() test", () => {
        expect(genreTest1.getAlbums()).to.eq();
        expect(genreTest2.getAlbums()).to.eq();
        expect(genreTest3.getAlbums()).to.eq();
        expect(genreTest4.getAlbums()).to.eq();
        expect(genreTest5.getAlbums()).to.eq();
    });

    it("getSongs() test", () => {
        expect(genreTest1.getSongs()).to.eq();
        expect(genreTest2.getSongs()).to.eq();
        expect(genreTest3.getSongs()).to.eq();
        expect(genreTest4.getSongs()).to.eq();
        expect(genreTest5.getSongs()).to.eq();
    });
    
});



describe("ALBUM TEST", () => {

    it("getName() test", () => {
        expect(albumTest1.getName()).to.eq();
        expect(albumTest2.getName()).to.eq();
        expect(albumTest3.getName()).to.eq();
    });

    it("getCreator() test", () => {
        expect(albumTest1.getCreator()).to.eq();
        expect(albumTest2.getCreator()).to.eq();
        expect(albumTest3.getCreator()).to.eq();
    });

    it("getYear() test", () => {
        expect(albumTest1.getYear()).to.eq();
        expect(albumTest2.getYear()).to.eq();
        expect(albumTest3.getYear()).to.eq();
    });

    it("getGenres() test", () => {
        expect(albumTest1.getGenres()).to.eq();
        expect(albumTest2.getGenres()).to.eq();
        expect(albumTest3.getGenres()).to.eq();
    });

    it("getSongs() test", () => {
        expect(albumTest1.getSongs()).to.eq();
        expect(albumTest2.getSongs()).to.eq();
        expect(albumTest3.getSongs()).to.eq();
    });
    
});*/