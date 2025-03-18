document.addEventListener("DOMContentLoaded", () => {
    $(function () {
        var lastScrollTop = 0;
    
        function updateNavPosition() {
            var scrollTop = $(window).scrollTop();
            var isSmallScreen = window.matchMedia("(max-width: 1200px)").matches;
    
            if ((scrollTop > 100) && !($('.offcanvas-top').hasClass('show'))) {
                if (scrollTop > lastScrollTop) {
                    $('nav').css('top', '-170px');
                } else {
                    $('nav').css('top', isSmallScreen ? '0px' : '50px');
                }
                lastScrollTop = scrollTop;
            }
        }
    
        function handleScroll() {
            var scrollTop = $(window).scrollTop();
    
            updateNavPosition();
    
            if (scrollTop > 100) {
                $('.efecto-banner').addClass('efecto');
            } else {
                $('.efecto-banner').removeClass('efecto');
            }
        }
    
        // Escuchar eventos de desplazamiento
        $(window).on('scroll', handleScroll);
    
        // Escuchar cambios en el tamaño de la ventana
        $(window).on('resize', updateNavPosition);
    });


    const container = document.getElementById('responsiveContainer');

    function updateContainerClass() {
      if (window.innerWidth >= 1200) {
        container.classList.remove('container');
        container.classList.add('container-fluid');
      } else {
        container.classList.remove('container-fluid');
        container.classList.add('container');
      }
    }
    
  
    // Ejecutar al cargar la página y al redimensionar
    window.addEventListener('resize', updateContainerClass);
    window.addEventListener('load', updateContainerClass);

    $('.navbar-collapse a:not(.nav-link)').click(function(){
        $(".navbar-collapse").collapse('hide');
        $(".offcanvas-backdrop").collapse('hide');
        document.body.style.overflow = 'auto';
    });

    AOS.init({
        duration: 1000,
        once: true
    });
});

function re_contacto() {
    setTimeout(function() {
      window.location.href = "#contacto";;
    }, 500);
}