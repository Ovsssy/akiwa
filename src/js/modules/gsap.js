let headerFooterAnimation = lottie.loadAnimation({
    container: document.querySelector(".header_animation"),
    renderer: "svg",
    autoplay: false,
    loop: false,
    path: "/wp-content/themes/iskra-theme/front/static/animation/Footer.json",
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
});
document.addEventListener("DOMContentLoaded", async () => {
    async function firstFunction() {
        return new Promise((resolve) => {
            gsap.registerPlugin(ScrollTrigger);
            let heroSection = document.querySelector('.hero-section');

            if (heroSection) {
                gsap.registerPlugin(ScrollTrigger);

                let cards = gsap.utils.toArray(".target-audience_card");

                gsap.to(cards, {
                    y: (index) => index * 10,
                    opacity: 1,
                    stagger: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".target-audience",
                        start: "top top",
                        end: `+=${cards.length * 75}%`,
                        pin: true,
                        scrub: true,
                        markers: false,
                        onUpdate: function (self) {
                            if (self.progress === 1) {
                                resolve();
                            }
                        }
                    }
                });
            }
        });
    }

    async function thirdFunction() {
        if (window.innerHeight >= 700) {
            gsap.to("header", {
                scrollTrigger: {
                    trigger: "#footer",
                    start: "85% bottom",
                    end: "bottom top",
                    toggleClass: { targets: "header", className: "hidden" },
                    scrub: true,
                    onEnter: () => {
                        headerFooterAnimation.setDirection(1);
                        headerFooterAnimation.play();
                        document.querySelector("header").classList.add("hidden");
                    },
                    onLeaveBack: () => {
                        headerFooterAnimation.setDirection(-10);
                        headerFooterAnimation.play();
                        document.querySelector("header").classList.remove("hidden");
                    }
                }
            });
        }
    }

    await firstFunction();
    await thirdFunction();
});


let companyPeopleAnimation = lottie.loadAnimation({
    container: document.querySelector(".company-people_lottie"),
    renderer: "svg",
    autoplay: false,
    loop: false,
    path: "/wp-content/themes/iskra-theme/front/static/animation/PhotoBlock.json",
});

if (window.innerWidth > 991) {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".company-people",
            start: "top top",
            end: "+=2000",
            pin: true,
            scrub: 1,
        }
    });

    tl.to(".company-people_image:nth-child(1)", { x: "-50%", duration: 2 }, 0);
    tl.to(".company-people_image:nth-child(2)", { x: "50%", duration: 2 }, 0);

    tl.to(".title2", {
        onComplete: () => {
            document.querySelector(".company-people_images-block .title2").style.animation = "companyPeopleText 0.6s ease-out forwards, letter 0.6s ease-in-out forwards";
            document.querySelector(".company-people_images-block .title2").style.width = "65.6rem"
        }
    }, "+=0.5");
    tl.to(".company-people_lottie", {
        opacity: 1,
        duration: 1,
        onComplete: () => companyPeopleAnimation.play()
    }, "-=0.5");

    tl.to(".company-people_image:nth-child(4)", { y: "0", opacity: 1, duration: 2 }, "+=0.5");

    tl.to(".company-people_image:nth-child(5)", { opacity: 1, duration: 0.2 }, "+=0.5")
        .to(".company-people_image:nth-child(5)", { x: "-102.2%", duration: 2 }, "+=0.5");
    tl.to(".company-people_image:nth-child(6)", { opacity: 1, duration: 0.2 }, "-=2")
        .to(".company-people_image:nth-child(6)", { x: "102.2%", duration: 2 }, "-=2");
}


gsap.to(".help-section_image", {
    y: "-30%",
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".help-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    }
});

document.addEventListener("DOMContentLoaded", () => {
    let video = document.querySelector(".help-section_image");

    if (video) {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: ".help-section_image-wrapper",
            start: "top 80%", // Начнет играть, когда 80% блока появится в зоне видимости
            end: "bottom top", // Остановится, когда выйдет из экрана
            onEnter: () => video.play(),
            onLeave: () => video.pause(),
            onEnterBack: () => video.play(),
            onLeaveBack: () => video.pause(),
        });
    }
});
