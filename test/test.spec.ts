import 'mocha'
import { expect } from 'chai'
import { Artist } from '../src/artist';
import { Song } from '../src/song'
import { Genre } from '../src/genre';
import { MusicDataBase } from '../src/musicDataBase'
import { Group } from '../src/group';
import { Album } from '../src/album';
import {compareSets} from '../src/compareSet';

describe("SONG TEST", () => {

    let myDataBase: MusicDataBase = new MusicDataBase;

    it("Se espera que al crear una base de datos, no tenga artistas", () => {
        let emptySet: Set<Artist>;
        expect(myDataBase.getArtists()).to.be.eql(emptySet);
    });

    it("Se espera que al crear una base de datos, no tenga canciones", () => {
        let emptySet: Set<Song>;
        expect(myDataBase.getSongs()).to.be.eql(emptySet);
    });

    it("Se espera que al crear una base de datos, no tenga grupos", () => {
        let emptySet: Set<Group>;
        expect(myDataBase.getGroups()).to.be.eql(emptySet);
    });

    it("Se espera que al crear una base de datos, no tenga albumes", () => {
        let emptySet: Set<Album>;
        expect(myDataBase.getAlbum()).to.be.eql(emptySet);
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
        
        let nameDefaultGenres: string[] = [];
        let myDataBaseNameGenres: string[] = [];

        defaultGenres.forEach((item: Genre) => {
            nameDefaultGenres.push(item.getName());
        });

        myDataBase.getGenres().forEach((item: Genre) => {
            myDataBaseNameGenres.push(item.getName());
        });

        expect(nameDefaultGenres.sort()).to.be.eql(myDataBaseNameGenres.sort());
    });


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
        let emptySet: Set<Genre>;
        expect(Anuel.getGenres()).to.be.eql(emptySet);
        expect(Maluma.getGenres()).to.be.eql(emptySet);
        expect(BobMarley.getGenres()).to.be.eql(emptySet);
        expect(DavidGuetta.getGenres()).to.be.eql(emptySet);
    });

    it("Se espera que al crear un artista, no tenga canciones", () => {
        let emptySet: Set<Song>;
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
        let emptySet: Set<Group>
        expect(Anuel.getGroups()).to.be.eql(emptySet);
        expect(Maluma.getGroups()).to.be.eql(emptySet);
        expect(BobMarley.getGroups()).to.be.eql(emptySet);
        expect(DavidGuetta.getGroups()).to.be.eql(emptySet);
    });
    

    it("Se espera que al crear un artista, no tenga albumes", () => {
        let emptySet: Set<Album>;
        expect(Anuel.getAlbums()).to.be.eql(emptySet);
        expect(Maluma.getAlbums()).to.be.eql(emptySet);
        expect(BobMarley.getAlbums()).to.be.eql(emptySet);
        expect(DavidGuetta.getAlbums()).to.be.eql(emptySet);
    });
    
    myDataBase.addArtist(Anuel);
    myDataBase.addArtist(Maluma);
    myDataBase.addArtist(BobMarley);
    myDataBase.addArtist(DavidGuetta);   
    
    it("Se espera que se puedan añadir artistas a la base de datos", () => {
       let expectedArtist: Set<Artist> = new Set <Artist> ([Anuel, Maluma, BobMarley, DavidGuetta]);
        /*
        let nameExpectedArtist: string[] = [];
        let myDataBaseNameArtist: string[] = [];

        expectedArtist.forEach((item: Artist) => {
            nameExpectedArtist.push(item.getName());
        });

        myDataBase.getArtists().forEach((item: Artist) => {
            myDataBaseNameArtist.push(item.getName());
        });*/

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