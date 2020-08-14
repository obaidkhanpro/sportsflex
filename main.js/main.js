$(document).ready(function(){
    $('.slider-content').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      })
      $('.owl-carousel ').owlCarousel({
          center: true,
          items:2,
          loop:true,
          margin:10,
          responsive:{
             641:{
              items: 3
            },
              992:{
                  items:4
                }
            }
        })
        $('.owl-carousel ').owlCarousel({
            center: true,
            items:2,
            loop:true,
            margin:10,
            responsive:{
                600:{
                    items:4
                }
            }
        })
        AOS.init();
        
    });
        