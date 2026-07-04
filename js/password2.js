// =========================
// Floating Hearts
// =========================
alert("password2.js Loaded");
const hearts = document.querySelector(".hearts");

function createHeart() {

    if (!hearts) return;

    const heart = document.createElement("div");

    heart.className = "heart";

    const emoji = ["❤️", "💕", "💖", "💗", "💝"];

    heart.innerHTML = emoji[Math.floor(Math.random() * emoji.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (18 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 250);

// =========================
// Password Check
// =========================

function checkAnswer() {

    alert("Function Started");

    // baaki code...

    const ans = document.getElementById("answer").value.trim().toLowerCase();

    const msg = document.getElementById("message");

    console.log("Entered Password:", ans);

    if (ans === "vina") {

        msg.style.color = "#7CFC00";
        msg.innerHTML = "❤️ Welcome My Love ❤️";

        setTimeout(() => {
            window.location.href = "loveintro.html";
        }, 1000);

    } else {

        msg.style.color = "yellow";
        msg.innerHTML = "❌ Wrong Password";

    }

}

document.getElementById("answer").addEventListener("keypress", function (e) {

    if (e.key === "Enter") {
        checkAnswer();
    }

});