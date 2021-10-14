import { getHomeCityFromStorage, renderHomeCityEmpty, clearFavoritesElement, renderFavoriteCities } from '/modules/functions.js';
import { favorites } from '/modules/elements.js';
import { firstInTheList } from '/modules/variables.js';
import { templateHomeCity } from '/modules/templates.js';

async function renderHomeCity() {
    let res = await getHomeCityFromStorage();
    if(!res) {
        renderHomeCityEmpty();
        return;
    };
    clearFavoritesElement();
    favorites.insertAdjacentHTML(firstInTheList, templateHomeCity(res.city));
    renderFavoriteCities();
};

export { renderHomeCity };