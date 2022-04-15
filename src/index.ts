import { Album } from "./album";
import { Artist } from "./artist";
import { Genre } from "./genre";
import { Group } from "./group";
import { MusicDataBase } from "./musicDataBase";
import { Playlist } from "./playlist";
import { Song } from "./song";

const inquirer = require('inquirer');
const scanf = require('scanf');

let myDataBase: MusicDataBase = new MusicDataBase();

/**
 * Menú principal del programa
 */
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
                managementDB();
                break;

            case 'Mis playlists':
                console.log("Mis playlists")
                managementPlaylists();
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
                managementSongs()
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
                managementGroups();
                break;

            case 'Gestionar albums':
                console.log("Mi base de datos musical")
                managementAlbum();
                break;

            case 'Volver atras': {
                promptUser();
                break;
            }
        }
    });
}

/**
 * Función para e
 */
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
                        genre.print();
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
                    let artists: Artist[] = myDataBase.artistSort(0);
                    artists.map((artist) => {
                        artist.print()
                    });
                    console.log("Pulse enter para continuar...");
                    let e = scanf('%s');
                    managementArtist();
                    break;
                }

                case 'Ver artistas ordenados inversamente': {
                    let artists: Artist[] = myDataBase.artistSort(1);
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
                    let artists: Artist[] = myDataBase.artistSort(2);
                    artists.map((artist) => {
                        artist.print()
                    });
                    console.log("Pulse enter para continuar...");
                    let e = scanf('%s');
                    managementArtist();
                    break;
                }

                case 'Ver artistas por popularidad (oyentes decreciente)': {
                    let artists: Artist[] = myDataBase.artistSort(3);
                    artists.map((artist) => {
                        artist.print()
                    });
                    console.log("Pulse enter para continuar...");
                    let e = scanf('%s');
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

export function managementSongs() {
    console.clear();
    const questions = [
        {
            type: 'list',
            name: 'election',
            message: 'Gestión de géneros',
            choices: ['Ver canciones alfabeticamente', 'Ver canciones inversamente', 'Ver canciones por oyentes (creciente)',
                'Ver canciones por oyentes (decreciente)', 'Añadir canción', 'Volver atras'
            ],
        },
      ];
    
        inquirer.prompt(questions).then((answers: any) => {
            console.clear();
            switch(answers['election']) {
                case 'Ver canciones alfabeticamente': {
                    let songs: Song[] = myDataBase.songSort(0);
                    songs.map((song: Song) => {
                        song.print()
                    });
                    console.log("Pulse enter para continuar...");
                    let e = scanf('%s');
                    managementSongs();
                    break;
                }

                case 'Ver canciones inversamente': {
                    let songs: Song[] = myDataBase.songSort(1);
                    songs.map((song: Song) => {
                        song.print()
                    });
                    console.log("Pulse enter para continuar...");
                    let e = scanf('%s');
                    managementSongs();
                    break;
                }

                case 'Añadir canción': {
                    console.log("Inserte el nombre de la nueva cancion: ");
                    let name: string = scanf('%S');
                    console.log("\nInserte el nombre del creador: ");
                    let creator: string = scanf('%S');
                    console.log("\nInserte el nombre del genero al que pertenece: ");
                    let genre: string = scanf('%S');
                    console.log("\nIndique si la cancion es un Single (0 - es un single // 1 - no es un single): ");
                    let aux: number = scanf("%d");
                    let isSingle: boolean = aux === 0 ? true : false;
                    console.log("\nInserte el numero de veces que ha sido escuchada:");
                    let timesListened: number = scanf('%d');
                    console.log("\nInserte la duracion de la cancion en segundos: ");
                    let duration: number = scanf('%d');

                    let newSong: Song = new Song(name, creator, genre, isSingle, timesListened, duration);
                    myDataBase.addSong(newSong);
                    console.log('Canción añadida correctamente :)');
                    console.log("Pulse enter para continuar...");
                    let q = scanf('%s');
                    managementSongs();
                    break;
                }
                
                case 'Ver canciones por oyentes (creciente)': {
                    let songs: Song[] = myDataBase.songSort(2);
                    songs.map((song) => {
                        song.print()
                    });
                    console.log("Pulse enter para continuar...");
                    let e = scanf('%s');
                    managementSongs();
                    break;
                }

                case 'Ver canciones por oyentes (decreciente)': {
                    let songs: Song[] = myDataBase.songSort(3);
                    songs.map((song) => {
                        song.print()
                    });
                    console.log("Pulse enter para continuar...");
                    let e = scanf('%s');
                    managementSongs();
                    break;
                }

                case 'Volver atras': {
                    managementDB();
                    break;
                }
            }
        });
}


export function managementGroups() {
    console.clear();
    const questions = [
        {
            type: 'list',
            name: 'election',
            message: 'Gestión de géneros',
            choices: ['Ver grupos alfabeticamente', 'Ver grupos inversamente', 'Añadir grupo', 'Volver atras'],
        },
      ];
    
        inquirer.prompt(questions).then((answers: any) => {
            console.clear();
            switch(answers['election']) {
                case 'Ver grupos alfabeticamente': {
                    let groups: Group[] = myDataBase.groupSort(true);
                    groups.map((group: Group) => {
                        group.print()
                    });
                    console.log("Pulse enter para continuar...");
                    let e = scanf('%s');
                    managementGroups();
                    break;
                }

                case 'Ver grupos inversamente': {
                    let groups: Group[] = myDataBase.groupSort(false);
                    groups.map((group: Group) => {
                        group.print()
                    });
                    console.log("Pulse enter para continuar...");
                    let e = scanf('%s');
                    managementGroups();
                    break;
                }

                case 'Añadir grupo': {
                    console.log("Inserte el nombre del grupo: ");
                    let name: string = scanf('%S');
                    console.log("\nInserte el año de creación del grupo");
                    let year: number = scanf('%d');
                    console.log("\nInserte el número de componentes del grupo");
                    let n: number = scanf('%d');
                    let components: string[] = [];
                    for (let i: number = 0; i < n; ++i) {
                        console.log("\nInserte el nombre del componente ", i + 1, ": ");
                        components.push(scanf("%S"))
                    }
                    console.log("Introduzca el numero de oyentes mensuales: ");
                    let listeners: number = scanf("%d");

                    let newGroup: Group = new Group(name, year, components, listeners);
                    myDataBase.addGroup(newGroup);
                    console.log('Grupo añadido correctamente :)');
                    console.log("Pulse enter para continuar...");
                    let q = scanf('%s');
                    managementGroups();
                    break;
                }

                case 'Volver atras': {
                    managementDB();
                    break;
                }
            }
        });
}



export function managementAlbum() {
    console.clear();
    const questions = [
        {
            type: 'list',
            name: 'election',
            message: 'Gestión de albumes',
            choices: ['Ver albumes ordenados alfabeticamente', 'Ver albumes ordenados inversamente', 
            'Ver albumes por año de lanzamiento (creciente)', 'Ver albumes por año de lanzamiento (decreciente)', 'Añadir album', 'Volver atrás'],
        },
      ];
    
        inquirer.prompt(questions).then((answers: any) => {
            console.clear();
            switch(answers['election']) {
                case 'Ver albumes ordenados alfabeticamente': {
                    let albums: Album[] = myDataBase.albumSort(0);
                    albums.map((album) => {
                        album.print()
                    });
                    console.log("Pulse enter para continuar...");
                    let e = scanf('%s');
                    managementAlbum();
                    break;
                }

                case 'Ver albumes ordenados inversamente': {
                    let albums: Album[] = myDataBase.albumSort(1);
                    albums.map((artist) => {
                        artist.print()
                    });
                    console.log("Pulse enter para continuar...");
                    let e = scanf('%s');
                    managementAlbum();
                    break;
                }

                case 'Añadir album': {
                    console.log("Inserte el nombre del nuevo album: ");
                    let name: string = scanf('%S');
                    console.log("\nInserte el año de lanzamiento del album: ");
                    let year: number = scanf('%S');
                    console.log("\nInserte el nombre del creador del album: ");
                    let creator: string = scanf('%S');
                    
                    console.log("\nInserte el número de canciones del album");
                    let n: number = scanf('%d');
                    let songs: string[] = [];
                    for (let i: number = 0; i < n; ++i) {
                        console.log("\nInserte el nombre de la canción ", i + 1, ": ");
                        songs.push(scanf("%S"));
                    }

                    console.log("\nInserte el número de géneros del album");
                    let m: number = scanf('%d');
                    let genres: string[] = [];
                    for (let i: number = 0; i < m; ++i) {
                        console.log("\nInserte el nombre del género ", i + 1, ": ");
                        genres.push(scanf("%S"));
                    }


                    let newAlbum: Album = new Album(name, creator, year, songs, genres);
                    myDataBase.addAlbum(newAlbum);
                    console.log('Artista añadido correctamente :)');
                    console.log("Pulse enter para continuar...");
                    let q = scanf('%s');
                    managementAlbum();
                    break;
                }
                
                case 'Ver albumes por año de lanzamiento (creciente)': {
                    let albums: Album[] = myDataBase.albumSort(2);
                    albums.map((album) => {
                        album.print()
                    });
                    console.log("Pulse enter para continuar...");
                    let e = scanf('%s');
                    managementAlbum();
                    break;
                }

                case 'Ver albumes por año de lanzamiento (decreciente)': {
                    let albums: Album[] = myDataBase.albumSort(3);
                    albums.map((album) => {
                        album.print()
                    });
                    console.log("Pulse enter para continuar...");
                    let e = scanf('%s');
                    managementAlbum();
                    break;
                }

                case 'Volver atrás': {
                    managementDB();
                    break;
                }
            }
        });
}


function managementPlaylists() {
    console.clear();
    console.log('Bienvenido a SPOTY-DSI');
    
    const questions = [
      {
          type: 'list',
          name: 'election',
          message: '¿Dónde desea acceder?',
          choices: ['Ver mis playlists', 'Crear playlist', 'Volver atrás'],
      },
    ];

    inquirer.prompt(questions).then((answers: any) => {
        switch(answers['election']) {
            case 'Ver mis playlists': {
                console.log("Nombre de usuario: ");
                let user: string = scanf("%S");
                searchPlaylist(managementPlaylists, user);
                break;
            }

            case 'Crear playlist':
                console.log("Nombre de usuario: ");
                let myuser: string = scanf("%s");
                console.log("Nombre de la playlist: ");
                let name: string = scanf("%S");
                console.log();
                let newPlaylist: Playlist = new Playlist(name, myuser);
                myDataBase.addPlaylist(newPlaylist);
                managementPlaylists();
                break;

            case 'Volver atrás': {
                    promptUser();
                    break;
            }

        }
    });
}


function searchPlaylist(dbFuntion: Function, user: string) {
    console.clear();
    console.log('Bienvenido a SPOTY-DSI');
    let namePlaylists: string[] = [];
    myDataBase.playListSort(true, user).map((playlist: Playlist) => {
        namePlaylists.push(playlist.getName());
    });

    if (namePlaylists.length === 0) {
        console.log("El usuario: ", user, " aun no ha creado ninguna playlist");
        console.log("Pulse enter para continuar...");
        
        let e = scanf('%s');
        dbFuntion();
    }

    const questions = [
      {
          type: 'list',
          name: 'election',
          message: 'Selecciona tu playlist',
          choices: Object.values(namePlaylists)
      },
    ];

        
    inquirer.prompt(questions).then((answers: any) => {
        let myPlaylist: string = answers['election'];
        const questions = [
            {
                type: 'list',
                name: 'election',
                message: 'Qué desea hacer',
                choices: ['Ver playlist ordenada alfabeticamente', 'Ver playlist ordenada alfabeticamente',
                    'Añadir canción', 'Borrar canción', 'Atras'
            ]
            },
        ];

        inquirer.prompt(questions).then((answers: any) => {
            switch(answers['election']) {
                case 'Ver playlist ordenada alfabeticamente': 

                    break;
                
                case 'Ver playlist ordenada alfabeticamente':

                    break;

                case 'Añadir canción': 
                    console.log("Nombre de canción: ");
                    let song: string = scanf("%S");

                    myDataBase.getPlaylists().map((playlist: Playlist) => {
                        if (myPlaylist == playlist.getName())
                            myDataBase.addSongToPlaylist(playlist.getName(), song);
                    });
                    managementPlaylists();
                    break;

                case 'Borrar canción':
                    console.log("Nombre de canción: ");
                    let rsong: string = scanf("%S");

                    myDataBase.getPlaylists().map((playlist: Playlist) => {
                        if (myPlaylist == playlist.getName())
                            myDataBase.removeSongFromPlaylist(playlist.getName(), rsong);
                    });
                    managementPlaylists();
                    break;

                case 'Atras':
                    managementPlaylists();
                    break;
            }
        })

    });

}