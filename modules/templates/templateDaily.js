import { sunriseSVG, sunsetSVG, windSVG, dropletSVG, sunSVG, snowSVG, umbrellaSVG, pressureSVG } from '../icons.js';

let templateDaily = (object, element) => {
    element.innerHTML = 
        `
        <ul class="essentials">
            <li class="dailyDayOfTheWeek"><span>${object.day_of_the_week !== "Today" ? (`${object.day_of_the_week}, ${object.dt.split(",")[1]}`) : (`${object.day_of_the_week}`)}</span></li>
            <li class="dailyDescription">${object.weather[0].description}</li>
            <li class="dailyTemperatureMaxMin"><span>${object.temp.max}&deg</span> / ${object.temp.min}&deg</li>
            <li class="dailyIcon">${object.pop > 0.2 ? (`<p>${Math.round(object.pop * 100)}%</p>`) : ""} <img src="icons/png/${object.weather[0].icon}.png"></li>
        </ul>

        <ul class="dailyDetails">
            <li class="dailyWind">${windSVG} Wind <span>${object.wind_speed} ${object.wind_speed_unit}
                ${object.wind_deg} <br/>
                ${object.wind_gust ? (`gusts: ${object.wind_gust} ${object.wind_speed_unit}`) : ``}</span></li>    
            <li class="dailyHumidity">${dropletSVG} Humidity <span>${object.humidity} %</span></li>
            <li class="dailyPressure">${pressureSVG} Air Pressure <span>${object.pressure} mbar</span></li>
            <li class="dailyUVIndex">${sunSVG} UV index <span>${object.uvi_description} ${object.uvi}</span></li>
            
            ${object.pop ? (`<li class="dailyPrecipitationProbability">
                ${object.rain ? (`<li class="dailyRainVolume">${umbrellaSVG} Precipitation chance / rain volume <span>${Math.round(object.pop * 100)} %, ${object.rain} mm</span></li>`) : ``}
                ${object.snow ? (`<li class="dailySnowVolume">${snowSVG} Precipitation chance / snow volume <span>${Math.round(object.pop * 100)} %, ${object.snow} mm</span></li>`) : ``}
                </li>`) : ``}
            <li class="dailySunrise">${sunriseSVG} Sunrise <span>${object.sunrise}</span></li>
            <li class="dailySunset">${sunsetSVG} Sunset <span>${object.sunset}</span></li>
            <li class="dailyTemperature">
                <h4>Temperature and feel</h4>
                <ul class="dailyTemperatureAndFeel">
                    <li class="dailyTemperatureMonrning">
                        <h6>Monrning</h6>
                        <p class="tempP">${object.temp.morn}&deg</p>
                        <p class="tempFeel"><sup>${object.feels_like.morn}&deg</sup></p>
                    </li>
                    <li class="dailyTemperatureDay">
                        <h6>Afternoon</h6>
                        <p class="tempP">${object.temp.day}&deg</p>
                        <p class="tempFeel"><sup>${object.feels_like.day}&deg</sup></p>
                    </li>
                    <li class="dailyTemperatureEvening">
                        <h6>Evening</h6>
                        <p class="tempP">${object.temp.eve}&deg</p>
                        <p class="tempFeel"><sup>${object.feels_like.eve}&deg</sup></p>
                    </li>
                        <li class="dailyTemperatureNight">
                        <h6>Night</h6>
                        <p class="tempP">${object.temp.night}&deg</p>
                        <p class="tempFeel"><sup>${object.feels_like.night}&deg</sup></p>
                    </li>    
                </ul> 
            </li>
        </ul> 
        `;
};

export { templateDaily };