// ===========================
// Floating Hearts
// ===========================

const hearts = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const emoji = [
        "❤️",
        "💖",
        "💕",
        "💗",
        "💝"
    ];

    heart.innerHTML =
        emoji[Math.floor(Math.random() * emoji.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (18 + Math.random() * 18) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 250);


// ===========================
// Password Check
// ===========================

function checkAnswer() {

    const ans = document
        .getElementById("answer")
        .value
        .trim()
        .toLowerCase();

    const msg = document
        .getElementById("message");

    if (ans === "tanu") {

        msg.style.color = "#7CFC00";

        msg.innerHTML = "🥹 Correct My Cutie ❤️";

        setTimeout(() => {

            window.location.href = "password2.html";

        }, 1500);

    }

    else {

        msg.style.color = "yellow";

        msg.innerHTML = "🥺 Oyee... Socho Dhyan Se ❤️";

    }

}

document
    .getElementById("answer")
    .addEventListener("keypress", function (e) {

        if (e.key === "Enter") {

            checkAnswer();

        }

    });