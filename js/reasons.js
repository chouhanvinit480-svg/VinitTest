// =====================================
// 100 REASONS PAGE
// =====================================

// Fade In Animation

const reasons = document.querySelectorAll(".reason");

reasons.forEach((reason, index) => {

    reason.style.opacity = "0";

    reason.style.transform = "translateY(40px)";

    setTimeout(() => {

        reason.style.transition = "0.8s";

        reason.style.opacity = "1";

        reason.style.transform = "translateY(0)";

    }, index * 180);

});

// ==========================
// Flowers Rain
// ==========================

const flowerContainer = document.getElementById("flowers");

const flowers = ["🌹", "🌸", "🌺", "🌷", "💮"];

function createFlower() {

    if (!flowerContainer) return;

    const flower = document.createElement("div");

    flower.className = "flower";

    flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left = Math.random() * 100 + "vw";

    flower.style.fontSize = (18 + Math.random() * 18) + "px";

    flower.style.animationDuration = (5 + Math.random() * 4) + "s";

    flowerContainer.appendChild(flower);

    setTimeout(() => {

        flower.remove();

    }, 9000);

}

setInterval(createFlower, 220);

// ==========================
// Hearts Rain
// ==========================

const heartContainer = document.getElementById("hearts");

const hearts = ["❤️", "💖", "💕", "💗", "💝"];

function createHeart() {

    if (!heartContainer) return;

    const heart = document.createElement("div");

    heart.className = "fHeart";

    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 18) + "px";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 250);

// ==========================
// Hover Sound (Optional)
// ==========================

reasons.forEach((reason) => {

    reason.addEventListener("mouseenter", () => {

        reason.style.transform = "scale(1.05)";

    });

    reason.addEventListener("mouseleave", () => {

        reason.style.transform = "scale(1)";

    });

});

console.log("100 Reasons Loaded ❤️");