# Práctica 7: Modelo de datos de un sistema de información que permite almacenar una biblioteca musical

En esta práctica vamos a desarrollar un sistema de información de música. Desde ella se podrán gestionar géneros musicales, artistas, grupos, canciones, albums y playlists. Para modelar este sistema desarrollaremos una serie de clases y tipos de datos que facilitarán esta gestión. Haremos uso de la librería lowdb como base de datos local y de la librería Inquirer.js para crear una interfaz amigable con el usuario.

## Sistema de clases

Hemos desarrollado 6 clases principales: Song, Artist, Genre, Album, Group y Playlist. Cada una de ella gestiona un elemento del sistema por separado. 

// cokentar el tipo time. 

### Clase Genre

Desde la clase Genre, se gestiona toda la información necesaria para un género musical. Esta clase tiene los atributos privados:
  - name de tipo string, donde se almacena el nombre del género. 
  - components de tipo Array de Artist | Group ( clases que definiremos mas adelante ), donde se guarda una lista de todos los artistas o grupos que tienen alguna canción del género. 
  - albums almacena un array de tipo Album, con todos los albumes que tienen alguna canción del género.
  - songs donde se guarda un array con todas las canciones relacionadas co  el género en cuestión. 

Desde el constructor solo se recibe el nombre del género ya que los albums, canciones, grupos y artistas relacionados se irán añadiendo posteriormente a la clase. 


  constructor(
    private name: string,
    private components: Array<string> = [],
    private albums: Array<string> = [],
    private songs: Array<string> = [],
  ) {}

Cada uno de los atributos privados comentados previamente tiene un getter donde se devuelve el atributo especificado. 


    public getName(): string {
        return this.name;
    }

    public getComponents(): Array<string> {
        return this.components;
    }

    public getAlbums(): Array<string> {
        return this.albums;
    }

    public getSongs(): Array<string> {
        return this.songs
    }

También tiene una funcion add para añadir una cancion, album y artista, en este último se comprueba que el artista no esté previamente relacionado al género para que no se guarde en la base de datos dos veces el mismo artista


    public addAlbum(newAlbum: string) {
        this.albums.push(newAlbum)
    }

    public addArtist(newArtist: string) {
        if (!this.components.includes(newArtist))
            this.components.push(newArtist)
    }

    public addSong(newSong: Song) {
        this.songs.push(newSong.getName());
    }


También se tiene un método publico llamado same() que sirve para comparar dos géneros, devuelve true en caso afirmativo, false en el contrario. Este método es necesario mas adelante cuando es necesario comparar si dos géneros son el mismo. Por último con el método print(), se imprime por pantalla toda la información del género formateada correctamente


    public same(genre: Genre) {
      return this.getName() === genre.getName();
    }

    public print() {
      console.log(`GENERO: **${this.getName()}**`);
      if (this.getAlbums().length > 0) {
          console.log(`\tAlbumes: `)
          this.getAlbums().forEach(album => {
              console.log(`\t  - ${album}`);
          });
      } else {
          console.log(`\tEste genero aun no tiene albumes relacionados`);
      }

      if (this.getComponents().length > 0) {
          console.log(`\tArtistas Relacionados: `);
          this.getComponents().forEach(component => {
              console.log(`\t  - ${component}`);
          });
      } else {
          console.log(`\tEste genero aun no tiene artistas relacionados`);
      }   

      if (this.getSongs().length > 0) {
          console.log(`\tCanciones: `);
          this.getSongs().forEach(song => {
              console.log(`\t  - ${song}`);
          });
      } else {
          console.log(`\tEste genero aun no tiene canciones asociadas`);
      }

      console.log();
    }


A parte de la funcion de comparacion same, se ha añadido otra funcion que compruebe si un elemento ya forma parte de la clase antes de añadirlo. La funcion `has` en la clase genero, comprueba si el creador, el album o la cancion que se le quiere añadir ya se encontraba añadida o no. Para llevar a cabo esta funcion, primero se comprueba el tipo de objeto que se introduce, y en funcion del tipo de objeto, se comprueba si coincide con alguno de los elementos que la clase posee.
  
  
    public has(element: Artist | Group | Album | Song): boolean {
        if (element instanceof (Artist || Group)) {
            this.getComponents().forEach(component => {
                if(component == element.getName()) {
                    return true;
                }
            });
        } else if (element instanceof Album) {
            this.getAlbums().forEach(album => {
                if (album == element.getName()) {
                    return true;
                }
            });
        } else if (element instanceof Song) {
            this.getSongs().forEach(song => {
                if (song == element.getName()) {
                    return true;
                }
            });
        }
        
        return false;
    }
  
Por otra parete, para permitir la conversión de los datos de la base de datos con el formato json, al tipo de objeto de nuestra clase, se implementa la función `deserialize`. Esta función recibe por parametros un conjunto de objetos de tipo género, pero, para evitar errores, la funcion construye nuevamente cada objeto, devolviendo así, un array de tipo género puro.
  
  public static deserialize(genres: Genre[]): Genre[] {
        const myGenres: Genre[] = [];

        genres.forEach((genre) => {
        const myGenre = new Genre(genre.name, genre.components, genre.albums, genre.songs);
        myGenres.push(myGenre);
        });

        return myGenres;
    } 

Con intención de sintetizar este informe, de las clases Artist, Group, Song y Album únicamente vamos a comentar sus atributos privados que si son exclusivos de cada clase, ya sus métodos siguen el mismo esquema que en la clase Genre. Un getter para cada uno de ellos y métodos para actualizarlos, además de los métodos print y same que tienen la misma función que la descrita en la clase Genre. 

### Clase Artist

La clase Artist tiene los siguientes atributos privados:
  - genres, de tipo Array<Genre> que guarda todos los géneros de los que el artista ha sacado una canción.
  - listeners, de tipo number donde se guardan la cantidad de oyentes que tiene el artista, se calcula sumando todos los oyentes de sus canciones.
  - groups, de tipo Array<Group> con todos los grupos de los que el artista es miembro.
  - albums, un Array<Album> con todos los albums que ha lanzado el artista.
  - songs, de tipos Array<Song> donde se guardan todas las canciones que ha sacado el artista.
  - name, un string con el nombre del artista.
  
Desde el constructor de la función únicamente se recibe el nombre del artista ya que el resto de atributos se van actualizando a medida se añaden canciones, grupos etc. a la base de datos mediante los métodos de actualización comentados previamente.
  
    export class Artist {
      constructor(
        private name: string,
        private genres: Array<string> = [],
        private listeners: number = 0,
        private groups: Array<string> = [],
        private albums: Array<string> = [],
        private songs: Array<string> = [],
      ) {} 

### Clase Song
  
La clase tiene los siguientes atributos privados: 
  - name, de tipo string que almacena el nombre de la canción. 
  - creator, de tipo Artist | Group, donde se guarda el creador de la canción ya sea un artista o un grupo. 
  - isSingel, de tipo booleam donde se guarda si la canción es un single, true en caso afirmativo, false en el contrario. 
  - genre, de tipo Genre donde se almacena el género de la canción. 
  - timesListened, de tipo number que almacena las veces que ha sido escuchada la canción. 
  - duration de tipo Time que guarda la duración de la canción en segundos, minutos y horas.
  
El constructor de esta clase recibe todos sus atributos excepto duration, en vez de el, se recibe un number con la duración en segundos y a partir de el se calcula el resto de parámetros del tipo time.
  
    export class Song {
        private duration: Time;

        constructor(
            private name: string,
            private creator: string,
            private genre: string,
            private isSingle: boolean,
            private timesListened: number,
            durationInSeconds: number,
        ) {
            this.duration = {hours: durationInSeconds / 3600, minutes: durationInSeconds / 60, seconds: durationInSeconds}
        }
  
### Clase Group
La clase Group, tiene los siguientes atribustos privados:
  
  - genres, un Array<Genre> donde se almacenan los géneros de los que el grupo ha sacado alguna canción. 
  - albums, un Array<Albums> donde se almacenan los albumsque el grupo ha lanzado.
  - songs, un Array<Song> donde se guardan las canciones que el grupo ha sacado. 
  - name, de tipo string  donde se guarda el nombre del grupo. 
  - year, de tipo number con el año de creación del grupo. 
  - listeners, de tipo number donde se guarda el número de veces que se ha escuchado el grupo. Se calcula a partir de todas las canciones relacionadas al grupo.
  - artists, de tipo Array<Artist> donde se alamcenan los aritstas que componen el grupo.
  
En el constructor de esta clase, se reciben los parámeteros name, year, artist y listeners. El resto de atributos, se van actualizando a medida que se añaden nuevas canciones, ábunes etc. a la base de datos. 

    export class Group {

        constructor(
            private name: string,
            private year: number,
            private artists: Array<string>,
            private listeners: number,
            private genres: Array<string> = [],
            private albums: Array<string> = [],
            private songs: Array<string> = [],
        ) {}  
  
### Clase Album
La clase álbum, tiene los siguientes atributos privados:
  
  - name. de tipo string que guarda el nombre del álbum. 
  - creator, de tipo Artist | Group, donde se almacena el creador del álbum ya sea un artista individual o un grupo. 
  - genres, de tipo Array<Genre> donde se guardan todos los géneros del álbum. 
  - year, de tipo number donde se almacena el año de lanzamiento del disco. 
  - songs, de tipo Array<Songs> que guarda todas las canciones del álbum. 
                                  
    export class Group {
        constructor(
            private name: string,
            private year: number,
            private artists: Array<string>,
            private listeners: number,
            private genres: Array<string> = [],
            private albums: Array<string> = [],
            private songs: Array<string> = [],
        ) {}         
                            

Para almacenar toda la información hemos creado la clase musicDataBase. Esta clase contiene un objeto LowdbSync, el cual almacena en un fichero .json la información que indiquemos. En nuestro caso este fichero json se almacena en el directorio /database de nuestro proyecto. A esta base de datos hay que declararle un esquema, nosotros tenemos un array para cada elemento que vamos a almacenar alli, canciones, albums, artistas, grupos, géneros y playlists

    type schemaType = {
        albums: Array<Album>,
        artists: Array<Artist>,
        groups: Array<Group>,
        genres: Array<Genre>,
        songs: Array <Song>,
        playlists: Array<Playlist>
    }


    export class MusicDataBase {

        private db: lowdb.LowdbSync<schemaType>;
        
    ...
    }

En el constructor, únicamente indicamos el fichero en el que se encuentra el .json y hemos hecho que si la base de datos está vacía se inicialice con vectores vacíos y rellenar estos con información por defecto. Esta información por defecto se carga a través de unas funciones llamadas defaultX y añade a la base de datos una serie de géneros, canciones, artistas... para que no esté vacía.

    constructor() {
            this.db = lowdb(new FileSync('database/db.json'));
            
            if (this.db.get("genres").value() === undefined) {
                this.db.set("genres", []).write();
                this.defaultGenres();
            }

            if (this.db.get("artists").value() === undefined) {
                this.db.set("artists", []).write();
                this.defaultArtists();
            }

            if (this.db.get("groups").value() === undefined) {
                this.db.set("groups", []).write();
                this.defaultGroups();
            }

            if (this.db.get("songs").value() === undefined) {
                this.db.set("songs", []).write();
                this.defaultSongs();
            }

            if (this.db.get("albums").value() === undefined) {
                this.db.set("albums", []).write();
                this.defaultAlbums();
            }

            if (this.db.get("playlists").value() === undefined) {
                this.db.set("playlists", []).write();
            }
        }

Para poder obtener cada uno de los atributos guardados en la base de datos se han desarrollado las siguientes funciones, que a traves de la funcion deserialize propia de cada clase devuelve el objeto correspondiente.
   
Para obtener las canciones, albumes, artistas, generos y grupos, se lleva a cabo el mismo protocolo, en el que se almacena la informacion de la base de datos en una variable. Luego, empleamos la funcion deserialize, que transforma los datos del tipo json al objeto que necesitamos. Y finalmente, se devuelve este objeto deserializado.
  
    public getSongs(): Array<Song> {
        const serializedSongs = this.db.get('songs').value();
        const mySongs = Song.deserialize(serializedSongs);
        return mySongs;
    }
  
  

    public getAlbums(): Array<Album> {
        const serializedAlbums = this.db.get('albums').value();
        const myAlbums = Album.deserialize(serializedAlbums);
        return myAlbums;
    }

    public getArtists(): Array<Artist> {
        const serializedArtists = this.db.get('artists').value();
        const myArtists = Artist.deserialize(serializedArtists);
        return myArtists;
    }

    public getGroups(): Array<Group> {
        const serializedGroups = this.db.get('groups').value();
        const myGroups = Group.deserialize(serializedGroups);
        return myGroups;
    }

    public getGenres(): Array<Genre> {
        const serializedGenres = this.db.get('genres').value();
        const myGenre = Genre.deserialize(serializedGenres);
        return myGenre;
    }

Por otra parte, para las playlist, tenemos en cuenta el usuario. Por lo tanto, además, se realiza un filtrado de los datos de tipo playlist en caso de que sea necesario.
  
    public getPlaylists(user: string = ''):Array<Playlist> {
        const serializedPlaylist = this.db.get('playlists').value();
        const myPlaylist = Playlist.deserialize(serializedPlaylist);
        if (user === '') {
            return myPlaylist;
        } else {
            let userPlaylist: Array<Playlist> = [];
            myPlaylist.forEach(playlist => {
                if (playlist.getUser() === user) {
                    userPlaylist.push(playlist);
                }
            });
            return userPlaylist;
        }
    }

Cada atributo de la base de datos tiene un método para añadir información. Para añadir un género tenemos la función addGenre(), la cual recibe un objeto de la clase Genre por parámetro y la añade a la base de datos de la siguiente manera

    public addGenre(newGenre: Genre) {
        this.db.get('genres').push(newGenre).write();
    }

Para añadir un artista, el método addArtist() funciona de una manera similar

    public addArtist(newArtist: Artist) {
        this.db.get('artists').push(newArtist).write();
    }

Para añadir un nuevo grupo, usamos el método addGroup(), se recibe un grupo por parámetro y se añade a la base de datos pero además, se realiza una búsqueda entre los artistas de la base de datos y a los que pertenezcan al nuevo grupo, se les actualiza su información para que el propio artista guarde en su atributo albums su pertenencia al nuevo grupo.

    public addGroup(newGroup: Group) {
        this.db.get('groups').push(newGroup).write();

        let artists: Array<string> = newGroup.getArtist();
        let dbArtists: Array<Artist> = this.getArtists();

        dbArtists.forEach((artist1: Artist) => {
            artists.forEach((artist2: string) => {
                if (artist1.getName() === artist2) {
                    artist1.addGroup(newGroup);
                }
            });
        });
        this.db.set('artists', dbArtists).write();
    }

Para añadir un album, tenemos la función addAlbum(), al igual que con el método anterior hay que actualizar la información de los artistas, géneros y grupos relacionados con el album para añadirles este album dentro de sus atributos internos. En el caso de los 3, se les añade el nombre del nuevo album a los atributos albums de cada clase.

    public addAlbum(newAlbum: Album) {
        this.db.get('albums').push(newAlbum).write();

        let artistsUpdated: Array<Artist> = this.getArtists();
        artistsUpdated.forEach((artist: Artist) => {
            if(artist.getName() === newAlbum.getCreator()) {
                artist.addAlbum(newAlbum);
            }
        });
        this.db.set('artists', artistsUpdated).write();


        let groupsUpdated: Array<Group> = this.getGroups();
        groupsUpdated.forEach((group) => {
            if(group.getName() == newAlbum.getCreator()) {
                group.addAlbum(newAlbum);
            }
        });
        this.db.set('groups', groupsUpdated).write();

        let genresUpdated: Array<Genre> = this.getGenres();
        genresUpdated.forEach((genre) => {
            if(newAlbum.getGenres().includes(genre.getName())) {
                genre.addAlbum(newAlbum.getName());
            }
        });
        this.db.set('genres', genresUpdated).write();
    }


Por último para añadir una canción usamos el método addSong(), y ocurre igual que antes. Hay que acceder al artista o grupo creador de la canción y actualizar sus atributos de canciones, géneros relacionados y oyentes. También hay que añadir la canción al género para que se guarde en su atributo songs.

    public addSong(newSong: Song) {
        this.db.get('songs').push(newSong).write();

        let artistsUpdated: Array<Artist> = this.getArtists();
        artistsUpdated.forEach((artist) => {
            if(artist.getName() == newSong.getCreator()) {
                artist.addSong(newSong);
                artist.addGenre(newSong.getGenre());
                artist.updateListeners(newSong.getTimesListened())
            }
        });
        this.db.set('artists', artistsUpdated).write();


        let groupsUpdated: Array<Group> = this.getGroups();
        groupsUpdated.forEach((group: Group) => {
            if(group.getName() == newSong.getCreator()) {
                group.addSong(newSong);
                group.addGenre(newSong.getGenre());
                group.updateListeners(newSong.getTimesListened())
            }
        });
        this.db.set('groups', groupsUpdated).write();

        let genresUpdated: Array<Genre> = this.getGenres();
        genresUpdated.forEach((genre) => {
            if(genre.getName() == newSong.getGenre()) {
                genre.addSong(newSong);
                genre.addArtist(newSong.getCreator());
            }
        });
        this.db.set('genres', genresUpdated).write();  
    }


A la hora de imprimir por pantalla las canciones, albumes etc. Hemos implementado unas funciones que permiten ordenar alfabeticamente e inversamente los elementos de la base de datos. Por ejemplo con la función genreSort(), pasándole un true si queremos que se ordene alfabeticamente y un false en caso contrario, se nos devuelve un array de Genres ordenados correctamente.

    public genreSort(asc: boolean = true): Array<Genre> {
        let sortedList: Array<Genre> = this.getGenres();

        sortedList.sort(function (a: Genre, b: Genre) {
            if (asc) {
                return a.getName() > b.getName() ? 1 : -1;
            } else {
                return a.getName() > b.getName() ? -1 : 1;
            }
        });

        return sortedList;
    }

Para grupos la función groupSort(), trabaja de la misma manera que la anterior

    public groupSort(asc: boolean = true): Array<Group> {
        let sortedList: Array<Group> = Array.from(this.getGroups());

        let a: Group;
        let b: Group;
        
        sortedList.sort(function (a, b) {
            if (asc) {
                return a.getName() > b.getName() ? 1 : -1;
            } else {
                return a.getName() > b.getName() ? -1 : 1;
            }
        });

        return sortedList;
    }

Para las canciones, a parte de las ordenaciones vistas en la funciones anteriores, también se puede ordenar de la mas popular a la menos, por número de reproducciones y al revés. En este caso la función recibe un number. 0 en caso alfabetico, 1 en caso inverso, 2 por popularidad creciente y 3 por popularidad decreciente.

    public artistSort(type: number = 0): Array<Artist> {
        let sortedList: Array<Artist> = Array.from(this.getArtists());

        let a: Artist;
        let b: Artist;
        
        sortedList.sort(function (a, b) {
            if (type == 0) {
                return a.getName() > b.getName() ? 1 : -1;
            } else if (type == 1) {
                return a.getName() > b.getName() ? -1 : 1;
            } else if (type == 2) {
                return a.getListeners() - b.getListeners();
            } else {
                return a.getListeners() > b.getListeners() ? -1 : 1;
            }
        });

        return sortedList;
    }

En cuanto a los albumes igual que con las canciones se recibe un number. 0 en caso alfabetico, 1 en caso inverso, 2 por fecha de lanzamiento creciente, 3 por orden de lanzamiento decreciente.
  
  
  
