function startGift() {
  document.querySelector(".start-screen").style.display = "none";
  document.querySelector(".main-screen").style.display = "flex";
  startFallingHearts();
  startTimer(new Date("2024-10-06"), new Date("2025-01-25"));
}

function startFallingHearts() {
  setInterval(() => {
    let heart = document.createElement("div");
    heart.className = "falling-heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 300);
}

function startTimer(startDate, datingDate) {
  function updateTimer() {
    let now = new Date();
    let diff = Math.floor((now - startDate) / 1000);
    let datingDiff = Math.floor((now - datingDate) / 1000);

    let years = Math.floor(diff / (3600 * 24 * 365));
    let days = Math.floor((diff % (3600 * 24 * 365)) / (3600 * 24));
    let hours = Math.floor((diff % (3600 * 24)) / 3600);
    let minutes = Math.floor((diff % 3600) / 60);
    let seconds = diff % 60;

    let datingYears = Math.floor(datingDiff / (3600 * 24 * 365));
    let datingDays = Math.floor((datingDiff % (3600 * 24 * 365)) / (3600 * 24));
    let datingHours = Math.floor((datingDiff % (3600 * 24)) / 3600);
    let datingMinutes = Math.floor((datingDiff % 3600) / 60);
    let datingSeconds = datingDiff % 60;

    document.getElementById(
      "dating-time"
    ).textContent = `${datingYears} anos, ${datingDays} dias, ${datingHours} horas, ${datingMinutes} minutos e ${datingSeconds} segundos`;
    document.getElementById(
      "time-counter"
    ).textContent = `${years} anos, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
  }
  updateTimer();
  setInterval(updateTimer, 1000);
}

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel() {
  idx++;

  if (idx > img.length - 1) {
    idx = 0;
  }

  let larguraImg = imgs.clientWidth; // Obtém a largura real do contêiner
  imgs.style.transform = `translateX(${-idx * larguraImg}px)`;
}

setInterval(carrossel, 3800);
