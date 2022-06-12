daysEl = document.getElementById("days");
hrsEl = document.getElementById("hrs");
minsEl = document.getElementById("mins");
secsEl = document.getElementById("secs");

christmas = "29 May 2021";

function countdown() {
    const christmasDate = new Date(christmas);
    const currentDate = new Date();

    const timeLeft = christmasDate - currentDate;

    const msPerDay = 1000 * 3600 * 24;
    const days = Math.floor(timeLeft / msPerDay);

    const msPerHr = 1000 * 3600;
    const hrs = Math.floor((timeLeft % msPerDay) / msPerHr);

    const msPerMin = 1000 * 60;
    const mins = Math.floor((timeLeft % msPerHr) / msPerMin);

    const msPerSec = 1000;
    const secs = Math.floor((timeLeft % msPerMin) / msPerSec);

    daysEl.innerHTML = days;
    hrsEl.innerHTML = hrs;
    minsEl.innerHTML = mins;
    secsEl.innerHTML = secs;

    console.log(days)
}

countdown();

setInterval(countdown, 1000);
