$(document).ready(function () {

  //header slider
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

  //portfolio box
  $(".portfolio__box").owlCarousel({
    loop: true,
    autoplay: true,
    nav: false,
    dots: true,
    margin: 200,
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

  
  //explanation
  $(".container__explanations").owlCarousel({
    loop: true,
    autoplay: true,
    nav: false,
    dots: true,
    margin: 200,
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
  
  //explanation
  $(".container__list").owlCarousel({
    loop: true,
    autoplay: false,
    nav: false,
    dots: true,
    margin: 200,
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


  // container Clients
  $(".containerClients").owlCarousel({
    loop: true,
    autoplay: false,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 7,
      },
      600: {
        items: 7,
      },
      1000: {
        items: 7,
      },
      1300: {
        items: 7,
      },
    },
  });

});


  // service tabs

    // service selector
    let serviceOneButton = document.querySelector('.service_one_button');
    let serviceTwoButton = document.querySelector('.service_two_button');
    let serviceThreeButton = document.querySelector('.service_three_button');
    let serviceFourButton = document.querySelector('.service_four_button');


    // service selector
    let serviceOne = document.querySelector('.service_one');
    let serviceTwo = document.querySelector('.service_two');
    let serviceThree = document.querySelector('.service_three');
    let serviceFour = document.querySelector('.service_four');

    // making tabs
    serviceOneButton.addEventListener('click', ()=> {
      serviceOne.style.display = "block";
      serviceTwo.style.display = "none";
      serviceThree.style.display = "none";
      serviceFour.style.display = "none";
    });

    serviceTwoButton.addEventListener('click', ()=> {
      serviceOne.style.display = "none";
      serviceTwo.style.display = "block";
      serviceThree.style.display = "none";
      serviceFour.style.display = "none";
    });

    serviceThreeButton.addEventListener('click', ()=> {
      serviceOne.style.display = "none";
      serviceTwo.style.display = "none";
      serviceThree.style.display = "block";
      serviceFour.style.display = "none";
    });

    serviceFourButton.addEventListener('click', ()=> {
      serviceOne.style.display = "none";
      serviceTwo.style.display = "none";
      serviceThree.style.display = "none";
      serviceFour.style.display = "block";
    });


// sticking pagemenu while scrolling
let pageMenu = document.querySelector('.pageMenu');

window.addEventListener('scroll', () => {
  const scroll = window.scrollY;

  console.clear();
  console.log(scroll);

  if(scroll >798){
    pageMenu.classList.add('pageMenuTop');
    document.querySelector('.headerSlider').style.opacity = "0";
  } else {
    pageMenu.classList.remove('pageMenuTop');
    document.querySelector('.headerSlider').style.opacity = "1";
  }
})