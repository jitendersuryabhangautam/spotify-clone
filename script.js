console.log("welcome to spotify");
// initialize the index
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Dil ka dariya", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Vande Maatram", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Dil-e-nadaan", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Tu hi rab tu hi dua", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Raat ko aunga main", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Tumse mohabbat hogyi", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhole ram ram se", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Saat samandar", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Afreen afreen", filePath: "10.mp3", coverPath: "covers/10.jpg"},
];

songItems.forEach((element, i)=>{
    // console.log(element, i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText =songs[i].songName;
} )

// audioElement.play();
// Handle play/pause 
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

// listen to Event
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    // console.log(progress);
    // update seekbar


    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value= progress;

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-cirle');
        element.classList.add('fa-play-cirle');  
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // console.log(e.target);
        makeAllPlays();
        e.target.classList.remove('fa-play-cirle');
        e.target.classList.add('fa-pause-cirle');
        audioElement.src = 'songs/3.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
    })
})

 