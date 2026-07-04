// ======================================
// OUR MEMORIES GALLERY
// ======================================

// ==========================
// Image Popup
// ==========================

const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
const closeBtn = document.getElementById("close");

document.querySelectorAll(".gallery img").forEach(img => {

    img.addEventListener("click", function () {

        popup.style.display = "flex";

        popupImg.src = this.src;

    });

});

closeBtn.onclick = function () {

    popup.style.display = "none";

};

popup.onclick = function (e) {

    if (e.target == popup) {

        popup.style.display = "none";

    }

};

// ==========================
// Flower Rain
// ==========================

const flowerContainer = document.getElementById("flowers");

const flowers = [

    "🌹",
    "🌸",
    "🌺",
    "🌷",
    "💮"

];

function createFlower() {

    const flower = document.createElement("div");

    flower.className = "flower";

    flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left = Math.random() * 100 + "vw";

    flower.style.fontSize = (20 + Math.random() * 20) + "px";

    flower.style.animationDuration = (5 + Math.random() * 4) + "s";

    flowerContainer.appendChild(flower);

    setTimeout(() => {

        flower.remove();

    }, 9000);

}

setInterval(createFlower, 180);

// ==========================
// Heart Rain
// ==========================

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
// Welcome Animation
// ==========================

const container = document.querySelector(".container");

container.animate(

    [

        {

            opacity: 0,

            transform: "translateY(60px)"

        },

        {

            opacity: 1,

            transform: "translateY(0)"

        }

    ],

    {

        duration: 1200,

        easing: "ease"

    }

);

console.log("Gallery Loaded ❤️");