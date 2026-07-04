// ======================================
// FOREVER PAGE
// ======================================

// Auto Music

const music = document.getElementById("finalMusic");

window.onload = () => {

    if (music) {

        music.play().catch(() => { });

    }

}

// ======================================
// YES BUTTON
// ======================================

const yesBtn = document.getElementById("yesBtn");

const finalMessage = document.getElementById("finalMessage");

yesBtn.onclick = function () {

    finalMessage.style.display = "block";

    yesBtn.style.display = "none";

    startFireworks();

}

// ======================================
// STARS
// ======================================

const stars = document.getElementById("stars");

for (let i = 0; i < 180; i++) {

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

// ======================================
// FLOWERS
// ======================================

const flowerContainer = document.getElementById("flowers");

const flowers = ["🌹", "🌸", "🌺", "🌷", "💮"];

function createFlower() {

    const flower = document.createElement("div");

    flower.className = "flower";

    flower.innerHTML =

        flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left = Math.random() * 100 + "vw";

    flower.style.fontSize = (18 + Math.random() * 18) + "px";

    flower.style.animationDuration = (5 + Math.random() * 4) + "s";

    flowerContainer.appendChild(flower);

    setTimeout(() => {

        flower.remove();

    }, 9000);

}

setInterval(createFlower, 180);

// ======================================
// HEARTS
// ======================================

const heartContainer = document.getElementById("hearts");

const hearts = ["❤️", "💖", "💕", "💗", "💝"];

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "fHeart";

    heart.innerHTML =

        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 220);

// ======================================
// FIREWORKS
// ======================================

const fire = document.getElementById("fireworks");

function startFireworks() {

    setInterval(() => {

        const fw = document.createElement("div");

        fw.innerHTML = "✨";

        fw.style.position = "absolute";

        fw.style.left = Math.random() * 100 + "vw";

        fw.style.top = Math.random() * 70 + "vh";

        fw.style.fontSize = (25 + Math.random() * 35) + "px";

        fw.style.animation = "boom 1s forwards";

        fire.appendChild(fw);

        setTimeout(() => {

            fw.remove();

        }, 1000);

    }, 180);

}

console.log("Forever Page Loaded ❤️");