/* eslint-disable prettier/prettier */
const playSounds = (e) => {
    const audioSound = document.querySelector(`audio[data-key='${e.keyCode}']`)
    if(!audioSound) return;
    audioSound.currentTime = 0;
    audioSound.play();
    const keyButton = document.querySelector(`div[data-key='${e.keyCode}']`);
    keyButton.className += " playing";
    window.setTimeout(()=>{
        keyButton.classList.remove("playing");
    },50);
}

window.addEventListener("keydown", playSounds);