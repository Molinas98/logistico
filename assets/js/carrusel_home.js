document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper('.teatro-carrusel', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        initialSlide: 1,
        speed: 1000,
        preventCliks: true,
        slidesPerView: 'auto',
        autoplay: {
            delay: 100,
            disableOnInteraction: false,
        },
        loop: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 200,
            depth: 400,
            modifier: 1,
            slideShadows: false,
        },
        // Configuración de navegación (flechas)
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    swiper.on('slideChange', function () {
        if (swiper.activeIndex === 2) {
            swiper.params.autoplay.delay = 3000;
            swiper.autoplay.start();
        }
    });

    $(window).on('load', function() {
        swiper.update();
        swiper.autoplay.start();
    });
});