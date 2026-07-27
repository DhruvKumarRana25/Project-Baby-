// ======================================
// LOADER
// ======================================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

    }, 2000);

});


// ======================================
// BACKGROUND MUSIC + START BUTTON
// ======================================

const music = document.getElementById("bgMusic");
let typedStarted = false;

document.getElementById("startBtn").addEventListener("click", () => {

    // Play music
    music.play();

    // Scroll to intro
    document.getElementById("intro").scrollIntoView({
        behavior: "smooth"
    });

    // Start typing only once
    if (!typedStarted) {

        typedStarted = true;

        new Typed("#typed-text", {

            strings: [

                "Once upon a time... ❤️",

                "There was a nervous boy...",

                "Holding a bouquet of flowers... 🌹",

                "Wondering if the prettiest girl would smile...",

                "She did... ❤️",

                "That smile changed my entire life.",

                "15 Months Later...",

                "I'm still falling in love with you every single day.",

                "Happy 15 Months, My Baby ❤️"

            ],

            typeSpeed: 50,

            backSpeed: 0,

            loop: false,

            showCursor: true

        });

    }

});


// ======================================
// REASONS I LOVE YOU
// ======================================

const reasons = [

    "Because your smile brightens my darkest days ❤️",

    "Because you become my tiny little baby 🥹",

    "Because you randomly beat me 😂",

    "Because every hug feels like home.",

    "Because your laugh is my favorite sound.",

    "Because you always support me.",

    "Because you believe in me.",

    "Because you're beautiful inside and out.",

    "Because I can be completely myself around you.",

    "Because every moment with you becomes a beautiful memory.",

    "Because your eyes tell stories.",

    "Because you make ordinary days extraordinary.",

    "Because you're my peace.",

    "Because you're my safe place.",

    "Because I simply can't imagine my life without you ❤️"

];

const reasonBtn = document.getElementById("reasonBtn");
const reasonText = document.getElementById("reasonText");

reasonBtn.addEventListener("click", () => {

    let random = Math.floor(Math.random() * reasons.length);

    reasonText.innerHTML = reasons[random];

});


// ======================================
// VOICE MESSAGE
// ======================================

const voice = document.getElementById("voiceMessage");

document.getElementById("voiceBtn").addEventListener("click", () => {

    voice.play();

});


// ======================================
// GSAP INTRO ANIMATION
// ======================================

gsap.from("#hero h3", {

    opacity: 0,

    y: -50,

    duration: 1

});

gsap.from("#hero h1", {

    opacity: 0,

    y: 50,

    duration: 1,

    delay: 0.4

});

gsap.from("#hero p", {

    opacity: 0,

    duration: 1,

    delay: 0.8

});

gsap.from("#startBtn", {

    opacity: 0,

    scale: 0,

    duration: 1,

    delay: 1.2

});


// ======================================
// FADE-IN SECTIONS
// ======================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "1s";

    observer.observe(section);

});


// ======================================
// CONFETTI
// ======================================

document.getElementById("finalBtn").addEventListener("click", () => {

    confetti({

        particleCount: 250,

        spread: 120,

        origin: {

            y: 0.6

        }

    });

});


// ======================================
// PHOTO CLICK EFFECT
// ======================================

const photos = document.querySelectorAll(".gallery img");

photos.forEach(photo => {

    photo.addEventListener("click", () => {

        photo.classList.toggle("zoom");

    });

});
