import { MusicDataBase } from "./musicDataBase";

while(1) {
    let myDataBase: MusicDataBase = new MusicDataBase();
    myDataBase.defaultData()
    console.log(myDataBase.getGenres())
}