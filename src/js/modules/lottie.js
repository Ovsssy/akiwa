//preloader anim
let preloaderAnimation = lottie.loadAnimation({
    container: document.querySelector(".preloader_animation"),
    renderer: "svg",
    autoplay: true,
    loop: false,
    path: "/wp-content/themes/iskra-theme/front/static/animation/Preloader.json",
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
});

let heroSection = document.querySelector('.hero-section');

if (heroSection) {

    setTimeout(() => {
        let heroSectionAnimation = lottie.loadAnimation({
            container: document.querySelector(".hero-section_lottie"),
            renderer: "svg",
            autoplay: true,
            loop: false,
            path: "/wp-content/themes/iskra-theme/front/static/animation/StartBlock.json",
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        });
    }, 3000); // Задержка в 3 секунды
    

    function loadLottieAnimation() {
        let animationPath = window.innerWidth <= 768
            ? "/wp-content/themes/iskra-theme/front/static/animation/start-mobile.json"
            : "/wp-content/themes/iskra-theme/front/static/animation/start.json";

        let startAnimation = lottie.loadAnimation({
            container: document.querySelector(".start_lottie"),
            renderer: "svg",
            autoplay: false,
            loop: false,
            path: animationPath,
        });

        let observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    startAnimation.play();
                    observer.disconnect();
                }
            });
        }, { threshold: 0.5 });

        observer.observe(document.querySelector(".start_lottie"));

        // Анимация для creation
        let creationAnimation = lottie.loadAnimation({
            container: document.querySelector(".creation_animation"),
            renderer: "svg",
            autoplay: false,
            loop: false,
            path: "/wp-content/themes/iskra-theme/front/static/animation/creation.json",
        });

        let creationObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    creationAnimation.play();
                    creationObserver.disconnect();
                }
            });
        }, { threshold: 0.9 });

        creationObserver.observe(document.querySelector(".creation_animation"));
    }

    document.addEventListener("DOMContentLoaded", loadLottieAnimation);
}