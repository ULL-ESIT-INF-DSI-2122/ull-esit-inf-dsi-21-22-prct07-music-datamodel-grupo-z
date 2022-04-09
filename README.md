# Práctica 7: Modelo de datos de un sistema de información que permite almacenar una biblioteca musical

En esta práctica vamos a desarrollar un sistema de información de música. Desde ella se podrán gestionar géneros musicales, artistas, grupos, canciones, albums y playlists. Para modelar este sistema desarrollaremos una serie de clases y tipos de datos que facilitarán esta gestión. Haremos uso de la librería lowdb como base de datos local y de la librería Inquirer.js para crear una interfaz amigable con el usuario.

## Sistema de clases

Hemos desarrollado 6 clases principales: Song, Artist, Genre, Album, Group y Playlist. Cada una de ella gestiona un elemento del sistema por separado. 

### Clase Genre

Desde la clase Genre, se gestiona toda la información necesaria para un género musical. Esta clase tiene los atributos privados name de tipo string, donde se almacena el nombre del género, components de tipo Array de Artist | Group ( clases que definiremos mas adelante ), donde se guarda una lista de todos los artistas o grupos que tienen alguna canción del género. Por otro lado el atributo albums almacena un array de tipo Album, con todos los albumes que tienen alguna canción del género y por último songs donde se guarda un array con todas las canciones relacionadas co  el género en cuestión. 

Desde el constructor solo se recibe el nombre del género ya que los albums, canciones, grupos y artistas relacionados se irán añadiendo posteriormente a la clase. 

//codigo del constructor

Cada uno de los atributos privados comentados previamente tiene un getter donde se devuelve el atributo especificado. 

//codigo de los getters 

Cada uno de ellos también tiene una funcion add para añadir una cancion, album... 

//código de los add

También se tiene un método publico llamado same() que sirve para comparar dos géneros, devuelve true en caso afirmativo, false en el contrario. Este método es necesario mas adelante cuando es necesario comparar si dos géneros son el mismo. Por último con el método print(), se imprime por pantalla toda la información del género formateada correctamente

//same() y print()



