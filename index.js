import {swiper} from "./components/swiper.js";

const menuToggle = document.getElementById('menu__toggle');
const mainContainer = document.querySelector('main');

menuToggle.addEventListener('change', () =>  {
    menuToggle.checked ? mainContainer.style.opacity = '0.5' : mainContainer.style.opacity = '1';
});