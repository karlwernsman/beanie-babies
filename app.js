/* Imports */
import { getBabies } from './fetch-utils.js';
import { renderBaby, renderAstro } from './render-utils.js';
import { getAstro } from './fetch-utils.js';

/* Get DOM Elements */
const babyList = document.getElementById('baby-list');
const astroSelect = document.getElementById('astro-select');

/* State */
let babies = [];
let error = null;
let astroSign = [];

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
    const response = await getBabies();
    error = response.error;
    babies = response.data;

    if (!error) {
        displayBabies();
    }
}
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
// (don't forget to call any display functions you want to run on page load!)
