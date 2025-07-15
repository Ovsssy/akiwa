const creationSlider = new Swiper('.creation_slider', {
  slidesPerView: 1,
  spaceBetween: 60,
  speed: 1000,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  
  navigation: {
    nextEl: '.creation_swiper-button-next',
    prevEl: '.creation_swiper-button-prev',
  },

  on: {
    slideChange: function() {
      // Получаем количество слайдов
      const totalSlides = this.slides.length;

      // Проверяем, если текущий слайд последний
      if (this.activeIndex === totalSlides - 1) {
        // Скрываем кнопку next
        document.querySelector('.creation_swiper-button-next').style.display = 'none';
      } else {
        // Показываем кнопку next
        document.querySelector('.creation_swiper-button-next').style.display = '';
      }
    }
  }
});

document.querySelectorAll('.creation_slide__background').forEach((el, index) => {
  const isMobile = window.innerWidth <= 768;
  const offset = isMobile ? 0.5 : 1.5;

  el.style.top = `${index * offset}rem`;
  el.style.zIndex = `${8 - index}`;
});
