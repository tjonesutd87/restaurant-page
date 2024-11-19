import './styles.css';
import { initialPageLoad } from './initial-load.js';
import { aboutPageLoad } from './about.js';
import { menuPageLoad } from './menuPage.js';
import { contactPageLoad } from './contact.js';


//  declare variables
const aboutBtn = document.getElementById('about');
const menuBtn = document.getElementById('menu');
const contactBtn = document.getElementById('contact');
const homeBtn = document.getElementById('home');

//  run intial page load module to load initial homepage
initialPageLoad();

aboutBtn.addEventListener('click', () => {
    document.body.removeChild(container);
    aboutPageLoad();
});

homeBtn.addEventListener('click', () => {
    document.body.removeChild(container);
    initialPageLoad();
});

menuBtn.addEventListener('click', () => {
    document.body.removeChild(container);
    menuPageLoad();
});


contactBtn.addEventListener('click', () => {
    document.body.removeChild(container);
    contactPageLoad();
});

