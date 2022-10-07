AOS.init({
  duration: 1200,
})

  $(document).ready(function(){
    $('.banner .owl-carousel,.banner-inner .owl-carousel').owlCarousel(
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


    $('.program-management .owl-carousel').owlCarousel(
        {
            loop:true,
            margin:10,
            nav:true,
            dots:false,
            autoplay: true,
            animateOut: 'slideOutUp',
           // animateIn: 'slideInUp',
           autoplayHoverPause:true,
           mouseDrag:true,
           autoplayTimeout:8000,
            responsive:{
                0:{
                    items:2,
                    nav:true,
                    dots:false,
                },
                600:{
                    items:2,
                    nav:true,
                    dots:false,
                },
                1000:{
                    items:3
                }
            }
        }
    );






  });

     jQuery(document).ready(function($) {
        $('.jarallax').jarallax({
          speed: 0.5,
  disableParallax: function () {
    return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
  },
  disableVideo: function () {
    return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
  }
         
        });  

        $('.jarallax-keep-img').jarallax({
            keepImg: true,
            speed: 0.5,
          }); 

           

     })


            jQuery(document).ready(function($) {
    
               var allPanels = $('.accordioncontent').hide();
                  
                $('.accordionheader,.closebutton').click(function() {

                    $('.accordionheader.active').removeClass('active');
                    $(this).addClass('active')

                  allPanels.slideUp();
                  $(this).parent().next().slideDown();
                  return false;
                });
              
              })

    jQuery(document).ready(function($) {
   
  })

    
//$('[data-scribe="element:user_link"]').addClass("col-md-6");
//$('[data-scribe="element:user_link"]').addClass("col-md-6");


//$('#Twitter-widget').addClass("owl-carousel owl-theme");