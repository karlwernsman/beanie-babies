/* Imports */
import { getBabies } from './fetch-utils.js';
import { renderBaby } from './render-utils.js';

/* Get DOM Elements */
const babyList = document.getElementById('baby-list');
/* State */
let babies = [];
let error = null;

/* Events */
window.addEventListener('load', async () => {
    findBabies();
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
// (don't forget to call any display functions you want to run on page load!)
