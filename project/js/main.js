const menuBtn = document.querySelector('.menu-btn');
const hamburger = documen.querySelector('.menu-btn__');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        hamburger.classList.add('open');

        showMenu = true;
    } else {
        hamburger.classList.remove('open');

        showMenu = false;
    }
}