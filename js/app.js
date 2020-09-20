$(document).ready(function () {
  $(".clients__container").owlCarousel({
    loop: true,
    autoplay: false,
    nav: false,
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