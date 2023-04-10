const wrapper = document.querySelector(".wrapper"),
    musicImg = wrapper.querySelector("img"),
    musicName = wrapper.querySelector(".name"),
    musicArtist = wrapper.querySelector(".artist"),
    playPauseBtn = wrapper.querySelector(".play-pause"),
    prevBtn = wrapper.querySelector("#prev"),
    nextBtn = wrapper.querySelector("#next"),
    mainAudio = wrapper.querySelector("#main-audio"),
    progressArea = wrapper.querySelector(".progress-area"),
    progressBar = progressArea.querySelector(".progress-bar");


let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);
isMusicPaused = true;

window.addEventListener("load", () => {
    loadMusic(musicIndex);
})

function loadMusic(indexNumb) {
    musicName.innerText = allMusic[indexNumb - 1].name;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    musicImg.src = `images/${allMusic[indexNumb - 1].src}.jpg`;
    mainAudio.src = `MP3 files/${allMusic[indexNumb - 1].src}.mp3`;
}

function playMusic () {
    wrapper.classList.add("paused");
    musicImg.classList.add('rotate');
    playPauseBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    mainAudio.play();
}

function pauseMusic () {
    wrapper.classList.remove("paused");
    musicImg.classList.remove('rotate');
    playPauseBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    mainAudio.pause();
}

function prevMusic () {
    musicIndex--;
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}

function prevMusic () {
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}

playPauseBtn.addEventListener("click", () => {
    const isMusicplay = wrapper.classList.contains("paused");
    isMusicplay ? pauseMusic() : playMusic();
})

document.body.innerHTML = "Hello Snoop Dog";