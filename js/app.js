$(document).ready(function () {
  $(".headerSlider__container").owlCarousel({
    loop: true,
    autoplay: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1300: {
        items: 1,
      },
    },
  });

});


// sticking pagemenu while scrolling
let pageMenu = document.querySelector('.pageMenu');