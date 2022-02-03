import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const PLAY_KEY = "videoplayer-current-time";
const iframeEl = document.querySelector("iframe");
const playerEl = new Player(iframeEl);


const onPlay = () => {
    playerEl.on("timeupdate", throttle(timeEvent, 1000)); 
};

const timeEvent = (event) => {
    console.log(event.seconds);
    localStorage.setItem(PLAY_KEY, event.seconds);
};

playerEl.on("play", onPlay);
playerEl.setCurrentTime(localStorage.getItem(PLAY_KEY));