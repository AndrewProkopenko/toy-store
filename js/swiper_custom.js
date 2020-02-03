;(function () {
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

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
      // when window width is >= 700px
      700: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 900px
      900: {
        slidesPerView: 4,
        spaceBetween: 70
      },

    }

  });

})();