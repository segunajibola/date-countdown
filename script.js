const input = document.getElementById("input");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    countdown();
    setInterval(countdown, 1000)

    //document.body.removeEventListener('click', countdown);
    // btn.removeEventListener('click', countdown, false);
    // btn.removeEventListener('click', countdown);
});

function countdown() {
    const newYears = input.value;

    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("mins").innerHTML = formatTime(minutes);
    document.getElementById("seconds").innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}