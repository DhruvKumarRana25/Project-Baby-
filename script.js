/* ===========================================================
   LOADER
=========================================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        }, 600);

    }, 1800);

});


/* ===========================================================
   FLOATING HEARTS
=========================================================== */

const hearts = document.getElementById("hearts");

for(let i=0;i<30;i++){

    let heart = document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"%";

    heart.style.fontSize=(12+Math.random()*20)+"px";

    heart.style.animationDuration=(8+Math.random()*12)+"s";

    heart.style.animationDelay=Math.random()*10+"s";

    hearts.appendChild(heart);

}


/* ===========================================================
   BACKGROUND MUSIC
=========================================================== */

const bgMusic=document.getElementById("bgMusic");

document.getElementById("startBtn").addEventListener("click",()=>{

    bgMusic.play();

});


/* ===========================================================
   TYPEWRITER
=========================================================== */

let typedStarted=false;

document.getElementById("startBtn").addEventListener("click",()=>{

    document.getElementById("story").scrollIntoView({

        behavior:"smooth"

    });

    if(typedStarted) return;

    typedStarted=true;

    new Typed("#typed-text",{

        strings:[

            "Once upon a time... ❤️",

            "There was a nervous boy carrying a bouquet of flowers... 🌹",

            "He couldn't stop thinking about one girl.",

            "Then she smiled...",

            "And from that moment... everything changed.",

            "Every laugh... every memory... every hug...",

            "has become my favorite chapter.",

            "Happy 15 Months, My Baby ❤️"

        ],

        typeSpeed:45,

        backSpeed:0,

        loop:false,

        showCursor:true

    });

});


/* ===========================================================
   LIVE COUNTER
=========================================================== */

const startDate=new Date("2025-05-28T00:00:00");

function updateCounter(){

    const now=new Date();

    const diff=now-startDate;

    const days=Math.floor(diff/(1000*60*60*24));

    const hours=Math.floor((diff/(1000*60*60))%24);

    const minutes=Math.floor((diff/(1000*60))%60);

    const seconds=Math.floor((diff/1000)%60);

    document.getElementById("days").innerHTML=days;

    document.getElementById("hours").innerHTML=hours;

    document.getElementById("minutes").innerHTML=minutes;

    document.getElementById("seconds").innerHTML=seconds;

}

updateCounter();

setInterval(updateCounter,1000);


/* ===========================================================
   MEMORY SLIDES
=========================================================== */

const memories=[

{

image:"photo1.jpg",

title:"The Beginning ❤️",

text:"The day I held that bouquet... I was nervous, excited, and hoping to make you smile."

},

{

image:"photo2.jpg",

title:"Your Smile 🥹",

text:"One smile from you was enough to make me forget every fear."

},

{

image:"photo3.jpg",

title:"My Favorite Girl ❤️",

text:"Every picture reminds me how lucky I am to have you."

},

{

image:"photo4.jpg",

title:"My Baby 😂",

text:"My favorite moments are when you become my little baby and randomly hit me."

},

{

image:"photo5.jpg",

title:"Forever 🌸",

text:"If I had to choose again, I'd still choose you."

},

{

image:"photo6.jpg",

title:"Every Memory ❤️",

text:"Every second spent with you becomes my favorite memory."

}

];

let currentMemory=0;

const memoryImage=document.getElementById("memoryImage");

const memoryTitle=document.getElementById("memoryTitle");

const memoryDescription=document.getElementById("memoryDescription");

document.getElementById("nextMemory").addEventListener("click",()=>{

    currentMemory++;

    if(currentMemory>=memories.length){

        currentMemory=0;

    }

    memoryImage.style.opacity=0;

    memoryTitle.style.opacity=0;

    memoryDescription.style.opacity=0;

    setTimeout(()=>{

        memoryImage.src=memories[currentMemory].image;

        memoryTitle.innerHTML=memories[currentMemory].title;

        memoryDescription.innerHTML=memories[currentMemory].text;

        memoryImage.style.opacity=1;

        memoryTitle.style.opacity=1;

        memoryDescription.style.opacity=1;

    },300);

});

/* ===========================================================
   GALLERY LIGHTBOX
=========================================================== */

const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach((img) => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = img.src;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});


/* ===========================================================
   REASONS I LOVE YOU
=========================================================== */

const reasons = [

"Because your smile makes every bad day disappear ❤️",
"Because you become my little baby 🥹",
"Because you always make me laugh 😂",
"Because every hug feels like home.",
"Because you trust me.",
"Because you understand me.",
"Because you're my peace.",
"Because your eyes are beautiful.",
"Because your voice calms me.",
"Because you believe in me.",
"Because you're kind.",
"Because you're caring.",
"Because you're my best friend.",
"Because you're my favorite notification.",
"Because every picture with you becomes my favorite.",
"Because every memory with you is priceless.",
"Because you make ordinary days special.",
"Because you randomly beat me 😂",
"Because you still look cute after getting angry.",
"Because you're simply YOU ❤️"

];

const reasonBtn = document.getElementById("reasonBtn");
const reasonText = document.getElementById("reasonText");

reasonBtn.addEventListener("click", () => {

    const random = Math.floor(Math.random() * reasons.length);

    reasonText.style.opacity = 0;

    setTimeout(() => {

        reasonText.innerHTML = reasons[random];

        reasonText.style.opacity = 1;

    }, 250);

});


/* ===========================================================
   VOICE MESSAGE
=========================================================== */

const voiceMessage = document.getElementById("voiceMessage");

document.getElementById("voiceBtn").addEventListener("click", () => {

    if (voiceMessage.paused) {

        voiceMessage.play();

        document.getElementById("voiceBtn").innerHTML = "⏸ Pause Voice";

    } else {

        voiceMessage.pause();

        document.getElementById("voiceBtn").innerHTML = "▶ Play My Voice";

    }

});

voiceMessage.onended = () => {

    document.getElementById("voiceBtn").innerHTML = "▶ Play My Voice";

};


/* ===========================================================
   SCROLL REVEAL
=========================================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


/* ===========================================================
   HERO ANIMATION
=========================================================== */

gsap.from(".hero-content h3", {

    y: -50,

    opacity: 0,

    duration: 1

});

gsap.from(".hero-content h1", {

    y: 50,

    opacity: 0,

    duration: 1,

    delay: 0.3

});

gsap.from(".hero-content p", {

    opacity: 0,

    duration: 1,

    delay: 0.8

});

gsap.from("#startBtn", {

    opacity: 0,

    scale: 0,

    duration: 0.8,

    delay: 1.2

});


/* ===========================================================
   CONFETTI
=========================================================== */

document.getElementById("finalBtn").addEventListener("click", () => {

    confetti({

        particleCount: 250,

        spread: 120,

        origin: {

            y: 0.6

        }

    });

});


/* ===========================================================
   EASTER EGG
=========================================================== */

let heartClicks = 0;

document.getElementById("finalBtn").addEventListener("click", () => {

    heartClicks++;

    if (heartClicks === 5) {

        setTimeout(() => {

            alert("❤️ Surprise! I will always choose you. Happy 15 Months, Baby ❤️");

        }, 500);

    }

});


/* ===========================================================
   SMOOTH IMAGE FADE
=========================================================== */

galleryImages.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.05)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});
