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

//codigo del constructor

Cada uno de los atributos privados comentados previamente tiene un getter donde se devuelve el atributo especificado. 

//codigo de los getters 

Cada uno de ellos también tiene una funcion add para añadir una cancion, album... 

//código de los add

También se tiene un método publico llamado same() que sirve para comparar dos géneros, devuelve true en caso afirmativo, false en el contrario. Este método es necesario mas adelante cuando es necesario comparar si dos géneros son el mismo. Por último con el método print(), se imprime por pantalla toda la información del género formateada correctamente

//same() y print()


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
  
//código de constructor y los atributos de artist 
  
### Clase Song
  
La clase tiene los siguientes atributos privados: 
  - name, de tipo string que almacena el nombre de la canción. 
  - creator, de tipo Artist | Group, donde se guarda el creador de la canción ya sea un artista o un grupo. 
  - isSingel, de tipo booleam donde se guarda si la canción es un single, true en caso afirmativo, false en el contrario. 
  - genre, de tipo Genre donde se almacena el género de la canción. 
  - timesListened, de tipo number que almacena las veces que ha sido escuchada la canción. 
  - duration de tipo Time que guarda la duración de la canción en segundos, minutos y horas.
  
El constructor de esta clase recibe todos sus atributos excepto duration, en vez de el, se recibe un number con la duración en segundos y a partir de el se calcula el resto de parámetros del tipo time.
  
//código de constructor y los atributos de artist 

  
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

// Código del constructor y los atributos privados de group. 
  
  
### Clase Álbum
La clase álbum, tiene los siguientes atributos privados:
  
  - name. de tipo string que guarda el nombre del álbum. 
  - creator, de tipo Artist | Group, donde se almacena el creador del álbum ya sea un artista individual o un grupo. 
  - genres, de tipo Array<Genre> donde se guardan todos los géneros del álbum. 
  - year, de tipo number donde se almacena el año de lanzamiento del disco. 
  - songs, de tipo Array<Songs> que guarda todas las canciones del álbum. 
  
El constructor de esta clase recibe los parámetros name, creator, year y songs. El atributo genres, se calcula a paritr de los géneros de las canciones.
                                
                                
                        





