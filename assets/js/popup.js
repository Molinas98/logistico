$(document).ready(function () {
    $('.btn-plano').click(function () {
        $('#'+$(this).data('div')).removeClass("collapse");
        $('#'+$(this).data('div')).addClass('zoom-in-effect-2');
        $('.overlay').toggleClass("collapse");
    });

    $('.btn-actividad').click(function () {
        $('#'+$(this).data('div')).removeClass("collapse");
        $('#'+$(this).data('div')).addClass('zoom-in-effect-2');
        $('.overlay').toggleClass("collapse");
    });

    $('.cerrar_modal').click(function () {
        $('#'+$(this).data('div')).addClass("collapse");
        $('.overlay').toggleClass("collapse");
    });

});