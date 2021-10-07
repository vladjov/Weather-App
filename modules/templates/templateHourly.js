import { windSVG, dropletSVG, sunSVG, snowSVG, umbrellaSVG, pressureSVG } from '../icons.js';

let templateHourly = (object, element) => {
    element.innerHTML = 
        `
        <ul class="essentials">
            <li class="hourlyTemperature">${(typeof(object.temp) === "number") ? object.temp : object.temp.day}&deg</li>
            <li class="hourlyIcon"><img src="icons/png/${object.weather[0].icon}.png"></li>
            <li class="hourlyTime">${object.hourly_time}</li>
        </ul>
        
        <ul class="hourlyDetails">
            <li>
                <ul>
                    <li class="hourlyDate">${object.hourly_time === "Now" ? "Now" : object.hourly_date}</li>
                    <li class="hourlyDescription">${object.weather[0].description}</li>
                    <li class="hourlyFeel ">feels like ${(typeof(object.feels_like) === "number") ? object.feels_like : object.feels_like.day}&deg</li>    
                </ul>
            </li>
            <li>
                <ul>
                    <li class="hourlyHumidity">${dropletSVG} ${object.humidity} %</li>
                    <li class="hourlyPressure">${pressureSVG} ${object.pressure} mbar</li>
                    <li class="hourlyUVIndex">${sunSVG} ${object.uvi_description} ${object.uvi}</li>
        
                    ${object.pop ? (`<li class="hourlyPrecipitationProbability">
                        ${object.rain ? (`<li class="hourlyRainVolume">${umbrellaSVG} ${Math.round(object.pop * 100)} %, ${Object.values(object.rain)} mm</li>`) : ``}
                        ${object.snow ? (`<li class="hourlySnowVolume">${snowSVG} ${Math.round(object.pop * 100)} %, ${Object.values(object.snow)} mm</li>`) : ``}
                        </li>`) : ``}
        
                    <li class="hourlyWind">
                        ${windSVG} 
                        ${object.wind_speed} ${object.wind_speed_unit}
                        ${object.wind_deg}
                        <br>
                        ${object.wind_gust ? (`gust: ${object.wind_gust} ${object.wind_speed_unit}`) : ``}
                    </li>
                </ul>
            </li>    
        </ul>
        `;
};

export { templateHourly };