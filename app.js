/* Imports */
import { getBabies } from './fetch-utils.js';
import { renderBaby, renderAstro } from './render-utils.js';
import { getAstro } from './fetch-utils.js';

/* Get DOM Elements */
const babyList = document.getElementById('baby-list');
const astroSelect = document.getElementById('astro-select');
const searchForm = document.getElementById('search-form');
const notification = document.getElementById('notification');

/* State */
let babies = [];
let error = null;
let astroSign = [];
let count = 0;

/* Events */
window.addEventListener('load', async () => {
    findBabies();

    const response = await getAstro();
    error = response.error;
    astroSign = response.data;

    if (!error) {
        displayAstro();
    }
});

async function findBabies(title, astroSign) {
    const response = await getBabies(title, astroSign);
    error = response.error;
    babies = response.data;
    count = response.count;
    displayNotifications();

    if (!error) {
        displayBabies();
    }
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(searchForm);
    findBabies(formData.get('title'), formData.get('astroSign'));
});

/* Display Functions */
function displayBabies() {
    babyList.innerHTML = '';

    for (const baby of babies) {
        const babyEl = renderBaby(baby);
        babyList.append(babyEl);
    }
}

function displayAstro() {
    for (const astro of astroSign) {
        const option = renderAstro(astro);
        astroSelect.append(option);
    }
}

function displayNotifications() {
    if (error) {
        notification.classList.add('error');
        notification.textContent = error.message;
    } else {
        notification.classList.remove('error');
        notification.textContent = `Showing ${babies.length} of ${count} matching babies.`;
    }
}
// (don't forget to call any display functions you want to run on page load!)
