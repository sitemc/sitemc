$('.owl-carousel').owlCarousel({
  autoplay: true,
  dots: false, 
  items: 1, 
  animateOut: 'fadeOut',
  autoplayHoverPause: false,
  loop: true,
  margin: 0,
  navText: ['вперед', 'назад'],  
  // theme : "owl-theme",
  responsiveClass: true,
  nav: false,
  
  responsive: {
    0: {
      items: 1
    },
    540: {
      items: 1
    },
    720: {
      items: 1
    },
    960: {
      items: 1
    }
  }
});




