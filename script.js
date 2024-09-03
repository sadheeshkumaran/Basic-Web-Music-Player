const audio = document.getElementById('audioPlayer');
const progressBar = document.getElementById('progressBar');


 // Update time display and progress bar
 audio.addEventListener('timeupdate', () => {
    progressBar.value = audio.currentTime;
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
});

// Set up progress bar and duration display when audio loads
audio.addEventListener('loadedmetadata', () => {
    progressBar.max = audio.duration;
    durationDisplay.textContent = formatTime(audio.duration);
});

// Seek audio when progress bar changes
progressBar.addEventListener('input', () => {
    audio.currentTime = progressBar.value;
});

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function stopAudio() {
    audio.pause();
    audio.currentTime = 0; // Reset audio to the beginning
}

