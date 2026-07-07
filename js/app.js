// app.js
// Main JavaScript file - initializes all website features

import { initNavbar, initDarkMode, initModal, initSlider } from "./ui.js";

import { initWeather } from "./api.js";

import { initBackToTop, initCounters } from "./utils.js";


// Run when HTML document is loaded
document.addEventListener("DOMContentLoaded", () => {
    
    // Navigation hamburger menu
    initNavbar();

    // Dark / Light theme
    initDarkMode();

    // Modal popup
    initModal();

    // Image slider
    initSlider();

    // Weather API
    initWeather();

    // Back to top button
    initBackToTop();

    // Animated counters
    initCounters();

});