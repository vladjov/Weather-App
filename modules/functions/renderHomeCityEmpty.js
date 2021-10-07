import { favorites } from '/modules/elements.js';
import { firstInTheList } from '/modules/variables.js';
import { templateHomeCityEmpty } from '/modules/templates.js';

let renderHomeCityEmpty = () => favorites.insertAdjacentHTML(firstInTheList, templateHomeCityEmpty());

export { renderHomeCityEmpty }; 