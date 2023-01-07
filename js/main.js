window.addEventListener('load', onLoad);

function onLoad() {
  let burgerButton = null;
  let glide = null;

  initClass();

  function initClass() {
    burgerButton = document.querySelector('.nav-mobile');
    glide = document.querySelector('.glide');

    bindEvents();
    initGlide();
  }

  function bindEvents() {
    burgerButton.addEventListener('click', () => {
        burgerButton.classList.toggle('open');
        glide.classList.toggle('opacity-0');
    });
  }

  function initGlide() {
    let glide = new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 3,
      gap: 10,
      breakpoints: {
        480: {
          perView: 1,
          gap: 5
        }
      }
    })

    glide.mount();
  }

  function isMobileDevice() {
      return /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent);
  }
}