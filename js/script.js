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
  rose: 'My Beautiful Queen.. 
     
         If I could, I would give you a garden full of roses (or Lillies), each one representing how much you mean to me. 
   
         You are the most beautiful part of my life. Every time I think of you, my heart feels full and grateful (and horny). 
   
         I am so lucky to love someone as incredible as you. 
   
         Belated Happy Rose Day 🌹',
  propose: "I just want to say that I choose you today and every day. Being with you is the easiest and best decision I have ever made. You are not just my girlfriend, you are my best friend and my safe space (I still believe in the judgement free safee space). If I had to live this life all over again, I would still find my way back to you. I promise to always grow with you and build something beautiful together. Belated Happy Propose Day 💍",
  chocolate: "Life with you is sweeter than any chocolate (Even more than chocolate cheesecake from Goodies), and every moment with you feels like a treat I never want to end. You add flavor and joy to my life in ways I cannot even explain. Even the simplest moments feel special when I am with you.  Belated Happy Chocolate Day 🍫",
  teddy: "I wish I could be your teddy, someone you hold close whenever you need comfort, warmth, or just a reminder that you are deeply loved. I want to be the person you turn to on your hardest days and the one you laugh with on your happiest ones. Whenever you feel overwhelmed, remember that you always have me. I will always be here to hold you tight (and grab your boobs). Belated Happy Teddy Day 🧸",
  promise: "I promise to stand by you, support you, and love you with all my heart. No matter what life brings, I am always on your team (Never Team Leanne). I promise to listen, to understand, and to never stop putting effort into us. I will celebrate your wins and help carry your burdens. Belated Happy Promise Day 🤝",
  hug: "If I could, I would wrap you in the biggest hug right now and never let go, because you are my safest and happiest place. Your hugs feel like home to me. In your arms, everything stressful fades away (Us being the same height helps a lot). I cannot wait for all the warm, comforting hugs we will share in the future. Belated Happy Hug Day 🤗",
  kiss: "Every kiss from you feels like magic, and I cannot wait to share a million more with you (Except when you are wearing lipstick, I guess). Your kisses make my heart race in the best way. They are soft, sweet, and unforgettable, just like you. Being close to you is my favorite place to be. Belated Happy Kiss Day 😘",
  valentine: `My Dearest Annie, My Love, My Beautiful Queen ❤️,
  
            I just wanted to take a minute to tell you how much I love you. You are basically my favorite human, my partner-in-crime, my heart. And I just wanted to make sure you knew that—loudly and clearly. ❤️

            I keep catching myself smiling for no reason, and then I realize it is because I am thinking about you. Somehow, you have this magical ability to make life feel lighter, funnier, and more like something I actually want to show up for every day. I love how you make ordinary things - like grocery shopping or walking to the car - feel like little adventures. And I love how you make me want to be a better person. ❤️

            I love the way your mind works, your stubbornness, your kindness, and even your overthought scenarios. Honestly, I do not know how you do it, but somehow you have made me a better, happier, more ridiculous version of myself. ❤️

            I am completely, unashamedly, and ridiculously in love with you. I love you for all the big, beautiful things about you, but also for all the little weird things that make you you. I love that I can be totally myself around you, which is terrifying and amazing all at once. And I promise to keep loving you, annoying you, making you laugh, and occasionally being dramatic about random stuff for as long as you will let me. ❤️

            I promise to always be there for you, to support you, to make you laugh when life gets tough, to love you with everything I have and to make you wet, horny and scream my name.  I promise to love you more than Leanne. Thank you for all the boobie privileges. I also promise to give you peace during your downloading sessions. One day, I hope that I can hear the dreadful farts you keep on mentioning. You are my heart, my happiness, my everything. ❤️

            HAPPY VALENTINES DAY MY LOVE ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️!!!

            If our CB's allow, would you like to go out for a Valentines Lunch with me?

            Forever yours (and still probably thinking about you)❤️,

            Dumb, Dumb, Dumb❤️`
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
