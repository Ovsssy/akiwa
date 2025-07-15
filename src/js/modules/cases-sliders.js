document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll('.cases_card-slider');

  sliders.forEach((slider, index) => {

    new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.cases-pagination',
      },
    });
  });
});