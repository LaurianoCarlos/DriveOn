const menuToggle = document.querySelector('.menu_toggle');
const mobileMenu = document.querySelector('.main_header_mobile_menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
    menuToggle.classList.toggle('active');

    if (menuToggle.classList.contains('active')) {
        menuToggle.innerHTML = '&#10005;'; 
    } else {
        menuToggle.innerHTML = '&#9776;'; 
    }
});

document.addEventListener('click', (event) => {
    if (!event.target.matches('.menu_toggle') && !event.target.closest('.main_header_mobile_menu')) {
        if (mobileMenu.classList.contains('show')) {
            mobileMenu.classList.remove('show');
            menuToggle.classList.remove('active');
            menuToggle.innerHTML = '&#9776;';
        }
    }
});


document.addEventListener('DOMContentLoaded', function () {
    AOS.init();
});
