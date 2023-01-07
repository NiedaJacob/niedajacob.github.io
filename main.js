window.addEventListener('load', onLoad);

function onLoad() {
    let burgerButton = null;

    initClass();

    function initClass() {
        burgerButton = document.querySelector('.nav-mobile');
        bindEvents();
        initGlide();
    }

    function bindEvents() {
        burgerButton.addEventListener('click', () => {
            console.log('ss');
            burgerButton.classList.toggle('open');
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