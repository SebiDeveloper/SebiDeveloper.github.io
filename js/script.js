import initCarousel from './modules/slider.js';
import card from './modules/cards.js';
import accordion from './modules/accordion.js';
import modals from './modules/modals.js';
import mask from './modules/mask.js';
import playVideo from './modules/playVideo.js';
import hamburger from './modules/hamburger.js';

window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    initCarousel();
    card();
    accordion();
    modals();
    mask();
    playVideo();
    hamburger();
});