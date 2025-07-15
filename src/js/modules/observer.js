document.addEventListener("DOMContentLoaded", () => {
  // Функция для определения порога срабатывания анимации в зависимости от ширины экрана
  const getThresholdForMobile = () => {
    return window.innerWidth <= 768 ? 0.1 : 0.2; // Если экран меньше или равен 768px, порог 0.1, иначе 0.2
  };

  // Настройки для Intersection Observer
  const options = {
    root: null, // отслеживаем элементы относительно области просмотра
    rootMargin: "0px", // область вокруг области просмотра
    threshold: getThresholdForMobile() // процент элемента, который должен быть видимым для срабатывания
  };

  // Функция, которая будет вызываться при пересечении
  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  };

  // Создаём экземпляр Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, options);

  const elementsToAnimate = document.querySelectorAll('.company-people, .motivation, .help-section_title-text-wrapper, .help-section_description-statistic-wrapper, .creation, .start, .case, .cases_text-wrapper, .our-team_text-wrapper, .our-team_list-row, .other-cases, .target-audience, .form-block, .footer');

  // Функция анимации чисел
  function animateNumbers(element, start = 0, end, duration = 600) {
    let startTime;
    function updateNumber(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      element.textContent = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    }
    requestAnimationFrame(updateNumber);
  }

  function startCounting(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const number = entry.target;
        const match = number.dataset.value.match(/\d+/);
        const endValue = match ? Number(match[0]) : NaN;
        animateNumbers(number, 0, endValue);
        observer.unobserve(number); // Остановить наблюдение после старта анимации
      }
    });
  }
  const numberObserver = new IntersectionObserver(startCounting, options);

  document.querySelectorAll(".help-section_numbers").forEach(el => numberObserver.observe(el));

  // Начинаем наблюдение за элементом .company-people
  elementsToAnimate.forEach(element => observer.observe(element));

  // Обновляем порог срабатывания анимации при изменении размера экрана
  window.addEventListener("resize", () => {
    observer.disconnect(); // Отключаем старое наблюдение
    options.threshold = getThresholdForMobile(); // Обновляем порог
    elementsToAnimate.forEach(element => observer.observe(element)); // Перезапускаем наблюдение
  });
});

const observer2 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate'); // Добавляем класс animate
      observer.unobserve(entry.target); // Останавливаем наблюдение за этим элементом
    }
  });
}, { threshold: 0.5 });

// Выбираем все элементы с классом company-people_image и начинаем за ними наблюдать
document.querySelectorAll('.company-people_image').forEach((element) => {
  observer2.observe(element);
});


if (window.innerWidth <= 991) {

  let companyPeopleAnimation = lottie.loadAnimation({
    container: document.querySelector(".company-people_lottie"),
    renderer: "svg",
    autoplay: false, // Не запускаем анимацию сразу
    loop: false,
    path: "/wp-content/themes/iskra-theme/front/static/animation/PhotoBlock.json", // Путь к вашей анимации
  });

  // Настроим наблюдатель за элементом
  const observer2 = new IntersectionObserver((entries, observer2) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate'); // Добавляем класс animate на родительский блок
        companyPeopleAnimation.play(); // Запускаем Lottie анимацию
        observer2.unobserve(entry.target); // Останавливаем наблюдение за этим элементом
      }
    });
  }, { threshold: 0.5 }); // 50% элемента должно быть видно

  // Наблюдаем за элементом с классом company-people_lottie-wrapper
  document.querySelectorAll('.company-people_lottie-wrapper').forEach((element) => {
    observer2.observe(element);
  });

}

document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector("footer");
  const header = document.querySelector(".header");
  const headerLogo = document.querySelector(".header_logo");
  const letterBefore = document.querySelector(".letter-before");
  const svgTemplate = `<svg class="letter-after header_logo-letter-w" xmlns="http://www.w3.org/2000/svg" width="26" height="18" viewBox="0 0 26 18" fill="none" style="opacity: 0; transition: opacity 0.1s ease-in;">
                    <path
                        d="M0.398438 0.432617H3.57631L7.98295 12.4174L12.3214 0.432617H14.0295L18.5725 12.2791L22.7746 0.432617H25.883L19.3584 17.7522H17.7873L13.2086 5.55935L8.6993 17.7522H7.12824L0.398438 0.432617Z"
                        fill="black" />
                </svg>`;

  if (!footer || !letterBefore || !headerLogo) return;

  let isAnimating = false;
  let lastInserted = letterBefore;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (!isAnimating) {
          header.classList.remove("animate-reverse");
          header.classList.add("animate");

          let delay = 0;
          for (let i = 0; i < 9; i++) {
            setTimeout(() => {
              lastInserted.insertAdjacentHTML("afterend", svgTemplate);
              lastInserted = lastInserted.nextElementSibling;
              
              // Делаем элемент видимым после его вставки
              setTimeout(() => {
                if (lastInserted) lastInserted.style.opacity = "1";
              }, 50);
            }, delay);
            delay += 100;
          }

          isAnimating = true;
        }
      } else {
        if (isAnimating) {
          header.classList.remove("animate");
          header.classList.add("animate-reverse");

          const svgs = Array.from(headerLogo.querySelectorAll(".letter-after")).reverse(); // Разворачиваем массив
          let delay = 0;
          svgs.forEach((svg) => {
            setTimeout(() => {
              svg.style.opacity = "0"; // Плавное исчезновение
              setTimeout(() => svg.remove(), 200); // Удаляем после завершения анимации
            }, delay);
            delay += 100;
          });

          lastInserted = letterBefore;
          isAnimating = false;
        }
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(footer);
});


// document.addEventListener("DOMContentLoaded", () => {
//   const options = { threshold: 0.2 };

//   const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("animate");
//         observer.unobserve(entry.target);
//       }
//     });
//   }, options);

//   document.querySelectorAll(
//     ".company-people, .motivation, .help-section_title-text-wrapper, .help-section_description-statistic-wrapper, .creation, .start, .case, .cases_text-wrapper, .our-team_text-wrapper, .our-team_list-row, .other-cases, .target-audience, .form-block, .footer, .company-people_image"
//   ).forEach(el => observer.observe(el));

//   function animateNumbers(element, end, duration = 600) {
//     let startTime;
//     function updateNumber(timestamp) {
//       if (!startTime) startTime = timestamp;
//       const progress = Math.min((timestamp - startTime) / duration, 1);
//       element.textContent = Math.floor(progress * end);
//       if (progress < 1) requestAnimationFrame(updateNumber);
//     }
//     requestAnimationFrame(updateNumber);
//   }

//   const numberObserver = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         const number = entry.target;
//         const endValue = Number(number.dataset.value.match(/\d+/)?.[0]);
//         if (!isNaN(endValue)) animateNumbers(number, endValue);
//         observer.unobserve(number);
//       }
//     });
//   }, options);

//   document.querySelectorAll(".help-section_numbers").forEach(el => numberObserver.observe(el));

//   if (window.innerWidth <= 991) {
//     const lottieContainer = document.querySelector(".company-people_lottie");
  
//     if (lottieContainer && !lottieContainer.dataset.lottieInitialized) {
//       lottieContainer.dataset.lottieInitialized = "true"; // Флаг, что анимация уже загружена
  
//       let lottieAnimation = lottie.loadAnimation({
//         container: lottieContainer,
//         renderer: "svg",
//         autoplay: false,
//         loop: false,
//         path: "../../static/animation/PhotoBlock.json",
//       });
  
//       const lottieObserver = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate");
//             lottieAnimation.play();
//             observer.unobserve(entry.target);
//           }
//         });
//       }, { threshold: 0.5 });
  
//       document.querySelectorAll(".company-people_lottie-wrapper").forEach(el => lottieObserver.observe(el));
//     }
//   }
  

//   const footer = document.querySelector("footer");
//   const header = document.querySelector(".header");
//   const headerLogo = document.querySelector(".header_logo");
//   const letterBefore = document.querySelector(".letter-before");
  
//   if (footer && header && headerLogo && letterBefore) {
//     let isAnimating = false;
//     let lastInserted = letterBefore;

//     const svgTemplate = `<svg class='letter-after header_logo-letter-w' xmlns='http://www.w3.org/2000/svg' width='26' height='18' viewBox='0 0 26 18' fill='none' style='opacity: 0; transition: opacity 0.1s ease-in;'>
//       <path d='M0.398438 0.432617H3.57631L7.98295 12.4174L12.3214 0.432617H14.0295L18.5725 12.2791L22.7746 0.432617H25.883L19.3584 17.7522H17.7873L13.2086 5.55935L8.6993 17.7522H7.12824L0.398438 0.432617Z' fill='black' />
//     </svg>`;

//     const logoObserver = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting && !isAnimating) {
//         header.classList.replace("animate-reverse", "animate");
//         isAnimating = true;
//         for (let i = 0; i < 9; i++) {
//           setTimeout(() => {
//             lastInserted.insertAdjacentHTML("afterend", svgTemplate);
//             lastInserted = lastInserted.nextElementSibling;
//             setTimeout(() => lastInserted.style.opacity = "1", 50);
//           }, i * 100);
//         }
//       } else if (!entry.isIntersecting && isAnimating) {
//         header.classList.replace("animate", "animate-reverse");
//         [...headerLogo.querySelectorAll(".letter-after")].reverse().forEach((svg, i) => {
//           setTimeout(() => {
//             svg.style.opacity = "0";
//             setTimeout(() => svg.remove(), 200);
//           }, i * 100);
//         });
//         lastInserted = letterBefore;
//         isAnimating = false;
//       }
//     }, { threshold: 0.5 });

//     logoObserver.observe(footer);
//   }
// });

