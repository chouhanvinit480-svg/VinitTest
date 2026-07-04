// ======================================
// LOVE LETTER PAGE
// ======================================

// Music

const music = document.getElementById("bgMusic");
const musicBtn = document.querySelector(".music-btn");

function toggleMusic() {

    if (!music) return;

    if (music.paused) {

        music.play().then(() => {

            musicBtn.innerHTML = "🔇 Pause Music";

        }).catch(err => {

            console.log(err);

        });

    } else {

        music.pause();

        musicBtn.innerHTML = "🎵 Play Music";

    }

}

// ===============================
// Typewriter Love Letter
// ===============================

const letter = document.getElementById("letter");

const text =

   " Meri sabse pyari Tanu Ji, Happy Birthday meri baccha! ❤️ Aaj ka din mere liye duniya ka sabse khoobsurat din hai, kyunki aaj us ladki ka janam hua tha jisne meri zindagi ko itna haseen bana diya. Pata hai, jab se tum meri life mein aayi ho na, tab se har din pehle se zyada khoobsurat lagne laga hai. Tumhari ek chhoti si smile mera poora din bana deti hai aur tumhari khushi hi meri sabse badi khushi hai. Main shayad har baar apne dil ki baat shabdon mein nahi bata pata, lekin itna zaroor jaanta hoon ki meri har dua mein sabse pehla naam tumhara hota hai. Main bas itna chahta hoon ki tum hamesha muskurati raho, kabhi kisi baat ka dukh tumhare paas bhi na aaye, aur agar kabhi zindagi mein koi takleef aaye, toh usse pehle woh mere paas aaye. Thank you meri jaan, meri zindagi mein aane ke liye, mujhe itna pyaar dene ke liye aur har pal ko yaadgaar banane ke liye. Main wada karta hoon ki har haal mein tumhara saath dunga, tumhari respect karunga aur har din tumhe yeh ehsaas dilata rahunga ki tum meri zindagi ki sabse anmol khushi ho. Bhagwan se bas ek hi dua hai ki har saal tumhara birthday main isi tarah tumhare saath manaun aur hamesha tumhari muskurahat ki wajah banu. Happy Birthday meri Cutie, meri baccha, meri duniya. I love you more than words can ever express, aur aaj, kal aur hamesha sirf tumhara hi rahunga. ❤️"




let index = 0;

function typeWriter() {

    if (!letter) return;

    if (index < text.length) {

        if (text.charAt(index) === "\n") {

            letter.innerHTML += "<br>";

        } else {

            letter.innerHTML += text.charAt(index);

        }

        index++;

        setTimeout(typeWriter, 40);

    }

}

setTimeout(typeWriter, 1000);

// ===============================
// Flowers Rain
// ===============================

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

setInterval(createFlower, 200);

// ===============================
// Hearts Rain
// ===============================

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

console.log("Love Letter Loaded ❤️");