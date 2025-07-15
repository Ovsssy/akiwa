let burgerButtonOpen = document.querySelector('.burger-btn');
let header = document.querySelector('.header');
let headerButtonClose = document.querySelector('.header_button-close');
let menuLinks = document.querySelectorAll('.header-menu_nav-list a');
let headerBtnForm = document.querySelector('.header_btn');

burgerButtonOpen.addEventListener('click', function () {
  header.classList.add('active')
  document.body.classList.add('menu-open');
});

function isMobile() {
  return window.matchMedia("(max-width: 768px)").matches; // Можно изменить порог
}

function closeMenu() {
  if (isMobile()) {
    setTimeout(() => {
      header.classList.remove('active');
      document.body.classList.remove('menu-open');
    }, 500);
  } else {
    header.classList.remove('active');
    document.body.classList.remove('menu-open');
  }
}

headerButtonClose.addEventListener('click', closeMenu);
headerBtnForm.addEventListener('click', closeMenu);

menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});


document.addEventListener("DOMContentLoaded", () => {

  const section = document.querySelector('section.case-page');


  if (section) {
    const header = document.querySelector('header');
    if (header) {
      header.classList.add('header-case');
    }
  }

  let audio = document.getElementById("background-audio");
  let soundButton = document.querySelector('.header_btn-sound');

  if(audio){
    soundButton.addEventListener("click", () => {
      soundButton.classList.toggle('active');
  
      if (audio.paused) {
        audio.play().catch(err => console.warn("Ошибка воспроизведения:", err));
      } else {
        audio.pause();
      }
    });
  }
});