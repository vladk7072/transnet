const header = document.querySelector(".header");

window.onscroll = function () {
  if (window.pageYOffset >= 100) {
    header.classList.add("header--scroll");
  }
  if (window.pageYOffset < 100) {
    header.classList.remove("header--scroll");
  }
};

const swiperGallery = new Swiper(".gallery__slider", {
  centeredSlides: true,
  slidesPerView: 2,
  spaceBetween: 32,
  initialSlide: 1,
  navigation: {
    nextEl: ".gallery__top-btn-next",
    prevEl: ".gallery__top-btn-prev",
  },
});
const swiperReviews = new Swiper(".reviews__slider", {
  slidesPerView: 2.14,
  spaceBetween: 24,
  navigation: {
    nextEl: ".reviews__top-btn-next",
    prevEl: ".reviews__top-btn-prev",
  },
});
