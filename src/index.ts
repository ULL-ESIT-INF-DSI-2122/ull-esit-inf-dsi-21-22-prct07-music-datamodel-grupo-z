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
          choices: ['Gestionar canciones', 'Gestionar artistas', 'Gestionar albums', 'Gestionar generos', 'Gestionar grupos', 'Volver atras'],
      },
    ];
  
    inquirer.prompt(questions).then((answers: any) => {
        switch(answers['election']) {
            case 'Gestionar canciones':
                console.log("Mi base de datos musical")
                console.log("Pulse enter para continuar...");
                let a = scanf('%s')
                promptUser();
                break;

            case 'Gestionar artistas':
                managementArtist();
                break;

            case 'Gestionar generos':
                console.log("Mi base de datos musical")
                managementGenres();
                break;

            case 'Gestionar grupos':
                console.log("Mi base de datos musical")
                let myGroups: Set<Group> = myDataBase.getGroups() ;
                myGroups.forEach((group: Group) => {
                    group.print();
                });
                console.log("Pulse enter para continuar...");
                let d = scanf('%s')
                promptUser();
                break;

            case 'Gestionar albums':
                console.log("Mi base de datos musical")
                let myAlbums: Set<Album> = myDataBase.getAlbums() ;
                myAlbums.forEach((album: Album) => {
                    album.print();
                });
                console.log("Pulse enter para continuar...");
                let e = scanf('%s')
                promptUser();
                break;

            case 'Volver atras': {
                promptUser();
                break;
            }
        }
    });
}



export function managementGenres() {
    console.clear();
    const questions = [
        {
            type: 'list',
            name: 'election',
            message: 'Gestión de géneros',
            choices: ['Ver géneros ordenados alfabeticamente', 'Ver géneros ordenados inversamente', 'Añadir género', 'Volver atrás'],
        },
      ];
    
        inquirer.prompt(questions).then((answers: any) => {
            console.clear();
            switch(answers['election']) {
                case 'Ver géneros ordenados alfabeticamente': {
                    let genres: Genre[] = myDataBase.genreSort(true);
                    genres.map((genre) => {
                        genre.print()
                    });
                    console.log("Pulse enter para continuar...");
                    let e = scanf('%s');
                    managementGenres();
                    break;
                }

                case 'Ver géneros ordenados inversamente': {
                    let genres: Genre[] = myDataBase.genreSort(false);
                    genres.map((genre) => {
                        genre.print()
                    });
                    console.log("Pulse enter para continuar...");
                    let e = scanf('%s');
                    managementGenres();
                    break;
                }

                case 'Añadir género': {
                    console.log("Inserte el nombre del nuevo género: ");
                    let name: string = scanf('%S');
                    let newGenre: Genre = new Genre(name);
                    myDataBase.addGenre(newGenre);
                    console.log('Género añadido correctamente :)');
                    console.log("Pulse enter para continuar...");
                    let q = scanf('%s');
                    managementGenres();
                    break;
                }

                case 'Volver atrás': {
                    managementDB();
                    break;
                }
            }
        });
}


export function managementArtist() {
    console.clear();
    const questions = [
        {
            type: 'list',
            name: 'election',
            message: 'Gestión de géneros',
            choices: ['Ver artistas ordenados alfabeticamente', 'Ver artistas ordenados inversamente', 
            'Ver artistas por popularidad (oyentes creciente)', 'Ver artistas por popularidad (oyentes decreciente)', 'Añadir artista', 'Volver atrás'],
        },
      ];
    
        inquirer.prompt(questions).then((answers: any) => {
            console.clear();
            switch(answers['election']) {
                case 'Ver artistas ordenados alfabeticamente': {
                    let artists: Artist[] = myDataBase.artistSort(true);
                    artists.map((artist) => {
                        artist.print()
                    });
                    console.log("Pulse enter para continuar...");
                    let e = scanf('%s');
                    managementArtist();
                    break;
                }

                case 'Ver artistas ordenados inversamente': {
                    let artists: Artist[] = myDataBase.artistSort(false);
                    artists.map((artist) => {
                        artist.print()
                    });
                    console.log("Pulse enter para continuar...");
                    let e = scanf('%s');
                    managementArtist();
                    break;
                }

                case 'Añadir artista': {
                    console.log("Inserte el nombre del nuevo artista: ");
                    let name: string = scanf('%S');
                    let newArtist: Artist = new Artist(name);
                    myDataBase.addArtist(newArtist);
                    console.log('Artista añadido correctamente :)');
                    console.log("Pulse enter para continuar...");
                    let q = scanf('%s');
                    managementArtist();
                    break;
                }
                
                case 'Ver artistas por popularidad (oyentes creciente)': {
                    //sortArtist(2)
                    managementArtist();
                    break;
                    break;
                }

                case 'Ver artistas por popularidad (oyentes decreciente)': {
                    //sortArtist(3)
                    managementArtist();
                    break;
                }

                case 'Volver atrás': {
                    managementDB();
                    break;
                }
            }
        });
}