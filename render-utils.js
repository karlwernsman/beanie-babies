export function renderBaby(baby) {
    const listItem = document.createElement('li');
    listItem.classList.add('card');

    const img = document.createElement('img');
    img.src = baby.image;
    img.alt = baby.title;

    const info = document.createElement('section');
    info.classList.add('info');

    const h2 = document.createElement('h2');
    h2.textContent = baby.title;

    const attributes = document.createElement('p');
    attributes.classList.add('attributes');

    const animal = document.createElement('span');
    animal.textContent = baby.animal;

    const subTheme = document.createElement('span');
    subTheme.textContent = baby.subTheme;

    const astroSign = document.createElement('span');
    astroSign.textContent = baby.astroSign;

    attributes.append(animal, subTheme, astroSign);

    const releaseYear = document.createElement('p');
    releaseYear.classList.add('release-year');
    releaseYear.textContent = `Released in ${baby.releaseYear}.`;

    info.append(h2, attributes, releaseYear);
    listItem.append(img, info);

    return listItem;
}
