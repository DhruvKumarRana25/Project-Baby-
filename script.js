// =========================
// Loader
// =========================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

    }, 2000);

});


// =========================
// Background Music
// =========================

const music = document.getElementById("bgMusic");

document.getElementById("startBtn").addEventListener("click", () => {

    music.play();

    document.getElementById("intro").scrollIntoView({
        behavior: "smooth"
    });

});



// =========================
// Typewriter
// =========================

new Typed("#typed-text", {

    strings: [

        "Once upon a time... ❤️",

        "There was a nervous boy carrying a bouquet... 🌹",

        "He was wondering if the prettiest girl would smile...",

        "She did... ❤️",

        "And that single smile changed his whole world.",

        "Happy 15 Months, My Baby ❤️"

    ],

    typeSpeed: 45,

    backSpeed: 0,

    loop: false,

    showCursor: true

});



// =========================
// Reasons
// =========================

const reasons = [

"Because your smile lights up my world ❤️",

"Because you become my tiny little baby 🥹",

"Because you randomly beat me 😂",

"Because every hug feels like home.",

"Because you understand me.",

"Because you support my dreams.",

"Because your voice makes everything better.",

"Because you make ordinary days magical.",

"Because I can be myself with you.",

"Because you're my favorite person."

];

const reasonBtn = document.getElementById("reasonBtn");

const reasonText = document.getElementById("reasonText");

reasonBtn.addEventListener("click", () => {

    let random = Math.floor(Math.random() * reasons.length);

    reasonText.innerHTML = reasons[random];

});



// =========================
// Voice Message
// =========================

const voice = document.getElementById("voiceMessage");

document.getElementById("voiceBtn").addEventListener("click", () => {

    voice.play();

});



// =========================
// GSAP Animation
// =========================

gsap.from("section", {

    opacity: 0,

    y: 60,

    duration: 1,

    stagger: 0.2

});



// =========================
// Confetti
// =========================

document.getElementById("finalBtn").addEventListener("click", () => {

    confetti({

        particleCount: 250,

        spread: 120,

        origin: {

            y: 0.6

        }

    });

});
