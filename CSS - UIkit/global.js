
$(document).ready( function () {

    jQuery(function ($) {
        $('#scroll-trigger').on('scrolled', function () {
            alert('Udało się.');
        });
    });

    jQuery(function ($) {
        $('#scroll-trigger2').on('scrolled', function () {
            alert('Po raz kolejny działa.');
        });
    });

    var i = 0;

    $('body').on('click', function(){
        i++;
        $('#Licznik span').html(i);
    });

    $( 'body' ).keypress(function() {
        i++;
        $('#Licznik span').html(i);
    });
});
