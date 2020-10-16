$ = jQuery.noConflict();

jQuery(function($) {

    [].forEach.call(document.querySelectorAll('.my-slider'), function (el) {
        tns({

            speed: 2000,
            container: el,
            controls: true,
            controlsContainer: ".js-controls",
            mode: "carousel",
            /*controls: false,*/
            controlsText: false,
            nav: false,
            autoplayButtonOutput: false,
            autoHeight: false,
            mouseDrag: true,
            responsive: {
                360: {
                    items: 2
                },
                600: {
                    items: 4
                },
                900: {
                    items: 6
                },
            },

        });
    });

//scroll to appear
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 1000)
            $('.scroll-top-arrow').fadeIn('slow');
        else
            $('.scroll-top-arrow').fadeOut('slow');
    });


//Click event to scroll to top
    $(document).on('click', '.scroll-top-arrow', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});