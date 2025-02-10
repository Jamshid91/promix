var productSlider = new Swiper('.big-card', {
    spaceBetween: 0,
    centeredSlides: false,
    loop:true,
    loopedSlides: 4,
    resizeObserver:true,

    navigation: {
      nextEl: '.swiper-product-next',
      prevEl: '.swiper-product-prev',
    },
});
var productThumbs = new Swiper('.small-card', {
    spaceBetween: 12,
    loop: true,
    slideToClickedSlide: true,
    slidesPerView: 4, 
});
productSlider.controller.control = productThumbs;
productThumbs.controller.control = productSlider;



const article = new Swiper('.swiper-article', {
    loop: false,
    scrollbar: {
        el: '.article-scrollbar',
        draggable: true,
        snapOnRelease: true,
        dragSize: 'auto',
      },
    breakpoints: {
        0: {
          slidesPerView: 1.2,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2.2,
          spaceBetween: 14,
        },
  }
  });