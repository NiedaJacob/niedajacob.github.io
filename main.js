window.addEventListener('load', onLoad);

function onLoad() {
    let burgerButton = null;

    initClass();

    function initClass() {
        burgerButton = document.querySelector('.nav-mobile');
        bindEvents();
        initSwiper();
        console.log(isMobileDevice());
    }

    function bindEvents() {
        burgerButton.addEventListener('click', () => {
            console.log('ss');
            burgerButton.classList.toggle('open');
        });
    }

    function initSwiper() {
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            effect: 'coverflow',
            direction: 'horizontal',
            centeredSlides: true,
            slidesPerView: isMobileDevice() ? '1' : '2',
            loop: true,
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              },
          });
    }

    function isMobileDevice() {
        return /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent);
    }
}