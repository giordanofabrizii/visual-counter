const counterEl = document.getElementById("counter"); // counter element on the DOM
const maxValue = 1900; // value at which the counter have to stop
var counterValue = 0; // value of the counter at the beginning

for (let i = 0; i <= maxValue; i++) {
    counterEl.innerText = i;
}