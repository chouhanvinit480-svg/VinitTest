// =====================================
// PLAYLIST PAGE
// =====================================

// Song Cards Animation

const songs = document.querySelectorAll(".song");

songs.forEach((song, index) => {

    song.style.opacity = "0";
    song.style.transform = "translateY(40px)";

    setTimeout(() => {

        song.style.transition = "0.8s";

        song.style.opacity = "1";

        song.style.transform = "translateY(0)";

    }, index * 250);

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
// Pause Other Songs
// ==========================

const audios = document.querySelectorAll("audio");

audios.forEach(audio => {

    audio.addEventListener("play", () => {

        audios.forEach(other => {

            if (other !== audio) {

                other.pause();

            }

        });

    });

});

console.log("Playlist Loaded ❤️");