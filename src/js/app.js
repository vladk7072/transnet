const mobBtn = document.querySelector(".header__mob");
const mobMenu = document.querySelector(".header__top");
mobBtn.addEventListener("click", () => {
  mobBtn.classList.toggle("header__mob--active");
  mobMenu.classList.toggle("header__top--active");
});

document.addEventListener("click", function (event) {
  if (
    !event.target.matches(".header__top") &&
    !event.target.matches(".header__top--active") &&
    !event.target.matches(".header__mob-btn") &&
    !event.target.matches(".header__mob--active")
  ) {
    mobBtn.classList.remove("header__mob--active");
    mobMenu.classList.remove("header__top--active");
  }
});

const header = document.querySelector(".header");

window.onscroll = function () {
  if (window.pageYOffset >= 50) {
    header.classList.add("header--scroll");
  }
  if (window.pageYOffset < 50) {
    header.classList.remove("header--scroll");
  }
};

const swiperGallery = new Swiper(".gallery__slider", {
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 10,
  initialSlide: 0,
  navigation: {
    nextEl: ".gallery__top-btn-next",
    prevEl: ".gallery__top-btn-prev",
  },
  breakpoints: {
    641: {
      centeredSlides: true,
      slidesPerView: 2,
      spaceBetween: 10,
      initialSlide: 1,
    },
    955: {
      centeredSlides: true,
      slidesPerView: 2,
      spaceBetween: 10,
      initialSlide: 1,
      spaceBetween: 32,
    },
  },
});
const swiperReviews = new Swiper(".reviews__slider", {
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".reviews__top-btn-next",
    prevEl: ".reviews__top-btn-prev",
  },
  breakpoints: {
    641: {
      slidesPerView: 1.4,
    },
    955: {
      slidesPerView: 2.14,
      spaceBetween: 24,
    },
  },
});
