const caseSlider = new Swiper('.case-slider', {
    slidesPerView: 1,
    spaceBetween: 200,
    loop: true,

    navigation: {
        nextEl: '.case-slider-button-next',
        prevEl: '.case-slider-button-prev',
    },
});

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".case-slider .swiper-slide");
    const moreSpan = document.getElementById("more");

    // if (moreSpan) {
    //     const extraPhotos = Math.max(slides.length - 6, 0);
    //     moreSpan.textContent = 'Все фото';
    // }
})