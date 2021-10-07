let templateCurrentCityName = (object, element) => {
    element.innerHTML = 
        `
            <p class="currentCityAndCountry">${object.city_and_country}</p>
            <div class="currentTemperatureAndIcon">
                <p class="currentTemperature">${(typeof(object.temp) === "number") ? object.temp : object.temp.day}&deg</p>
                <img class="currentIcon" src="icons/png/${object.weather[0].icon}.png">
            </div>
        `;
};

export { templateCurrentCityName };
