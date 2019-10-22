$(document).ready(function () {
    $(".banner").owlCarousel({
        items: 1,
        nav: true,
        autoplay: true,
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        responsive: {
            0: {},
            600: {
                nav: false
            },
            1000: {}
        }
    });

    //this is for banar slide text animation in out on slide
    $(".banner").on('translate.owl.carousel', function () {
        $('.content h3').removeClass('fadeInLeft animated').hide();
        $('.content p').removeClass('fadeInUp animated').hide();
        $('.content a').removeClass('wow fadeInDown animated').hide();
    })

    $(".owl-carousel").on('translated.owl.carousel', function () {
        $('.owl-item.active .content h3').addClass('fadeInLeft animated').show();
        $('.owl-item.active .content p').addClass('fadeInUp animated').show();
        $('.owl-item.active .content a').addClass('wow fadeInDown animated').show();
    })

    $(".lattest-update").owlCarousel({
        items: 4,
        nav: false,
        dots: false,
        autoplay: true,
        loop: true,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    $(".advisor").owlCarousel({
        items: 3,
        nav: false,
        dots: false,
        autoplay: true,
        loop: true,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

    $(".testimonials").owlCarousel({
        items: 4,
        nav: false,
        dots: false,
        autoplay: true,
        loop: true,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });

    $(".progress-bar").loading();

    new WOW().init();
});
