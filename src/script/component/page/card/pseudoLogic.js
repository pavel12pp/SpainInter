/*
card-focus-active
addcontrols-active
info-active
contact-active
video-active
*/
const body = document.querySelector('body');

document.querySelector('#card-close-button').addEventListener('click', (event) => {
  body.classList.add('card-focus-active')  
});
document.querySelector('#card-focus-close-button').addEventListener('click', (event) => {
  body.classList.remove('card-focus-active')  
});

document.querySelector('#card-focus-addcontrols-button').addEventListener('click', (event) => {
  if (body.classList.contains('addcontrols-active')) {
    body.classList.remove('addcontrols-active');
  } else {
    body.classList.add('addcontrols-active');
  }
});

document.querySelector('#card-focus-info-button').addEventListener('click', (event) => {
  if (event.target.closest('.card-focus-info')) {
    return
  }
  if (body.classList.contains('info-active')) {
    body.classList.remove('info-active');
  } else {
    body.classList.add('info-active');
    if (window.innerWidth <= 1250 || window.innerHeight <= 600) {
      body.classList.remove('contact-active')
    }
  }
});

document.querySelector('#card-focus-contact-button').addEventListener('click', (event) => {
  if (event.target.closest('.card-focus-contact')) {
    return
  }
  if (body.classList.contains('contact-active')) {
    body.classList.remove('contact-active');
  } else {
    body.classList.add('contact-active');
    if (window.innerWidth <= 1250 || window.innerHeight <= 600) {
      body.classList.remove('info-active')
    }
  }
});

document.querySelector('#card-focus-video-button').addEventListener('click', (event) => {
  body.classList.add('video-active')  
});
document.querySelector('.card-focus-video-slider').addEventListener('click', (event) => {
  if (event.target.closest('.card-focus-video-slider__container') || event.target.closest('.card-focus-video-slider__controls') || event.target.closest('.card-focus-video-slider__likes')) {
    return
  }
  body.classList.remove('video-active')  
});

window.addEventListener('resize', (event) => {
  if ((window.innerWidth <= 1250 || window.innerHeight <= 600) && (body.classList.contains('info-active') && body.classList.contains('contact-active'))) {
    body.classList.remove('contact-active')
  }
})