$(document).ready(function () {
    $(".banner").owlCarousel({
        items :1,
        nav:true,
        autoplay:true,
        loop:true,
    });

    $(".lattest-update").owlCarousel({
        items :4,
        nav:false,
        dots:false,
        autoplay:true,
        loop:true,
        margin:20,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    $(".testimonials").owlCarousel({
        items :4,
        nav:false,
        dots:false,
        autoplay:true,
        loop:true,
        margin:20,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });

    $(".progress-bar").loading();
});