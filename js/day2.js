// ======================================
// TamannaVerse - Day 2
// ======================================

// =============================
// Love Letter Typewriter
// =============================

const letter = document.getElementById("letter");

const message = "Dear Tanu Ji ❤️,"

"Aaj ka din meri zindagi ke sabse khoobsurat palon me se ek tha."

"Tumhari ek smile meri puri duniya ko roshan kar deti hai."

"Jab bhi tum mere saath hoti ho,"
"har lamha special ban jata hai."

"Main har din sirf tumhari smile dekhna chahta hoon."

"Thank You meri life ka sabse beautiful part banne ke liye."

"I Love You So Much Tanu Ji ❤️🌹"

"Forever Yours,"
"❤️"

let index = 0;

function typeLetter() {

    if (index < message.length) {

        if (message.charAt(index) === "\n") {

            letter.innerHTML += "<br>";

        } else {

            letter.innerHTML += message.charAt(index);

        }

        index++;

        setTimeout(typeLetter, 40);

    }

}

window.onload = function () {

    setTimeout(typeLetter, 1000);

};

// =============================
// Flower Rain
// =============================

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

    flower.innerHTML =
        flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left =
        Math.random() * 100 + "vw";

    flower.style.fontSize =
        (18 + Math.random() * 18) + "px";

    flower.style.animationDuration =
        (5 + Math.random() * 4) + "s";

    flowerContainer.appendChild(flower);

    setTimeout(() => {

        flower.remove();

    }, 9000);

}

setInterval(createFlower, 200);

// =============================
// Heart Rain
// =============================

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
        (18 + Math.random() * 15) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 250);

// =============================
// Container Animation
// =============================

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