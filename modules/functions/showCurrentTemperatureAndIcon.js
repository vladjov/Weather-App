let showCurrentTemperatureAndIcon = (value) => {
    let currentTempAndIcon = document.querySelector(".currentTemperatureAndIcon");

    if (!currentTempAndIcon || currentTempAndIcon === null) return;
    (value !== "currentWeatherElement") 
        ? currentTempAndIcon.style.scale = 1 
        : currentTempAndIcon.style.scale = 0;
}

export { showCurrentTemperatureAndIcon };