import { icons } from '../icons.js';

let templateHomeCity = (cityAndCountry) => `
    <li class="homeCity" data-id="currentWeatherElement">
        <div class="homeCityName">
            <p data-id="currentWeatherElement">${cityAndCountry}</p>
            <span data-id="currentWeatherElement">
                ${icons.location}
                <p>Home city</p>
            </span>
        </div>
        
        <div class="deleteIcon">
            ${icons.delete}
        </div>
    </li>
`;
export { templateHomeCity };