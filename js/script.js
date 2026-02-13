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
   POPUPS WITH TYPEWRITER
========================= */
const messages = {
  rose: "Happy Rose Day 🌹\nEvery rose reminds me of your beauty.",
  propose: "Happy Propose Day 💍\nWill you stay with me forever?",
  chocolate: "Happy Chocolate Day 🍫\nLife is sweeter with you.",
  teddy: "Happy Teddy Day 🧸\nSending you the biggest cuddle!",
  promise: "Happy Promise Day 🤝\nI promise to always choose you.",
  hug: "Happy Hug Day 🤗\nCome here you!",
  kiss: "Happy Kiss Day 😘\nOne sweet kiss just for you!",
  valentine: `My Dearest Annie, My Love, My Beautiful Queen ❤️,
  
            I just wanted to take a minute to tell you how much I love you. You are basically my favorite human, my partner-in-crime, my heart. And I just wanted to make sure you knew that—loudly and clearly. ❤️

            I keep catching myself smiling for no reason, and then I realize it is because I am thinking about you. Somehow, you have this magical ability to make life feel lighter, funnier, and more like something I actually want to show up for every day. I love how you make ordinary things - like grocery shopping or walking to the car - feel like little adventures. And I love how you make me want to be a better person. ❤️

            I love the way your mind works, your stubbornness, your kindness, and even your overthought scenarios. Honestly, I do not know how you do it, but somehow you have made me a better, happier, more ridiculous version of myself. ❤️

            I am completely, unashamedly, and ridiculously in love with you. I love you for all the big, beautiful things about you, but also for all the little weird things that make you you. I love that I can be totally myself around you, which is terrifying and amazing all at once. And I promise to keep loving you, annoying you, making you laugh, and occasionally being dramatic about random stuff for as long as you will let me. ❤️

            I promise to always be there for you, to support you, to make you laugh when life gets tough, to love you with everything I have and to make you wet, horny and scream my name.  I promise to love you more than Leanne. Thank you for all the boobie privileges. I also promise to give you peace during your downloading sessions. One day, I hope that I can hear the dreadful farts you keep on mentioning. You are my heart, my happiness, my everything. ❤️

            Forever yours (and still probably thinking about you)❤️,

            Dumb, Dumb, Dumb❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️`
};

const popup = document.getElementById("dayPopup");
const popupText = document.getElementById("popupText");
const closePopup = document.getElementById("closePopup");

document.querySelectorAll(".dayBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    const day = btn.dataset.day;

    // Reset popup shape (use default rectangular)
    popup.className = "modal";

    // Show popup
    popup.style.display = "flex";

    // Typewriter text
    typeWriter(messages[day]);
  });
});

// Typewriter effect
function typeWriter(text) {
  popupText.innerHTML = ""; // clear previous
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      if (text[i] === "\n") {
        popupText.innerHTML += "<br>";
      } else {
        popupText.innerHTML += text[i];
      }
      i++;
    } else {
      clearInterval(interval);
    }
  }, 40);
}

// Close popup
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});
