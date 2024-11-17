import Swiper from "swiper";
import {Navigation} from 'swiper/modules';
const profileSlider = new Swiper('.card-profiles-slider', {
  grabCursor: true,  
  loop: true,
  modules: [Navigation],
  navigation: {
    nextEl: '.card-profiles-slider-button-next',
    prevEl: '.card-profiles-slider-button-prev',
  },
  slidesPerView: 3,
  spaceBetween: 10,
  breakpoints: {
    1460: {
      slidesPerView: 7,
    },
    1200: {
      slidesPerView: 6,
    },
    1050: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    750: {
      slidesPerView: 4,
    },
  }
});
const videoSlider = new Swiper('.card-videos-slider', {
  grabCursor: true,  
  loop: true,
  modules: [Navigation],
  navigation: {
    nextEl: '.card-videos-slider-button-next',
    prevEl: '.card-videos-slider-button-prev',
  },
  slidesPerView: 1,
});
const cardImageSlider = new Swiper('.card-image-slider', {
  loop: true,
  modules: [Navigation],
  allowTouchMove: false,
  navigation: {
    nextEl: '.card-image-slider__button-next',
    prevEl: '.card-image-slider__button-prev',
  },
  slidesPerView: 1,
});

const cardImageVideoSlider = new Swiper('.card-image-video-slider__container', {
  loop: true,
  modules: [Navigation],
  allowTouchMove: false,
  navigation: {
    nextEl: '.card-image-video-slider__button-next',
    prevEl: '.card-image-video-slider__button-prev',
  },
  slidesPerView: 1,
});



