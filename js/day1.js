// =====================================
// TamannaVerse Premium - Day 1
// =====================================

// ❤️ Typewriter Letter

const letter = document.getElementById("letter");

const message = "Dear Tanu Ji ❤️"

"Aaj hamari beautiful journey ka pehla page hai."

"Main bas itna kehna chahta hoon.."

"Thank you meri life me aane ke liye."

"Tumhari smile meri duniya ka sabse beautiful part hai."

"I Love You Forever ❤️🌹;"

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

setTimeout(typeLetter, 1200);

// =====================================
// 🌹 Flower Rain
// =====================================

const flowerContainer = document.getElementById("flowers");

const flowers = ["🌹", "🌸", "🌺", "🌷", "💮"];

function createFlower() {

    const flower = document.createElement("div");

    flower.className = "flower";

    flower.innerHTML =
        flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left = Math.random() * 100 + "vw";

    flower.style.top = "-50px";

    flower.style.position = "absolute";

    flower.style.fontSize = (20 + Math.random() * 15) + "px";

    flower.style.animation = "flowerFall 8s linear forwards";

    flowerContainer.appendChild(flower);

    setTimeout(() => {

        flower.remove();

    }, 8000);

}

setInterval(createFlower, 200);

// =====================================
// ❤️ Heart Rain
// =====================================

const heartContainer = document.getElementById("hearts");

const hearts = ["❤️", "💖", "💕", "💗", "💝"];

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.position = "absolute";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.top = "-40px";

    heart.style.fontSize = (18 + Math.random() * 15) + "px";

    heart.style.animation = "heartFall 7s linear forwards";

    heartContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 7000);

}

setInterval(createHeart, 250);

// =====================================
// ✨ Card Animation
// =====================================

const card = document.querySelector(".container");

card.animate(

    [
        {
            opacity: 0,
            transform: "translateY(50px)"
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