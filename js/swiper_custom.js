var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    // slidesPerView: 4,
    // spaceBetween: 70,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      // when window width is >= 320px
      300: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      700: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      900: {
        slidesPerView: 4,
        spaceBetween: 70
      },

    }

  });

var mySwiper  = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    // slidesPerView: 4,
    // spaceBetween: 70,

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    breakpoints: {
      // when window width is >= 320px
      300: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      700: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      900: {
        slidesPerView: 4,
        spaceBetween: 70
      },

    }

  });

    
var mySwiper2  = new Swiper('.swiper-product-container', {
  // Optional parameters
  // loop: true,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true, 
  }, 
  // clickable: true,

  breakpoints: {
    // when window width is >= 320px
    300: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    450: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    700: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    // when window width is >= 640px
    900: {
      slidesPerView: 4,
      spaceBetween: 15
    },

  }

});
 