function login() {
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
    
    if (password === "27102024") {
        window.location.href = "main.html";
    } else {
        errorMessage.textContent = "Password anda salah, silahkan coba lagi.";
    }
}

function timer() {
    let startTime = new Date(2024, 10 - 1, 27, 0, 0);
    let timeElapsed = new Date() - startTime;

    let days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
    let hours = Math.floor(timeElapsed / (1000 * 60 * 60) % 24);
    let minutes = Math.floor(timeElapsed / (1000 * 60) % 60);
    let seconds = Math.floor(timeElapsed / 1000 % 60);

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("time-days").innerHTML = days;
    document.getElementById("time-hours").innerHTML = hours;
    document.getElementById("time-minutes").innerHTML = minutes;
    document.getElementById("time-seconds").innerHTML = seconds;
};

const startTimer = () => {
    timer();
    setInterval(timer, 1000);
};

startTimer();

function openSurat() {
    document.getElementById("modalSurat").style.display = "flex";
}
function closeSurat() {
    document.getElementById("modalSurat").style.display = "none";
}

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-list");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
}); 

const swipe = document.getElementById("flip");
const back = document.querySelector(".back");

swipe.addEventListener("click", () => {
    back.classList.toggle("flip");
});
