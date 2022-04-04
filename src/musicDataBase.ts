import { Album } from "./album";
import { Artist } from "./artist";
import { Genre } from "./genre";
import { Group } from "./group";
import { Song } from "./song";

class MusicDataBase {
    
private low = require('lowdb')
private FileSync = require('lowdb/adapters/FileSync')

private adapter = new this.FileSync('db.json')
private db = this.low(this.adapter)

    addArtist() {

    }
}