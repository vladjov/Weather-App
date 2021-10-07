let showCurrentTemperatureAndIcon = (value) => {
    (value !== "currentWeatherElement") ? document.querySelector(".currentTemperatureAndIcon").style.scale = 1 : 
                                        document.querySelector(".currentTemperatureAndIcon").style.scale = 0;
}

export { showCurrentTemperatureAndIcon };