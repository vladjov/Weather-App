import { icons } from '../icons.js';

let templateFavoriteCity = (cityAndCountry) => `
    <li class="favoriteCity" data-id="currentWeatherElement">
        <p data-id="currentWeatherElement">${cityAndCountry}</p>
        <div class="deleteIcon">
        ${icons.delete}
        </div>
    </li>
`;
export { templateFavoriteCity };