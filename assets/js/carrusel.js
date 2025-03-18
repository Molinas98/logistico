$(document).ready(function () {

    $('.carrusel-clientes').slick({
        dots: false,
        infinite: true,
        arrows: false,
        autoplay:true,
        autoplaySpeed: 0,
        speed: 2000,
        slidesToShow: 6,
        slidesToScroll: 1,
        cssEase: 'linear', // Transición continua y sin pausas
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                }
            }
        ]
    });

    $('.testimonios-carrusel').slick({
        dots: false,
        infinite: true,
        arrows: true,
        autoplay:true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        prevArrow: '<img class="prev" src="./assets/img/others/prev.png">',
        nextArrow: '<img class="next" src="./assets/img/others/next.png">',
    });

});
