// ============================
// HEARTS
// ============================

const hearts = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = ["❤️","💖","💕","💗","💝","🩷"][Math.floor(Math.random()*6)];

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (18 + Math.random()*20) + "px";

    heart.style.animationDuration = (5 + Math.random()*4) + "s";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },9000);

}

setInterval(createHeart,250);


// ============================
// BALLOONS
// ============================

const balloons = document.getElementById("balloons");

function createBalloon(){

    const balloon = document.createElement("div");

    balloon.className="balloon";

    balloon.innerHTML="🎈";

    balloon.style.left=Math.random()*100+"vw";

    balloon.style.animationDuration=(8+Math.random()*4)+"s";

    balloons.appendChild(balloon);

    setTimeout(()=>{
        balloon.remove();
    },12000);

}

setInterval(createBalloon,1500);


// ============================
// FLOWERS
// ============================

const flowers=document.getElementById("flowers");

function createFlower(){

    const flower=document.createElement("div");

    flower.className="flower";

    flower.innerHTML=["🌸","🌹","🌺","💮"][Math.floor(Math.random()*4)];

    flower.style.left=Math.random()*100+"vw";

    flower.style.animationDuration=(6+Math.random()*3)+"s";

    flowers.appendChild(flower);

    setTimeout(()=>{
        flower.remove();
    },9000);

}

setInterval(createFlower,800);


// ============================
// CAKE CLICK
// ============================

document.getElementById("cake").onclick=function(){

    alert("🎂 Happy Birthday Tanu Ji ❤️");

};


// ============================
// GIFT CLICK
// ============================

document.getElementById("gift").onclick=function(){

    alert("🎁 A Special Gift For You ❤️");

};


// ============================
// PREVIOUS BUTTON
// ============================

document.getElementById("previousBtn").onclick=function(){

    window.location.href="playlist.html";

};


// ============================
// CONTINUE BUTTON
// ============================

document.getElementById("continueBtn").onclick=function(){

    window.location.href="forever.html";

};