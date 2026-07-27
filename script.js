const button=document.getElementById("start");

const story=document.querySelector(".story");

const text=document.querySelector(".story-text");

button.onclick=()=>{

story.scrollIntoView({

behavior:"smooth"

});

setTimeout(()=>{

text.classList.add("show");

},700);

}
