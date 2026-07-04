// ====================================
// TamannaVerse Premium Welcome Page
// ====================================

// Enter Button

function enterWorld() {

    window.location.href = "timeline.html";

}

// ================================
// Flower Rain
// ================================

const flowerContainer = document.getElementById("flowers");

const flowers = [
    "🌹",
    "🌺",
    "🌸",
    "💮",
    "🌷"
];

function createFlower() {

    const flower = document.createElement("div");

    flower.className = "flower";

    flower.innerHTML =
        flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left =
        Math.random() * 100 + "vw";

    flower.style.fontSize =
        (20 + Math.random() * 18) + "px";

    flower.style.animationDuration =
        (5 + Math.random() * 4) + "s";

    flowerContainer.appendChild(flower);

    setTimeout(() => {

        flower.remove();

    }, 9000);

}

setInterval(createFlower, 180);

// ================================
// Floating Hearts
// ================================

const heartContainer = document.getElementById("hearts");

const hearts = [
    "❤️",
    "💖",
    "💕",
    "💗",
    "💝"
];

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "fHeart";

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (18 + Math.random() * 18) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 220);

// ================================
// Welcome Card Animation
// ================================

const card = document.querySelector(".welcome-card");

card.animate(

    [

        {
            opacity: 0,
            transform: "translateY(60px)"
        },

        {
            opacity: 1,
            transform: "translateY(0px)"
        }

    ],

    {

        duration: 1500,

        easing: "ease"

    }

);