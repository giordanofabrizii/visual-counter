const counterEl = document.getElementById("counter"); // counter element on the DOM
const maxValue = 200; // value at which the counter have to stop
var counterValue = 0; // value of the counter at the beginning

let interval = setInterval(() => {
    if (counterValue <= maxValue) {
        counterEl.innerText = counterValue;
        counterValue++
    } else {
        clearInterval(interval);
    }
}, 2); // ! set interval for 2 seconds