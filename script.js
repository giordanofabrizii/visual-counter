const counterEl = document.getElementById("counter"); // counter element on the DOM
const maxValue = 1; // value at which the counter have to stop
var counterValue = 1; // value of the counter at the beginning

const effectDuration = 2000; // < milliseconds that the effect will require

let interval = setInterval(() => {
    if (counterValue <= maxValue) {
        counterEl.innerText = counterValue;
        counterValue++
    } else {
        clearInterval(interval);
    }
}, (effectDuration/maxValue)); // ! set interval