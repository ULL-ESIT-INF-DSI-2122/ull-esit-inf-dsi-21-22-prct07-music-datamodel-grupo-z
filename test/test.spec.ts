import 'mocha'
import { expect } from 'chai'
import { Artist } from '../src/artist';
import { Song } from '../src/song'



describe("SONG TEST", () => {

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
    });
    
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
    
});