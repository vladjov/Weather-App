import { favorites } from '/modules/elements.js';
import { lastInTheList } from '/modules/variables.js';
import { templateFavoriteCity } from '/modules/templates.js';

let renderFavoriteCity = (favoriteCity) => favorites.insertAdjacentHTML(lastInTheList, templateFavoriteCity(favoriteCity));

export { renderFavoriteCity }; 