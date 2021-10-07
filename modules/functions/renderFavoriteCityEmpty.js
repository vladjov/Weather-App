import { favorites } from '/modules/elements.js';
import { lastInTheList } from '/modules/variables.js';
import { templateFavoriteCityEmpty } from '/modules/templates.js';

let renderFavoriteCityEmpty = () => favorites.insertAdjacentHTML(lastInTheList, templateFavoriteCityEmpty());
export { renderFavoriteCityEmpty }; 