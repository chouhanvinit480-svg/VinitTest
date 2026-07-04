// =====================================
// TamannaVerse Premium Login JS
// =====================================

// Floating Hearts

const heartBg = document.querySelector(".bg-hearts");

if (heartBg) {

    function createHeart() {

        const heart = document.createElement("span");

        const hearts = [
            "❤️",
            "💖",
            "💕",
            "💗",
            "💝",
            "💘"
        ];

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            (18 + Math.random() * 25) + "px";

        heart.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        heartBg.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 10000);

    }

    setInterval(createHeart, 250);

}



// ==========================
// Password
// ==========================

function checkPassword() {

    const pass =
        document.getElementById("password").value.trim();

    const error =
        document.getElementById("error");



    if (pass === "tamanna") {

        error.style.color = "#7CFC00";

        error.innerHTML = "❤️ Welcome Tamanna Ji ❤️";



        setTimeout(() => {

           window.location.href = "html/password1.html";

        }, 1200);

    }

    else {

        error.style.color = "#ff3030";

        error.innerHTML = "❌ Wrong Password";



        document.querySelector(".login-box").animate([

            { transform: "translateX(-8px)" },

            { transform: "translateX(8px)" },

            { transform: "translateX(-8px)" },

            { transform: "translateX(8px)" },

            { transform: "translateX(0px)" }

        ], {

            duration: 400

        });

    }

}



// Enter Key

document
    .getElementById("password")
    .addEventListener("keypress", function (e) {

        if (e.key === "Enter") {

            checkPassword();

        }

    });
