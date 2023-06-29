
// popup
const open = document.getElementById('open');
const close = document.getElementById('close');
const popupContainer = document.getElementById('popup-container');

open.addEventListener('click', () => {
    popupContainer.classList.add('active');
});
close.addEventListener('click', () => {
    popupContainer.classList.remove('active');
});



// fadeIn
window.addEventListener('scroll', reveal)

function reveal() {
    var faders = document.querySelectorAll('.fade-in');

    for(let i = 0; i < faders.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = faders[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if(revealTop < windowHeight - revealPoint) {
            faders[i].classList.add('show-content');
        }
        else {
            faders[i].classList.remove('show-content');
        }
    }
};



$(document).ready(function() {

    // slide des lignes et reseaux sociaux
    $(".barre").hide();
    setTimeout(() => {
        $(".barre").slideDown(5000);
    }, 2000);

    // zomm des h1, h2
    $("h1").mouseover(function() {
        $(this).css("transform", "scale(1.2)");
    });
    $("h1").mouseleave(function() {
        $(this).css("transform", "scale(1)");
    });
    $("h2").mouseover(function() {
        $(this).css("transform", "scale(1.2)");
    });
    $("h2").mouseleave(function() {
        $(this).css("transform", "scale(1)");
    });
    
    // effet zoom image wakanda
    $(".tchalla").mouseover(function() {
        $(this).css("transform", "scale(1.2)");
    });
    $(".tchalla").mouseleave(function() {
        $(this).css("transform", "scale(1)");
    });

    $("#img-panther").on({
        mouseenter: function() {
            $(this).animate({ width: '+=10%', });
        },
        mouseleave: function() {
            $(this).animate({ width: '-=10%', });
        },
    });
});


// slider
document.querySelector(".rond").addEventListener("click", sliderX)
let i = 0;
let coordonerX = 0;
let coordonerXenPX = coordonerX + "px";
var dataCord = [
    { "cordoner": "translateX(-520PX)" },
    { "cordoner": "translateX(-1040PX)" },
    { "cordoner": "translateX(-1560px)" },
    { "cordoner": "translateX(-2080px)" },
    { "cordoner": "translateX(-2600px)" },
    { "cordoner": "translateX(-3200px)" },
    { "cordoner": "translateX(-3640px)" },
    { "cordoner": "translateX(-3942PX)" },
]
let x = 3
let refSlide = ""

function sliderX() {
    console.log("e")
    if (i < 8) {
        console.log(x)
        document.querySelector(".conteneur_slider").style.transform = dataCord[i].cordoner;
        refSlide = '.slide' + x + " img";
        document.querySelector(refSlide).classList.add('animationFaddincart')
        x = x + 1;
        i++
    } else {
        i = 0
        x = 3
        document.querySelector(".conteneur_slider").style.transform = "translateX(0px)";
    }
}
