var slider1 = new Swiper(".services__items,.header__banners", {
  loop:true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var slider2 = new Swiper(".trends__slider", {
  slidesPerView: 4,
  effect: "coverflow",
  centeredSlides: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// var slider3 = new Swiper(".about__list", {
//   grabCursor: true,
//   slidesPerView: 3,
//   spaceBetween: 30,
//   freeMode: true,
// });
$(function(){
  $('.menu__burger').on('click',function(){
      $('.menu__burger').toggleClass('menu__open');
      $('.menu').toggleClass('menu__open');
  });
});