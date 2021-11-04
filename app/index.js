/*Feedback*/
$(function () {
    console.log('work');
    let slider = $('#feedback-slider');

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        dots: true,
    });
});

// preloader
let mask = document.querySelector('.mask');
window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove();
    }, 600);
});
