$(document).ready(function() {
    $('.area').hide();
    $('#info-area').show();
    $('.enlaces.hand').addClass('active');
  
    $('.enlaces').click(function() {
      $('.area').hide();
      $('#' + $(this).data('area')).show();
      $('.enlaces').removeClass('active');
      $(this).addClass('active');
      $('html, body').animate({
        scrollTop: $('#' + $(this).data('area')).offset().top - 150
      }, 200);
    });
    
});

