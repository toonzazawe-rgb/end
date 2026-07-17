// ===== Page Animation =====
window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "1.2s";
        document.body.style.opacity = "1";
    }, 100);

    createConfetti();

});

// ===== Confetti =====

function createConfetti(){

    for(let i=0;i<120;i++){

        const c = document.createElement("div");

        c.className = "confetti";

        c.style.left = Math.random()*100+"vw";

        c.style.animationDuration = (Math.random()*3+2)+"s";

        c.style.animationDelay = Math.random()*2+"s";

        c.style.background =
        randomColor();

        c.style.transform =
        `rotate(${Math.random()*360}deg)`;

        document.body.appendChild(c);

        setTimeout(()=>{
            c.remove();
        },7000);

    }

}

function randomColor(){

    const colors=[

        "#ff9900",

        "#00d4ff",

        "#00ff99",

        "#ff4ecd",

        "#ffd700",

        "#ffffff"

    ];

    return colors[
        Math.floor(Math.random()*colors.length)
    ];

}

// ===== Floating Effect =====

const card=document.querySelector(".card");

if(card){

setInterval(()=>{

card.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-10px)"

},

{

transform:"translateY(0px)"

}

],{

duration:2500,

iterations:1

});

},2500);

}

// ===== Button Hover Glow =====

document.querySelectorAll("a").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow="0 0 35px white";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow="";

});

});
