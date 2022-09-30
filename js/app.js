
$('.banner .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

     jQuery(document).ready(function($) {
        $('.jarallax').jarallax({
          speed: 0.5,
         
        });  

        $('.jarallax-keep-img').jarallax({
            keepImg: true,
            speed: 0.5,
          }); 

    });