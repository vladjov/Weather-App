import { icons } from '../icons.js';

const template = {
    current(object, element) {
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
            <li class="currentHumidity">${icons.droplet} <span>${object.humidity}%</span></li>
            <li class="currentPressure">${icons.pressure} ${object.pressure} mBar</li>
            <li class="currentUVIndex">${icons.sun} ${object.uvi_description} ${object.uvi}</li>
            <li class="currentWind">
                ${icons.wind}
                ${object.wind_speed} ${object.wind_speed_unit}
                ${object.wind_deg}
                <br>
                ${object.wind_gust ? (`gust: ${object.wind_gust} ${object.wind_speed_unit}`) : ``}</li>
            ${object.rain ? (`<li class="currentRainVolume">${icons.umbrella} ${Object.values(object.rain)}mm</li>`) : ``}
            ${object.snow ? (`<li class="currentSnowVolume">${icons.snow} ${Object.values(object.snow)}mm</li>`) : ``}
            <li class="currentSunrise">${icons.sunrise} ${object.sunrise}</li>
            <li class="currentSunset">${icons.sunset} ${object.sunset}</li>
            `;
    },
    
    daily(object, element) {
        element.innerHTML = 
            `
            <ul class="essentials">
                <li class="dailyDayOfTheWeek"><span>${object.day_of_the_week !== "Today" ? (`${object.day_of_the_week}, ${object.dt.split(",")[1]}`) : (`${object.day_of_the_week}`)}</span></li>
                <li class="dailyDescription">${object.weather[0].description}</li>
                <li class="dailyTemperatureMaxMin"><span>${object.temp.max}&deg</span> / ${object.temp.min}&deg</li>
                <li class="dailyIcon">${object.pop > 0.2 ? (`<p>${Math.round(object.pop * 100)}%</p>`) : ""} <img src="icons/png/${object.weather[0].icon}.png"></li>
            </ul>
    
            <ul class="dailyDetails">
                <li class="dailyWind">${icons.wind} Wind <span>${object.wind_speed} ${object.wind_speed_unit}
                    ${object.wind_deg} <br/>
                    ${object.wind_gust ? (`gusts: ${object.wind_gust} ${object.wind_speed_unit}`) : ``}</span></li>    
                <li class="dailyHumidity">${icons.droplet} Humidity <span>${object.humidity} %</span></li>
                <li class="dailyPressure">${icons.pressure} Air Pressure <span>${object.pressure} mbar</span></li>
                <li class="dailyUVIndex">${icons.sun} UV index <span>${object.uvi_description} ${object.uvi}</span></li>
                
                ${object.pop ? (`<li class="dailyPrecipitationProbability">
                    ${object.rain ? (`<li class="dailyRainVolume">${icons.umbrella} Precipitation chance / rain volume <span>${Math.round(object.pop * 100)} %, ${object.rain} mm</span></li>`) : ``}
                    ${object.snow ? (`<li class="dailySnowVolume">${icons.snow} Precipitation chance / snow volume <span>${Math.round(object.pop * 100)} %, ${object.snow} mm</span></li>`) : ``}
                    </li>`) : ``}
                <li class="dailySunrise">${icons.sunrise} Sunrise <span>${object.sunrise}</span></li>
                <li class="dailySunset">${icons.sunset} Sunset <span>${object.sunset}</span></li>
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
    },

    hourly(object, element) {
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
                        <li class="hourlyHumidity">${icons.droplet} ${object.humidity} %</li>
                        <li class="hourlyPressure">${icons.pressure} ${object.pressure} mbar</li>
                        <li class="hourlyUVIndex">${icons.sun} ${object.uvi_description} ${object.uvi}</li>
            
                        ${object.pop ? (`<li class="hourlyPrecipitationProbability">
                            ${object.rain ? (`<li class="hourlyRainVolume">${icons.umbrella} ${Math.round(object.pop * 100)} %, ${Object.values(object.rain)} mm</li>`) : ``}
                            ${object.snow ? (`<li class="hourlySnowVolume">${icons.snow} ${Math.round(object.pop * 100)} %, ${Object.values(object.snow)} mm</li>`) : ``}
                            </li>`) : ``}
            
                        <li class="hourlyWind">
                            ${icons.wind} 
                            ${object.wind_speed} ${object.wind_speed_unit}
                            ${object.wind_deg}
                            <br>
                            ${object.wind_gust ? (`gust: ${object.wind_gust} ${object.wind_speed_unit}`) : ``}
                        </li>
                    </ul>
                </li>    
            </ul>
            `;
    },

    currentCityName(object, element) {
        element.innerHTML = 
            `
            <p class="currentCityAndCountry">${object.city_and_country}</p>
            <div class="currentTemperatureAndIcon">
                <p class="currentTemperature">${(typeof(object.temp) === "number") ? object.temp : object.temp.day}&deg</p>
                <img class="currentIcon" src="icons/png/${object.weather[0].icon}.png">
            </div>
            `;
    },

    matchingCity(match) {
        return (
            `
            <li class="cityMatched">
                <h4>${match.name}, ${match.country}</h4>
                <p>${match.lat} ${match.lng}</p>
            </li>
            `
        )
    },

    unitToggle(element) {
        element.innerHTML = 
            `						
            <h2>Units</h2>
            <div class="toggleWrapper">
                <label class="label btn-radio" for="metric">
                    <input type="radio" name="unit" id="metric" value="metric">
                    ${icons.radioBtn}
                    <span class="text">Metric</span>
                </label>
                <label class="label btn-radio" for="imperial">
                    <input type="radio" name="unit" id="imperial" value="imperial">
                    ${icons.radioBtn}
                    <span class="text">Imperial</span>
                </label>
            </div>	
            `;
    },

    updateFrequency(element) {
        element.innerHTML = 
            `						
            <h2>Update frequency</h2>
            <div class="frequencyWrapper">
                <label class="label btn-radio" for="1">
                    <input type="radio" name="frequency" id="1" value=1>
                    ${icons.radioBtn}
                    <span class="text">Every hour</span>
                </label>
    
                <label class="label btn-radio" for="2">
                    <input type="radio" name="frequency" id="2" value=2>
                    ${icons.radioBtn}
                    <span class="text">Every 2 hours</span>
                </label>
    
                <label class="label btn-radio" for="6">
                    <input type="radio" name="frequency" id="6" value=6>
                    ${icons.radioBtn}
                    <span class="text">Every 6 hours</span>
                </label>
    
                <label class="label btn-radio" for="12">
                    <input type="radio" name="frequency" id="12" value=12>
                    ${icons.radioBtn}
                    <span class="text">Every 12 hours</span>
                </label>
    
                <label class="label btn-radio" for="24">
                    <input type="radio" name="frequency" id="24" value=24>
                    ${icons.radioBtn}
                    <span class="text">Every 24 hours</span>
                </label>
    
                <label class="label btn-radio" for="manually">
                    <input type="radio" name="frequency" id="manually" value="manually">
                    ${icons.radioBtn}
                    <span class="text">Update manually</span>
                </label>
            </div>
            `;
    },

    favoriteCity(cityAndCountry) {(
        `
        <li class="favoriteCity" data-id="currentWeatherElement">
            <p data-id="currentWeatherElement">${cityAndCountry}</p>
            <div class="deleteIcon">
            ${icons.delete}
            </div>
        </li>
        `
    )}
}



export { template };
// export { template };