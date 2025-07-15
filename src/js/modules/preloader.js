document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('load', function () {
        const mainContent = document.getElementById('main-content');
        const preloader = document.getElementById('preloader');
        const isPolicyPage = document.querySelector('.privacy-policy');

        if (!mainContent || !preloader) return; // Выходим, если нет основного контента или прелоадера
        if (isPolicyPage) return;

        document.documentElement.classList.add('modal-active');
        document.body.classList.add('modal-active');

        preloader.style.opacity = '1';
        preloader.style.visibility = 'visible';
        mainContent.style.opacity = '0';
        mainContent.style.visibility = 'hidden';

        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';

            mainContent.style.opacity = '1';
            mainContent.style.visibility = 'visible';

        document.documentElement.classList.remove('modal-active');
        document.body.classList.remove('modal-active');

        const video = document.getElementById('videoMobile');

        video.play();

            // Если есть якорь в URL, прокручиваем к элементу с соответствующим id
            if (window.location.hash) {
                const targetId = window.location.hash.substring(1); // получаем id из хеша
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        }, 1900);
    });
});

let main = document.querySelector('.main');

if (main){
    document.addEventListener('DOMContentLoaded', function () {
        let last = document.querySelector('.progress-radial');
    
        let intervalId = setInterval(function () {
            let currentClass = last.className.split(' ')[1]; // получаем второй класс
            let currentPercentage = parseInt(currentClass.substring(9, 12)); // извлекаем процент из класса
            let newPercentage = currentPercentage + 1;
    
            if (newPercentage > 100) {
                newPercentage = 100;
                clearInterval(intervalId);
            }
    
            let newClass = 'progress-' + newPercentage;
            last.classList.remove(currentClass); // удаляем старый класс
            last.classList.add(newClass); // добавляем новый класс
        }, 15);
    });
}
