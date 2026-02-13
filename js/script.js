/* =========================
   BACKGROUND IMAGE SLIDER
========================= */
const bgPhotos = document.querySelectorAll(".bg-photo");
let currentIndex = 0;
setInterval(() => {
  bgPhotos[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % bgPhotos.length;
  bgPhotos[currentIndex].classList.add("active");
}, 4500);


/* =========================
   HEART FLOW EFFECT
========================= */
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 20) + "px";
  heart.style.animationDuration = (4 + Math.random() * 6) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}
setInterval(createHeart, 300);


/* =========================
   MUSIC AUTOPLAY
========================= */
let audio = new Audio("audio/music.mp3");
audio.loop = true;

audio.play().catch(() => {
  document.body.addEventListener("click", () => {
    audio.play();
  }, { once: true });
});


/* =========================
   YES / NO BUTTON LOGIC
========================= */
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("valentineQuestion");
const musicBtn = document.getElementById("musicBtn");
const specialButtons = document.getElementById("specialButtons");

let noClicked = false;

noBtn.addEventListener("click", () => {
  if (!noClicked) {
    noClicked = true;
    setInterval(() => {
      noBtn.style.position = "absolute";
      noBtn.style.left = Math.random() * (window.innerWidth - noBtn.offsetWidth) + "px";
      noBtn.style.top = Math.random() * (window.innerHeight - noBtn.offsetHeight) + "px";
    }, 300);
  }
});

yesBtn.addEventListener("click", () => {
  question.style.display = "none";
  musicBtn.style.display = "block";
  specialButtons.style.display = "block";
});


/* =========================
   VALENTINE WEEK POPUPS
========================= */
const messages = {
  valentine: `My Dearest Annie, My Love, My Beautiful Queen,

You are my forever and always.
Happy Valentine’s Day ❤️

Forever yours,
Dumb Dumb Dumb`,

  rose: "Happy Rose Day 🌹\nEvery rose reminds me of your beauty.",
  propose: "Happy Propose Day 💍\nWill you stay with me forever?",
  chocolate: "Happy Chocolate Day 🍫\nLife is sweeter with you.",
  teddy: "Happy Teddy Day 🧸\nSending you the biggest cuddle!",
  promise: "Happy Promise Day 🤝\nI promise to always choose you.",
  hug: "Happy Hug Day 🤗\nCome here you!",
  kiss: "Happy Kiss Day 😘\nOne sweet kiss just for you!"
};

const popup = document.getElementById("dayPopup");
const popupShape = document.getElementById("popupShape");
const popupText = document.getElementById("popupText");
const closePopup = document.getElementById("closePopup");

document.querySelectorAll(".dayBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    const day = btn.dataset.day;
    popupShape.className = "popup-shape " + day;
    popupText.innerText = messages[day];
    popup.style.display = "flex";
  });
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});
