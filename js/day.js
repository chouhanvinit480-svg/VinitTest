// =========================================
// DAY PAGE JS - PART 1
// =========================================

// Page Load Animation

window.addEventListener("load", () => {

    document.querySelector(".container").classList.add("fade");

});

// =========================================
// Floating Hearts
// =========================================

const heartBox = document.getElementById("hearts");

const heartEmoji = [
    "❤️",
    "💕",
    "💖",
    "💗",
    "💝"
];

function createHeart() {

    if (!heartBox) return;

    const heart = document.createElement("div");

    heart.className = "fHeart";

    heart.innerHTML =
        heartEmoji[Math.floor(Math.random() * heartEmoji.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (18 + Math.random() * 18) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    heartBox.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 250);

// =========================================
// Floating Flowers
// =========================================

const flowerBox =
    document.getElementById("flowers");

const flowers = [

    "🌸",
    "🌹",
    "🌺",
    "🌷",
    "💮"

];

function createFlower() {

    if (!flowerBox) return;

    const flower = document.createElement("div");

    flower.className = "flower";

    flower.innerHTML =

        flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left =

        Math.random() * 100 + "vw";

    flower.style.fontSize =

        (18 + Math.random() * 20) + "px";

    flower.style.animationDuration =

        (5 + Math.random() * 4) + "s";

    flowerBox.appendChild(flower);

    setTimeout(() => {

        flower.remove();

    }, 9000);

}

setInterval(createFlower, 300);

// =========================================
// DAY PAGE JS - PART 2 (FINAL)
// =========================================

// Auto Play Music (Browser permission ke hisaab se)

const music = document.getElementById("bgMusic");

if (music) {

    window.addEventListener("click", () => {

        music.play().catch(() => { });

    }, { once: true });

}

// =========================================
// Photo Hover Effect
// =========================================

const photo = document.querySelector(".photo");

if (photo) {

    photo.addEventListener("mouseenter", () => {

        photo.style.transform = "scale(1.05) rotate(2deg)";

    });

    photo.addEventListener("mouseleave", () => {

        photo.style.transform = "scale(1) rotate(0deg)";

    });

}

// =========================================
// Typing Effect
// =========================================

const message = document.querySelector(".memory p");

if (message) {

    const text = message.innerHTML;

    message.innerHTML = "";

    let i = 0;

    function typing() {

        if (i < text.length) {

            message.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing, 30);

        }

    }

    typing();

}

// =========================================
// Surprise Button
// =========================================

const surpriseBtn = document.getElementById("surpriseBtn");

if (surpriseBtn) {

    surpriseBtn.addEventListener("click", () => {

        alert("❤️ I Love You Forever Tanu Ji ❤️");

    });

}

// =========================================
// Scroll Animation
// =========================================

const sections = document.querySelectorAll(".memory,.quote,.surprise");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.classList.add("fade");

        }

    });

});

sections.forEach(sec => observer.observe(sec));

// =========================================
// Console
// =========================================

console.log("Day Page Loaded ❤️");

// =========================================
// NEXT DAY LOCK SYSTEM
// =========================================

function goNextDay(day) {

    const today = new Date().getDate();

    if (today >= day) {

        window.location.href = "day" + day + ".html";

    } else {

        alert("🔒 Day " + day + " will unlock tomorrow ❤️");

    }

}

// =========================================
// BIRTHDAY LOCK
// =========================================

function goBirthday() {

    const today = new Date().getDate();

    // Birthday sirf 14 July ko ya uske baad khulega
    if (today >= 14) {

        window.location.href = "birthday.html";

    } else {

        alert("🎂 Birthday Surprise will unlock on 14 July ❤️");

    }

}