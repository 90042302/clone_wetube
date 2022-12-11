const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const time = document.getElementById("time");
const volumeRange = document.getElementById("volume");

let volumeValue = 0.5;
video.volume = volumeValue;

const handlePlayClick = (e) => {
    if(video.paused){
        video.play();
    } else {
        video.pause();
    }
    playBtn.innerText = video.paused ? "재생▶" : "정지⛔";
};

const handleMuteClick = (e) => {
    if(video.muted){
        video.muted = false;
    } else {
        video.muted = true;
    }
        muteBtn.innerText= video.muted ? "해제🔊" : "음소거";
        volumeRange.value = video.muted ? 0 : volumeValue;
};

const handleVolumeChange = (event) => {
    const {
        target : {value},
    } = event;
    if(video.muted){
        video.muted = false;
        muteBtn.innerText = "음소거";
    }
    volumeValue = value;
    video.volume = value;
};

playBtn.addEventListener("click",handlePlayClick);
muteBtn.addEventListener("click",handleMuteClick);
volumeRange.addEventListener("input",handleVolumeChange);
