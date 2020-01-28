(function ($) {
    "use strict";
    jQuery(document).on('ready', function () {
        $(window).on('scroll', function () {
            if ($(this).scrollTop() >= 50) {
                $('div#scrollup').addClass('animated flipInY').fadeIn(200);
            } else {
                $('div#scrollup').fadeOut(200);
            }
        });
        $('div#scrollup').on('click', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
        new Swiper('.swiper-container-portfolios', {
            pagination: '.swiper-pagination-portfolios',
            a11y: true,
            keyboardControl: true,
            autoHeight: true,
            speed: 800,
            paginationClickable: true
        });
    });
    jQuery(window).on('load', function () {
        $('div#loading').fadeOut(500);
        window.sr = ScrollReveal({
            reset: false
        });
        var commonCards = '.widget-holder,.post,.disqus-comment';
        sr.reveal(commonCards, {
            duration: 1100
        });
        $('.back-button').on('click', function () {
            history.go(-1);
        });
    });
})(jQuery);