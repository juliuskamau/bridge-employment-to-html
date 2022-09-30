AOS.init({
  duration: 1200,
})

  $(document).ready(function(){
    $('.banner .owl-carousel').owlCarousel(
        {
            loop:true,
            margin:0,
            nav:false,
            dots:true,
            autoplay: true,
            animateOut: 'slideOutUp',
           // animateIn: 'slideInUp',
           autoplayHoverPause:true,
           mouseDrag:true,
           autoplayTimeout:8000,
            responsive:{
                0:{
                    items:1,
                    nav:true,
                    dots:false,
                },
                600:{
                    items:1,
                    nav:true,
                    dots:false,
                },
                1000:{
                    items:1
                }
            }
        }
    );
  });

     jQuery(document).ready(function($) {
        $('.jarallax').jarallax({
          speed: 0.5,
         
        });  

        $('.jarallax-keep-img').jarallax({
            keepImg: true,
            speed: 0.5,
          }); 

     })
    
//$('[data-scribe="element:user_link"]').addClass("col-md-6");
//$('[data-scribe="element:user_link"]').addClass("col-md-6");