function solve(arr){
    class Song{
        constructor(type, name, time){
            this.type = type,
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let songsNumber = arr.shift();
    let songType = arr.pop();

    for(let i=0; i<songsNumber; i++){
        let[type, name, time] = arr[i].split("_");
        let song = new Song(type, name, time);
        songs.push(song);
    }

    if(songType ==='all'){
        songs.forEach(currentSong => console.log(currentSong.name));
    }else{
        songs.filter(currentSong=>currentSong.type===songType)
            .forEach(currentSong=>console.log(currentSong.name));
    }
}

solve([3,
'favourite_DownTown_3:14',
'favourite_Kiss_4:16',
'favourite_Smooth Criminal_4:01',
'favourite']);

solve([4,
'favourite_DownTown_3:14',
'listenLater_Andalouse_3:24',
'favourite_In To The Night_3:58',
'favourite_Live It Up_3:48',
'listenLater']);

