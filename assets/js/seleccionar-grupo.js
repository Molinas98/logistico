$(document).ready(function() {
    $('.info-grupo').hide();
    $('#bcmm').show();
    $('.grupo').last().addClass('active');
  
    $('.grupo').click(function() {
      if($(this).children('span').data('grupo') == "todos") {
        $('.organizacion').css('display','none');
        $('.col-md-6.col-lg-7.col-xl-9').removeClass('col-md-6 col-lg-7 col-xl-9').addClass('col-sm-12');
        $('.grupo').removeClass('active');
        $(this).addClass('active');
      } else {
        $('.info-grupo').hide();
        $('.organizacion').css('display','block');
        $('.col-sm-12').removeClass('col-sm-12').addClass('col-md-6 col-lg-7 col-xl-9');
        $('#' + $(this).children('span').data('grupo')).show();
        $('.grupo').removeClass('active');
        $(this).addClass('active');
      }
    });
    

    function recargarScript(url) {
      $('script[src="' + url + '"]').remove(); // Eliminar el script anterior
      $('<script>')
          .attr('src', url)
          .attr('type', 'text/javascript')
          .appendTo('body'); // Agregar el nuevo script
    }

});

