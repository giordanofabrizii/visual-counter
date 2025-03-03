const counterEl = document.getElementById("counter"); // counter element on the DOM
const maxValue = 3921; // value at which the counter have to stop
var counterValue = 1; // value of the counter at the beginning

const effectDuration = 2000; // < milliseconds that the effect will require
const startTime = performance.now() // with performance.now the total time is exactly effectDuration 

function updateCounter() {
    let elapsedTime = performance.now() - startTime;
    counterValue = Math.min(Math.floor((elapsedTime / effectDuration) * maxValue), maxValue);
    counterEl.innerText = counterValue;

    if (counterValue < maxValue) {
        requestAnimationFrame(updateCounter);
    }
}

updateCounter();