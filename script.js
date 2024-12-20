let hrs = 0;
let mins = 0;
let secs = 0;
let timex, timexrev;

let hrselement = document.querySelector(".hrs");
let minselement = document.querySelector(".mins");
let secselement = document.querySelector(".secs");
let startbtn = document.querySelector(".startbtn");
let pausebtn = document.querySelector(".pausebtn");
let resetbtn = document.querySelector(".resetbtn");
let reversebtn = document.querySelector(".reversebtn");

startbtn.addEventListener("click", () => {
    startTime();
    console.log("Start clicked");
});
pausebtn.addEventListener("click", () => {
    clearTimeout(timex);
    clearTimeout(timexrev);
    console.log("Pause clicked");
});
resetbtn.addEventListener("click", () => {
    hrs = 0;
    mins = 0;
    secs = 0;
    updateDisplay();
    console.log("Reset clicked");
});
reversebtn.addEventListener("click", () => {
    clearTimeout(timex);
    reverseTimer();
});

function updateDisplay() {
    hrselement.innerHTML = hrs.toString().padStart(2, '0');
    minselement.innerHTML = mins.toString().padStart(2, '0');
    secselement.innerHTML = secs.toString().padStart(2, '0');
}

function startTime() {
    timex = setTimeout(function () {
        secs++;
        if (secs > 59) {
            secs = 0;
            mins++;
            if (mins > 59) {
                mins = 0;
                hrs++;
            }
        }
        updateDisplay();
        startTime();
    }, 1000);
}

function reverseTimer() {
    console.log(hrs + ":" + mins + ":" + secs);
    timexrev = setTimeout(function () {
        if (secs === 0 && mins === 0 && hrs === 0) {
            clearTimeout(timexrev);
            return;
        }
        secs--;
        if (secs < 0 && mins > 0) {
            secs = 59;
            mins--;
            if (mins < 0 && hrs > 0) {
                mins = 59;
                hrs--;
            }
        }
        updateDisplay();
        reverseTimer();
    }, 1000);
}

// Initial display update
updateDisplay();
