let carousel = document.querySelector('.carousel');
let stage = document.querySelector('.carousel-stage');
let prev = document.querySelector('.carousel-prev');
let next = document.querySelector('.carousel-next');
let slide = document.querySelectorAll('.single-slide');
let slidesNumber = slide.length - 1;


let currentIndex = 0;
let slideWidth = slide[0].clientWidth;

function goToSlide(index) {
    if (index < 0) {
        index = slidesNumber;
    } else if (index > slidesNumber) {
        index = 0;
    }
    carousel.style.left = index * (-slideWidth);
    currentIndex = index;
}

function slideToNext() {
    goToSlide(currentIndex + 1);
}

function slideToPrev() {
    goToSlide(currentIndex - 1);
}

document.onkeydown = checkKey;
function checkKey(e) {
    if (e.keyCode == '37') {
        slideToPrev();
    }
    else if (e.keyCode == '39') {
        slideToNext();
    }

}
next.addEventListener('click', slideToNext);

prev.addEventListener('click', slideToPrev);

function autorotate() {
    setInterval(slideToNext, 4000);
}

autorotate();
