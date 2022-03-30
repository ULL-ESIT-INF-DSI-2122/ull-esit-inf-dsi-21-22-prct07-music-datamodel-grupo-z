import { Artist } from "./artist";
import { Genre } from "./genre";
import { Group } from "./group";
import { Song } from "./song";

class musicDataBase {
    private songs: Set<Song>;
    private artists: Set<Artist>;
    private groups: Set<Group>;
    private genres: Set<Genre>;

    constructor() {
        this.genres = new Set<Genre>([
            new Genre("Reggaeton"),
            new Genre("Electronica"),
            new Genre("Bachata"),
            new Genre("Salsa"),
            new Genre("Pop"),
            new Genre("Rock"),
            new Genre("Heavy Metal"),
            new Genre("Rap"),
            new Genre("Reggae"),
            new Genre("Trap")      
        ]);
    }

    public addArtist(newArtist: Artist) {
        this.artists.add(newArtist);
    }

    public addSong(newSong: Song) {
        this.songs.add(newSong);
        
        let myArtist: Artist | Group = newSong.getArtist();

        this.artists.forEach((item: Artist) => {
            if(item == myArtist) {
                item.addGenre(newSong.getGenre());
                item.addSong(newSong);
                item.updateListeners(newSong.getTimesListened());
            }
        })
    }
}