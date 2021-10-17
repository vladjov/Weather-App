import { sunriseSVG, sunsetSVG, windSVG, dropletSVG, sunSVG, snowSVG, umbrellaSVG, pressureSVG } from '../icons.js';

let templateCurrent = (object, element) => {
    element.innerHTML = 
        `
        <li class="currentDate">${object.dt}</li>
        <li class="currentTime">${object.time}</li>
        <li class="currentTemperature">${(typeof(object.temp) === "number") ? object.temp : object.temp.day}&deg</li>
        <li class="currentIcon">
            <img src="icons/png/${object.weather[0].icon}.png">
        </li>
        <li class="currentFeel">Feels like: ${(typeof(object.feels_like) === "number") ? object.feels_like : object.feels_like.day}&deg</li>
        <li class="currentDescription">${object.weather[0].description}</li>
        <li class="currentHumidity">${dropletSVG} <span>${object.humidity}%</span></li>
        <li class="currentPressure">${pressureSVG} ${object.pressure} mBar</li>
        <li class="currentUVIndex">${sunSVG} ${object.uvi_description} ${object.uvi}</li>
        <li class="currentWind">
            ${windSVG}
            ${object.wind_speed} ${object.wind_speed_unit}
            ${object.wind_deg}
            <br>
            ${object.wind_gust ? (`gust: ${object.wind_gust} ${object.wind_speed_unit}`) : ``}</li>
        ${object.rain ? (`<li class="currentRainVolume">${umbrellaSVG} ${Object.values(object.rain)}mm</li>`) : ``}
        ${object.snow ? (`<li class="currentSnowVolume">${snowSVG} ${Object.values(object.snow)}mm</li>`) : ``}
        <li class="currentSunrise">${sunriseSVG} ${object.sunrise}</li>
        <li class="currentSunset">${sunsetSVG} ${object.sunset}</li>
        `;
};

export { templateCurrent };