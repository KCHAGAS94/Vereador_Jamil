let timer;
let timeLeft = 25 * 60; 
let isRunning = false;
const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const alarmSound = new Audio("music/Audio_1.mp3"); 

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                alarmSound.play(); 
                isRunning = false;
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
    alarmSound.pause(); //  Para a música ao clicar no botão "Parar"
    alarmSound.currentTime = 0; //  Reseta a música para o início
    timeLeft = 25 * 60; // Reseta o tempo para 25 minutos
    updateDisplay();
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
updateDisplay();
