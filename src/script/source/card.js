import Swiper from "swiper";
import {Navigation} from 'swiper/modules';

import './../component/page/card/pseudoLogic.js';

const profileSlider = new Swiper('.card-profiles-slider', {
  grabCursor: true,  
  loop: true,
  lazy: true,
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
  lazy: true, // Включает поддержку ленивой загрузки
  on: {
    slideChange: function () {
      const currentSlide = this.slides[this.activeIndex];
      const iframe = currentSlide.querySelector('iframe[data-src]');
      if (iframe && !iframe.src) {
        iframe.src = iframe.getAttribute('data-src');
      }
    },
  },
  navigation: {
    nextEl: '.card-videos-slider-button-next',
    prevEl: '.card-videos-slider-button-prev',
  },
  slidesPerView: 1,
});
const cardImageSlider = new Swiper('.card-focus-slider', {
  loop: true,
  modules: [Navigation],
  allowTouchMove: false,
  navigation: {
    nextEl: '.card-focus-slider__button-next',
    prevEl: '.card-focus-slider__button-prev',
  },
  slidesPerView: 1,
});

const cardImageVideoSlider = new Swiper('.card-focus-video-slider__container', {
  loop: true,
  modules: [Navigation],
  allowTouchMove: false,
  lazy: true, // Включает поддержку ленивой загрузки
  on: {
    slideChange: function () {
      if (this.slides.length == 0) {
        return
      }
      const currentSlide = this.slides[this.activeIndex];
      const iframe = currentSlide.querySelector('iframe[data-src]');
      if (iframe && !iframe.src) {
        iframe.src = iframe.getAttribute('data-src');
      }
    },
  },
  navigation: {
    nextEl: '.card-focus-video-slider__button-next',
    prevEl: '.card-focus-video-slider__button-prev',
  },
  slidesPerView: 1,
});

//optimization google maps(если мы сразу не видим карту, то загружаем карту на первом слайде только когда мы увидим 10 процентов от его поверхности, иначе сразу отображаем)
document.addEventListener('DOMContentLoaded', function () {
  const iframe = document.querySelector('.card-map iframe');

  function loadIframe() {
    if (iframe && !iframe.src) {
      iframe.src = iframe.getAttribute('data-src');
    }
  }

  if (iframe.getBoundingClientRect().top < window.innerHeight) {
    loadIframe();
  } else {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadIframe();
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px',
      threshold: 0.1
    });
    observer.observe(iframe);
  }

});
