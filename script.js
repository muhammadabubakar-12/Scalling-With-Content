'use strict';
const cardFaqIsAlt = document.querySelectorAll(".card-faq.is-alt");
const cardFaqContentBottom = document.querySelectorAll(".card-faq-content-bottom");
const cardFaqIcon1 = document.querySelectorAll(".card-faq-icon-1");
const cardFaqIcon2 = document.querySelectorAll(".card-faq-icon-2");  

for(let i=0; i<cardFaqIsAlt.length; i++){
    cardFaqIsAlt[i].addEventListener('click', ()=>{
        cardFaqContentBottom[i].classList.toggle("hidden");
        if(cardFaqContentBottom[i].classList.contains("hidden")){
            cardFaqIcon2[i].style.transform=("rotate(0deg)");
            cardFaqIcon1[i].style.transform=("rotate(0deg)");
        }else{
            cardFaqIcon2[i].style.transform=("rotate(90deg)");
            cardFaqIcon1[i].style.transform=("rotate(180deg)");
            cardFaqIcon2[i].style.transition=("transform 0.5s ease");   
            cardFaqIcon1[i].style.transition=("transform 0.5s ease");
            // cardFaqContentBottom[i].classList.add("show");
        }
    });
}

// const menuButton=document.querySelector(".menu-button");
// const navData = document.getElementById("nav-data");
// const navOverlay = document.querySelector(".w-nav-overlay");
// menuButton.addEventListener('click',()=>{
//     navOverlay.style.cssText = "height:700px; display:block;";
//     navOverlay.appendChild(navData);
    
// });
