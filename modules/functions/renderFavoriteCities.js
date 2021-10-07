import { getFavoritesFromStorage } from '/modules/functions.js';
import { renderFavoriteCityEmpty } from '/modules/functions.js';
import { renderFavoriteCity } from '/modules/functions.js';

async function renderFavoriteCities() {
    let res = await getFavoritesFromStorage();
    if(!res || res.length === 0) {
        renderFavoriteCityEmpty();
        return;
    };
    res.forEach((favoriteCityFromStorage) => renderFavoriteCity(favoriteCityFromStorage.city));
};

export { renderFavoriteCities }