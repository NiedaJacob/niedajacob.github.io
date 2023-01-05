window.addEventListener('load', onLoad);

function onLoad() {
    let burgerButton = null;

    initClass();

    function initClass() {
        burgerButton = document.querySelector('.nav-mobile');

        bindEvents();
    }

    function bindEvents() {
        burgerButton.addEventListener('click', () => {
            burgerButton.classList.toggle('open');
        });
    }
}