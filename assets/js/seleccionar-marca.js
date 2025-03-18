$(document).ready(function() {
    $('.marca-info').hide();
    $('#marca-hilagro').show();
    $('.marcas img').first().addClass('seleccionado');
  
    $('.marcas img').click(function() {
      $('.marca-info').hide();
      $('#' + $(this).data('div')).show();
      $('.marcas img').removeClass('seleccionado');
      $(this).addClass('seleccionado');
      $('html, body').animate({
        scrollTop: $('#' + $(this).data('div')).offset().top - 100
      }, 200);
    });
    
});

