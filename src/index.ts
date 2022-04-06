import { Album } from "./album";
import { Artist } from "./artist";
import { Genre } from "./genre";
import { Group } from "./group";
import { MusicDataBase } from "./musicDataBase";
import { Song } from "./song";
const inquirer = require('inquirer');
const scanf = require('scanf');

let myDataBase: MusicDataBase = new MusicDataBase();
myDataBase.defaultData();

promptUser()

export function promptUser() {
    console.clear();
    console.log('Bienvenido a SPOTY-DSI');
    
    const questions = [
      {
          type: 'list',
          name: 'election',
          message: '¿Dónde desea acceder?',
          choices: ['Mi base de datos musical', 'Mis playlists', 'Salir'],
      },
    ];
  
    inquirer.prompt(questions).then((answers: any) => {
        switch(answers['election']) {
            case 'Mi base de datos musical':
                console.log("Mi base de datos musical")
                managementDB()
                break;

            case 'Mis playlists':
                console.log("Mis playlists")
                //managementPlaylists()
                break;

            case 'Salir':
                console.log("Adios... :(");
                break;

        }
    });
}

export function managementDB() {
    console.clear();
    console.log('Mi base de datos musical');
    
    const questions = [
      {
          type: 'list',
          name: 'election',
          message: 'Que desea hacer',
          choices: ['Ver canciones', 'Ver artistas', 'Ver albums', 'Ver generos', 'Ver grupos'],
      },
    ];
  
    inquirer.prompt(questions).then((answers: any) => {
        switch(answers['election']) {
            case 'Ver canciones':
                console.log("Mi base de datos musical")
                let mySongs: Set<Song> = myDataBase.getSongs() ;
                mySongs.forEach((song: Song) => {
                    song.print();
                });
                console.log("Pulse enter para continuar...");
                let a = scanf('%s')
                promptUser();
                break;

            case 'Ver artistas':
                console.log("Mi base de datos musical")
                let myArtists: Set<Artist> = myDataBase.getArtists() ;
                myArtists.forEach((artist: Artist) => {
                    artist.print();
                });
                console.log("Pulse enter para continuar...");
                let b = scanf('%s')
                promptUser();
                break;

            case 'Ver generos':
                console.log("Mi base de datos musical")
                let myGenres: Set<Genre> = myDataBase.getGenres() ;
                myGenres.forEach((genre: Genre) => {
                    genre.print();
                });
                console.log("Pulse enter para continuar...");
                let c = scanf('%s')
                promptUser();
                break;

            case 'Ver grupos':
                console.log("Mi base de datos musical")
                let myGroups: Set<Group> = myDataBase.getGroups() ;
                myGroups.forEach((group: Group) => {
                    group.print();
                });
                console.log("Pulse enter para continuar...");
                let d = scanf('%s')
                promptUser();
                break;

            case 'Ver albums':
                console.log("Mi base de datos musical")
                let myAlbums: Set<Album> = myDataBase.getAlbums() ;
                myAlbums.forEach((album: Album) => {
                    album.print();
                });
                console.log("Pulse enter para continuar...");
                let e = scanf('%s')
                promptUser();
                break;


        }
    });
}



