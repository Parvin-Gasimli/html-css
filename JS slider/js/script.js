let slidePosition = 0;
const slides = document.getElementsByClassName('carusel_item');
const totalSlides = slides.length;
document.getElementById('carusel_button--next').addEventListener('click', function() {
    moveToNextSlide();
});
document.getElementById('carusel_button--prev').addEventListener('click', function() {
    moveToPrevSlide();
});

function moveToPrevSlide() {
    console.log('hello prev');

}

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove("carusel_item_visible");
        slide.classList.add("carusel_item--hidden");
        slides[slidePosition].classList.add('carusel_item_visible')


    }


}

function moveToNextSlide() {

    if (slidePosition == totalSlides) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidePosition()

}

function moveToPrevSlide() {

    if (slidePosition == 0) {
        slidePosition = 0;
    } else {
        slidePosition--;
    }
    updateSlidePosition()
}