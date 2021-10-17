let showCurrentTemperatureAndIcon = (value) => {
    if(!document.querySelector(".currentTemperatureAndIcon") || document.querySelector(".currentTemperatureAndIcon") === null) return;
    (value !== "currentWeatherElement") ? document.querySelector(".currentTemperatureAndIcon").style.scale = 1 : 
                                        document.querySelector(".currentTemperatureAndIcon").style.scale = 0;
}

export { showCurrentTemperatureAndIcon };