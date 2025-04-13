const heart = document.querySelector(".heart");
let stage = 0;

setTimeout(() => {
    document.querySelector(".heart::before").style.opacity = "1";
}, 1000);

setTimeout(() => {
    document.querySelector(".heart::after").style.opacity = "1";
}, 2000);

setInterval(() => {
    if (stage === 0) {
        heart.style.transform = "scale(1.5) rotate(-100deg)";
        heart.style.backgroundColor = "blue";
        stage = 1;
    } else if {
        heart.style.transform = "scale(1) rotate(-40deg)";
        heart.style.backgroundColor = "red";
        stage = 2;
    } else if {
        heart.style.transform = "scale(2.5) rotate(-20deg)";
        heart.style.backgroundColor = "green";
        stage = 3;
    } else 
        heart.style.transform = "scale(2) rotate(-180deg)";
        heart.style.backgroundColor = "yellow";
        stage = 4;
}, 2000);
