import './style.css';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function initializeNavigation() {
    const homeBtn = document.getElementById('home-btn');
    const menuBtn = document.getElementById('menu-btn');
    const contactBtn = document.getElementById('contact-btn');
    const content = document.getElementById('content');

    homeBtn.addEventListener('click', () => {
        content.textContent = ''; // Clear current content
        loadHome(); // Load Home tab
    });

    menuBtn.addEventListener('click', () => {
        content.textContent = ''; // Clear current content
        loadMenu(); // Load Menu tab
    });

    contactBtn.addEventListener('click', () => {
        content.textContent = ''; // Clear current content
        loadContact(); // Load Contact tab
    });
}

function initializeWebsite() {
    loadHome(); // Default to Home page
    initializeNavigation(); // Set up navigation event listeners
}

initializeWebsite();
