document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.hero-slider-new__swiper', {
    slidesPerView: 1,
    autoplayDisableOnInteraction: false,
    spaceBetween: 0,
    effect: 'fade',
    loop: true,
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 10000,
    },
    pagination: {
      el: '.hero-slider-new__dots',
      clickable: true,
    },
  })
})
