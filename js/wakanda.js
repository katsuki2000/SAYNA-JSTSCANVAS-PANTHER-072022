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
});

var canvas = document.getElementById('canvas');

// ICI code pour afficher sur tout l'ecran
canvas.height = $('body').height();
canvas.width = $('body').width();
// FIN

console.log($('body').height());
console.log(canvas.width);
console.log(canvas.height);
var ctx = canvas.getContext('2d');
var image = document.getElementById('img-curseur');
image.style.display = 'none';
var raf;
var running = false;

var img = {
    x: 5,
    y: 5,
    vx: 5,
    vy: 2,
    draw: function() {
        ctx.beginPath();
        ctx.drawImage(image, this.x, this.y, 40, 50);
        ctx.closePath();
    }
};

function clear() {
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw() {
    clear();
    img.draw();
    img.x += img.vx;
    img.y += img.vy;

    if (img.y + img.vy > canvas.height || img.y + img.vy < 0) {
        img.vy = -img.vy;
    }
    if (img.x + img.vx > canvas.width || img.x + img.vx < 0) {
        img.vx = -img.vx;
    }

    raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener('mousemove', function(e) {
    if (!running) {
        clear();
        img.x = e.clientX;
        img.y = e.clientY;
        img.draw();
    }
});


canvas.addEventListener("mouseout", function(e) {
    window.cancelAnimationFrame(raf);
    running = false;
});

img.draw();