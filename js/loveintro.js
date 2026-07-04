// ===================================
// TamannaVerse Premium
// Love Intro JS - Part 1
// ===================================

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [
    "❤",
    "💖",
    "💕",
    "💗",
    "💝",
    "💘"
];

const fontSize = 24;

const columns = Math.floor(canvas.width / fontSize);

const drops = [];

for (let i = 0; i < columns; i++) {

    drops[i] = Math.random() * canvas.height;

}

function draw() {

    ctx.fillStyle = "rgba(0,0,0,0.12)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ff1e6c";
    ctx.font = fontSize + "px Arial";

    for (let i = 0; i < drops.length; i++) {

        const text =
            hearts[Math.floor(Math.random() * hearts.length)];

        ctx.fillText(
            text,
            i * fontSize,
            drops[i]
        );

        drops[i] += fontSize;

        if (
            drops[i] > canvas.height &&
            Math.random() > 0.98
        ) {

            drops[i] = 0;

        }

    }

}

setInterval(draw, 45);

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});

// ===================================
// Love Text Animation
// ===================================

const loveText = document.getElementById("loveText");

setTimeout(() => {

    loveText.classList.add("showText");

}, 3500);

// ===================================
// Auto Redirect
// ===================================

setTimeout(() => {

    window.location.href = "welcome.html";

}, 9000);