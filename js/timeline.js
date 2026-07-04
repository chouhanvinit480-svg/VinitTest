// ===============================
// Floating Hearts
// ===============================

const heartsContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);

}

setInterval(createHeart, 300);

// ===============================
// Date Wise Unlock System
// ===============================

// Year change kar lena agar zarurat ho
const YEAR = 2026;

const today = new Date();

const currentMonth = today.getMonth() + 1; // July = 7
const currentDate = today.getDate();

document.querySelectorAll(".heart").forEach(button => {

    const day = Number(button.dataset.day);

    let unlocked = false;

    if (currentMonth > 7) {

        unlocked = true;

    } else if (currentMonth === 7 && currentDate >= day) {

        unlocked = true;

    }

    if (unlocked) {

        button.classList.add("unlocked");

        button.classList.remove("locked");

    } else {

        button.classList.add("locked");

        button.classList.remove("unlocked");

    }

});

// ===============================
// Open Day
// ===============================

function openDay(day) {

    if (currentMonth < 7 || (currentMonth === 7 && currentDate < day)) {

        alert("🔒 Ye surprise " + day + " July ko unlock hoga ❤️");

        return;

    }

    window.location.href = "day" + day + ".html";

}