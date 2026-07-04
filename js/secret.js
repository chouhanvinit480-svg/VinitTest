// ============================
// SECRET PAGE
// ============================

// Stars

const stars = document.getElementById("stars");

for (let i = 0; i < 150; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";

    star.style.top = Math.random() * 100 + "vh";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";

    star.style.height = size + "px";

    star.style.animationDuration = (1 + Math.random() * 3) + "s";

    stars.appendChild(star);

}

// Hearts

const heartContainer = document.getElementById("hearts");

const hearts = ["❤️", "💖", "💕", "💗", "💝"];

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "fHeart";

    heart.innerHTML =

        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (20 + Math.random() * 18) + "px";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 220);

// Secret Message

function showMessage() {

    const msg = document.getElementById("message");

    msg.style.display = "block";

    document.querySelector("button").style.display = "none";

}

// Console

console.log("Secret Page Loaded ❤️");