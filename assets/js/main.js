$(document).ready(function ($) {
    "use strict";
  
    jQuery(".menu-toggle").click(function () {
      jQuery(".main-navigation").toggleClass("toggled");
    });
  
    jQuery(".header-menu ul li a").click(function () {
      jQuery(".main-navigation").removeClass("toggled");
    });
  
    gsap.registerPlugin(ScrollTrigger);
  
    var elementFirst = document.querySelector(".site-header");
    ScrollTrigger.create({
      trigger: "body",
      start: "30px top",
      end: "bottom bottom",
  
      onEnter: () => myFunction(),
      onLeaveBack: () => myFunction(),
    });
  
    function myFunction() {
      elementFirst.classList.toggle("sticky_head");
    }
  });
  
  function slider_carouselInit() {
    $(".owl-carousel.slider_carousel").owlCarousel({
      dots: false,
      loop: true,
      margin: 30,
      stagePadding: 2,
      autoplay: false,
      nav: true,
      navText: [
        "<i class='far fa-arrow-alt-circle-left'></i>",
        "<i class='far fa-arrow-alt-circle-right'></i>",
      ],
      autoplayTimeout: 1500,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
      },
    });
  }
  slider_carouselInit();
  