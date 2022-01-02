let songIndex = 0;
let audioElement = new Audio('audio/audio1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "If-We-Have-Each-Other", filePath: "audio/audio1.mp3", coverPath: "images/cover1.jpg"},
    {songName: "Old-Town-Road", filePath: "audio/audio2.mp3", coverPath: "images/cover2.jpg"},
    {songName: "Rise-Up", filePath: "audio/audio3.mp3", coverPath: "images/cover3.jpg"},
    {songName: "Stronger", filePath: "audio/audio4.mp3", coverPath: "images/cover4.jpg"},
    {songName: "Close-To-The-Sun", filePath: "audio/audio5.mp3", coverPath: "images/cover5.jpg"},
    {songName: "Industry-Baby", filePath: "audio/audio6.mp3", coverPath: "images/cover6.jpg"},
    {songName: "Hiding-In-The-Blue", filePath: "audio/audio7.mp3", coverPath: "images/cover7.jpg"},
    {songName: "This-Feeling", filePath: "audio/audio8.mp3", coverPath: "images/cover8.jpg"},
    {songName: "Believers", filePath: "audio/audio9.mp3", coverPath: "images/cover9.jpg"},
    {songName: "Maps", filePath: "audio/audio10.mp3", coverPath: "images/cover10.jpg"}
]
songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'audio/audio'+(songIndex+1)+'.mp3';
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = 'audio/audio'+(songIndex+1)+'.mp3';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = 'audio/audio'+(songIndex+1)+'.mp3';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})