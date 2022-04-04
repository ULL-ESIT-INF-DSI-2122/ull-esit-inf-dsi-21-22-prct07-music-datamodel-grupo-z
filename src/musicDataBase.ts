import { Album } from "./album";
import { Artist } from "./artist";
import { Genre } from "./genre";
import { Group } from "./group";
import { Song } from "./song";

import { LowSync, JSONFileSync } from 'lowdb'



export class MusicDataBase {
    private db;
    
    initializeDb() {
        this.db = new LowSync(new JSONFileSync('file.json'));
        this.db.data = { (new Set<Song>()) }
    }

}