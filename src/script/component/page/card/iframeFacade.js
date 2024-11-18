document.addEventListener('DOMContentLoaded', function () {
  const videoFacades = document.querySelectorAll('.card-videos__slide-facade');

  videoFacades.forEach(facade => {
    facade.addEventListener('click', function () {
      const iframe = facade.previousElementSibling;
      console.log(iframe)
      iframe.src = iframe.dataset.src;
      facade.hidden = true;
    });
  });
});