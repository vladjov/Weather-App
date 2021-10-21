import { APIURLBASE, APIKEY, dateOptions, timeOptions, enterValidCityNameMsg, selectOnlyOneMsg, geolocationNotSuportedMsg, locatingMsg, noLocationMsg, refreshManuallyMsg,  minCaractersToSearch, milisecondsInHour, activeElementClass } from './modules/variables.js';
import { geolocationBtn, cityInputField, addToFavoritesBtn, refreshManualyBtn, addHomeCityBtn, body, temperatureToggle, updateFrequency, cityMatchList, weatherContainer, currentList, dailyList, hourlyList, favorites, currentCityAndCountry, container, footerItem, contents, header, logo, welcomeElement }  from './modules/elements.js';
import { checkUvi, floorValue, toggleDayOrNightMode, showDetails, resetInputAndCitiesMatched, resetLayout, renderWindDirection, getTime, addToLocalStorage, removeFromLocalStorage, renderMessage, getFavoritesFromStorage, getHomeCityFromStorage, showCurrentTemperatureAndIcon, clearFavoritesElement, renderHomeCityEmpty, uncheckAddButtonCheckbox, animateTab, findElementWithClass, renderFavoriteCities, renderHomeCity, showNotification, displayIntro, displayWelcome, showWelcomeScreen, hideWelcomeScreen } from './modules/functions.js';
import { templateCurrent, templateDaily, templateHourly, templateMatchingCity, templateCurrentCityName, templateUpdateFrequency, templateTemperatureToggle } from './modules/templates.js';
import { City } from '../modules/functions/createCity.js';
import { alertSVG } from './modules/icons.js';

let lat;
let lon;
let matches;
let cityAndCountry;
let apiData;
let defaultUnit = "metric";
let checkedUnitValue;
let favoritesList = [];
let homeCity;
let refreshFrequencyFromStorage;


let addFavouriteToStorage = () => {
    if(!cityAndCountry) {
        uncheckAddButtonCheckbox();
        renderMessage(`${alertSVG} Can't add undefined!!!`);
        showNotification();
        return;
    };

    if(favoritesList.some(favorite => favorite.city === cityAndCountry)) {
        uncheckAddButtonCheckbox();
        renderMessage(`${cityAndCountry} is already in favorites.`);
        showNotification();
        return;
    }

    favoritesList.push(new City(cityAndCountry, lat, lon));
    addToLocalStorage("favorites", JSON.stringify(favoritesList));
    
    clearFavoritesElement();
    renderFavoriteCities();
    renderHomeCity();
    uncheckAddButtonCheckbox();
    renderMessage(`${cityAndCountry} is added to favorites.`);
    showNotification();
};

let addHomeCityToStorage = () => {
    if(!cityAndCountry) {
        uncheckAddButtonCheckbox();
        renderMessage(`${alertSVG} Can't add undefined!!!`);
        showNotification();
        return;
    };

    if(getHomeCityFromStorage() !== undefined && getHomeCityFromStorage().city === cityAndCountry) {
        uncheckAddButtonCheckbox();
        renderMessage(`${cityAndCountry} is already a home city.`);
        showNotification();
        return;
    }

    homeCity = new City(cityAndCountry, lat, lon);
    addToLocalStorage("homeCity", JSON.stringify(homeCity));
    renderHomeCity();
    uncheckAddButtonCheckbox();
    renderMessage(`${cityAndCountry} is added as home city.`);
    showNotification();
};

let loadFavoritesFromLocalStorage = () => {
    if(getFavoritesFromStorage() === undefined) {
        renderFavoriteCities();
        renderHomeCity();
        return;
    };

    getFavoritesFromStorage();
    let favoritesInStorage = JSON.parse(localStorage.favorites);
	favoritesList = favoritesInStorage;
    renderFavoriteCities();
    renderHomeCity();
};

addToFavoritesBtn.addEventListener("click", addFavouriteToStorage);
addHomeCityBtn.addEventListener("click", addHomeCityToStorage);

let deleteHomeCity = () => {
    renderMessage(`${JSON.parse(localStorage.homeCity).city} is no longer a home city.`);
    removeFromLocalStorage("homeCity");
    clearFavoritesElement();
    renderHomeCityEmpty();
    renderFavoriteCities();
    showNotification();
};

let deleteSelectedFavorite = (selected) => {
    if(selected.parentNode.classList[0] === "homeCity") {
        deleteHomeCity();
        return; 
    };
    favoritesList = favoritesList.filter(fav => (fav.city != selected.parentNode.firstElementChild.innerHTML));
    addToLocalStorage("favorites", JSON.stringify(favoritesList));
    clearFavoritesElement();
    renderFavoriteCities();
    renderHomeCity();
    renderMessage(`${selected.parentNode.firstElementChild.innerHTML} is removed from favorites.`);
    showNotification();
};

async function showSelectedFavorite(selected) {
    if(selected.classList[0] === "homeCity") {
        if(!localStorage.homeCity) return;
        if(lat === JSON.parse(localStorage.homeCity).latitude && lon === JSON.parse(localStorage.homeCity).longitude) {
            selectAndUpdateCityByEnter(); 
            return;
        };
        lat = JSON.parse(localStorage.homeCity).latitude;
        lon = JSON.parse(localStorage.homeCity).longitude;   
    } else {
        if(!localStorage.favorites || JSON.parse(localStorage.favorites).length === 0) return;
        if(parseFloat(lat).toFixed(2) === (parseFloat(JSON.parse(localStorage.favorites).filter(e => e.city === selected.innerText)[0].latitude)).toFixed(2) && parseFloat(lon).toFixed(2) === (parseFloat(JSON.parse(localStorage.favorites).filter(e => e.city === selected.innerText)[0].longitude)).toFixed(2)) {
            selectAndUpdateCityByEnter(); 
            return;
        };
        lat = JSON.parse(localStorage.favorites).filter(e => e.city === selected.innerText)[0].latitude;
        lon = JSON.parse(localStorage.favorites).filter(e => e.city === selected.innerText)[0].longitude; 
    }
    await updateValues(extractAPIData(generateURLbyReverseGeocoding(lat, lon)));
    selectAndUpdateCityByEnter();
};

let showOrDeleteSelectedFavorite = (e) => e.target.className === "deleteIcon" ? 
                                        deleteSelectedFavorite(e.target) : 
                                        showSelectedFavorite(e.target);
favorites.addEventListener("click", showOrDeleteSelectedFavorite);

let uppercaseFirstLetter = (string) => {
    return string = string.charAt(0).toUpperCase() + string.slice(1);
} 

async function unitToggle(unit) {
    if(unit === defaultUnit) return;
    defaultUnit = unit;
    renderMessage(`${uppercaseFirstLetter(`${defaultUnit}`)} units selected.`);
    showNotification();
    await extractAPIData(generateURLbyGeolocation(lat, lon));
    renderWeatherElements();
};

temperatureToggle.addEventListener("click", () => {
    checkedUnitValue = document.querySelector("input[name]:checked").value;
    unitToggle(checkedUnitValue);
});

let generateURLbyGeolocation = (lat, lon) => `${APIURLBASE}data/2.5/onecall?lat=${lat}&lon=${lon}&units=${defaultUnit}&appid=${APIKEY}`;
let generateURLbyReverseGeocoding = (lat, lon) => `${APIURLBASE}geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${APIKEY}`;

const searchCities = async searchCitiesInput => {
    const res = await fetch("./cities.json");
    const citiesArray = await res.json();

    matches = citiesArray.filter( city => {
        const regex = new RegExp(`^${searchCitiesInput}`, "gi");
        return city.name.match(regex);
    });

    if(searchCitiesInput.length < minCaractersToSearch) {
        matches = [];
        cityMatchList.innerHTML = "";
    };
    renderCitiesMatched(matches);
    return matches;
};

let renderCitiesMatched = matches => {
    if(matches.length === 0) return;
    const cityMatchedHtml = matches.map(match => templateMatchingCity(match)).join("");
    cityMatchList.innerHTML = cityMatchedHtml;
};

cityInputField.addEventListener("input", () => searchCities(cityInputField.value));

cityInputField.addEventListener("keyup", (e) => {
	if(e.key === "Enter") {
        if(!cityInputField.value || cityInputField.value[0] === " ") {
            renderMessage(`${alertSVG} ${enterValidCityNameMsg}`);
            showNotification();
            return;
        };
        if(!matches || matches.length === 0){
            renderMessage(`${alertSVG} ${enterValidCityNameMsg}`);
            showNotification();
            return;
        };
        if(matches.length !== 1) {
            renderMessage(`${alertSVG} ${selectOnlyOneMsg}`);
            showNotification();
            return;
        };
        e.preventDefault();
            
        cityAndCountry = matches[0].name + ", " + matches[0].country;
        lat = matches[0].lat;
        lon = matches[0].lng;
        selectAndUpdateCityByEnter(e);
	};
});

let selectCity = event => {
    let element = event.target;
	cityAndCountry = element.className === "cityMatched" ? 
                    element.firstElementChild.firstChild.data : 
                    element.parentNode.firstElementChild.firstChild.data;
    let coordinates = element.className === "cityMatched" ? 
                    ((element.lastElementChild.lastChild.data).split(" ")) : 
                    ((element.parentNode.lastElementChild.lastChild.data).split(" "));
    lat = coordinates[0];
    lon = coordinates[1];
};

async function selectAndUpdateCityByEnter() {
    await extractAPIData(generateURLbyGeolocation(lat, lon));
    renderWeatherElements();
    resetInputAndCitiesMatched();
    hideWelcomeScreen();
};

async function selectAndUpdateCityByClick(event) {
    selectCity(event);
    selectAndUpdateCityByEnter();
};

cityMatchList.addEventListener("click", selectAndUpdateCityByClick);

async function extractAPIData(url) {
    let response = await fetch(url);
    apiData = await response.json();
    return apiData;
};

async function updateValues(extractFrom) {
    let response = await extractFrom;
    lat = response[0].lat;
    lon = response[0].lon;
    cityAndCountry = response[0].name + ", " + response[0].country;
};

function geolocateMe() {
    async function success(position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        await updateValues(extractAPIData(generateURLbyReverseGeocoding(lat, lon)));
        selectAndUpdateCityByEnter();
    };
    
    let error = () => {
        renderMessage(noLocationMsg);
        showNotification();
    };
  
    if(!navigator.geolocation) {
        renderMessage(geolocationNotSuportedMsg);
        showNotification();
        return;
    };
    renderMessage(locatingMsg);
    showNotification();
    navigator.geolocation.getCurrentPosition(success, error);
};
geolocationBtn.addEventListener("click", geolocateMe);

let loadWeatherAndForecastFromLocalStorage = () => (localStorage.homeCity) ? (selectAndUpdateCityByLocalStorage(), hideWelcomeScreen()) : showWelcomeScreen();

async function selectAndUpdateCityByLocalStorage() {
    let homeCityLocalStorage = JSON.parse(localStorage.homeCity);
    await updateValues(extractAPIData(generateURLbyReverseGeocoding(homeCityLocalStorage.latitude, homeCityLocalStorage.longitude)));
    await extractAPIData(generateURLbyGeolocation(homeCityLocalStorage.latitude, homeCityLocalStorage.longitude));
    renderWeatherElements();
    resetInputAndCitiesMatched();
};

window.onload = () => {
    displayIntro();
    templateTemperatureToggle(temperatureToggle);
    templateUpdateFrequency(updateFrequency);
	loadWeatherAndForecastFromLocalStorage();
    displayWelcome();
    loadFavoritesFromLocalStorage();
    loadRefreshFrequencyFromStorage();
};

let formatAPIObjectElements = (e) => {
    e.city_and_country = cityAndCountry;
    e.dew_point = floorValue(e.dew_point);
    e.time = getTime(e.dt, apiData).toLocaleTimeString("sr-rs", timeOptions);
    ((e.dt > e.sunrise) && (e.dt < e.sunset)) ? e.timeOfDay = "day" : e.timeOfDay = "night";
    e.dt = getTime(e.dt, apiData).toLocaleDateString("en-us", dateOptions);
    e.day_of_the_week = e.dt === apiData.current.dt ? "Today" : e.dt.split(",")[0];
    e.hourly_time = (e.dt === apiData.current.dt) && (e.time.split(":")[0] === apiData.current.time.split(":")[0]) ? "Now" : e.time;
    e.hourly_date = e.dt === apiData.current.dt ? "Today" : e.dt;
    if(typeof(e.feels_like && e.temp) === "number") {
        e.feels_like = floorValue(e.feels_like);
        e.temp = floorValue(e.temp);
    } else if(typeof(e.feels_like && e.temp) === "object"){
        (Object.keys(e.feels_like)).forEach((key) => {
            e.feels_like[key] = floorValue(e.feels_like[key]);   
        });
        (Object.keys(e.temp)).forEach((key) => {
            e.temp[key] = floorValue(e.temp[key]);
        });
    };
    if(e.sunrise && e.sunset) {
        e.sunrise = getTime(e.sunrise, apiData).toLocaleTimeString("sr-rs", timeOptions);
        e.sunset = getTime(e.sunset, apiData).toLocaleTimeString("sr-rs", timeOptions);
    };
    e.wind_speed_unit = defaultUnit === "imperial" ? "Mph" : "m/s";
    e.wind_deg = renderWindDirection(e.wind_deg);
    e.uvi_description = checkUvi(Math.floor(e.uvi));
};

let formatAPIObjectsArray = (array) => (array).map(e => formatAPIObjectElements(e));

let formatAPIData = () => {
    formatAPIObjectElements(apiData.current)
    formatAPIObjectsArray(apiData.daily);
    formatAPIObjectsArray(apiData.hourly);
};

let resetAllLayouts = () => {
    resetLayout(currentCityAndCountry);
    resetLayout(currentList);
    resetLayout(dailyList);
    resetLayout(hourlyList);
};

let renderCurrentElement = (e) => { 
    templateCurrent(e, currentList);
};

let renderCurrentCityName = (e) => {
    templateCurrentCityName(e, currentCityAndCountry);
};

let renderDailyElement = (e) => {
    let dailyLi = document.createElement("li");
    templateDaily(e, dailyLi);
    dailyList.appendChild(dailyLi);
};

let renderHourlyElement = (e) => {
    let hourlyLi = document.createElement("li");
    templateHourly(e, hourlyLi);
    hourlyList.appendChild(hourlyLi);
};

let renderWeatherElements = () => {
    resetAllLayouts();
    formatAPIData();
    weatherContainer.style.display = "flex"; 
    renderCurrentElement(apiData.current);
    renderCurrentCityName(apiData.current);
    (apiData.daily).forEach((e) => renderDailyElement(e));
    (apiData.hourly).forEach((e) => renderHourlyElement(e));
    toggleDayOrNightMode(apiData.current, body);
};

dailyList.addEventListener("click", showDetails);
hourlyList.addEventListener("click", showDetails);

let showElementAsChecked = (element) => {
    document.getElementById(element).checked = "checked";
};

let loadRefreshFrequencyFromStorage = () => {
    if(!localStorage.frequency) return;

    clearInterval(refreshFrequencyFromStorage);
    showElementAsChecked(localStorage.frequency);

    if(localStorage.frequency === "manually") {
        renderMessage(refreshManuallyMsg);
        showNotification();
        return;
    };
    
    refreshFrequencyFromStorage = setInterval((() => selectAndUpdateCityByEnter()), localStorage.frequency * milisecondsInHour);
    renderMessage(`Refresh every ${localStorage.frequency == 1 ? (`hour.`) : (`${localStorage.frequency} hours.`)}`);
    showNotification();
};

updateFrequency.addEventListener("click", function(event) {
	removeFromLocalStorage("frequency");
	let frequency = event.target.value;
	if(!frequency) return;
    addToLocalStorage("frequency", frequency);
    loadRefreshFrequencyFromStorage();
});

refreshManualyBtn.addEventListener("click", selectAndUpdateCityByEnter);

container.onclick = e => {
    const datasetId = e.target.dataset.id;
    if (datasetId) {
        let element = document.getElementById(datasetId);
        footerItem.forEach(btn => btn.classList.remove(activeElementClass));

        if(e.target.classList.contains("footerItem4")) {
            findElementWithClass(footerItem, "footerItem1").classList.add(activeElementClass);
            animateTab(contents, datasetId);
            return;
        };
        
        (datasetId === "favoritesElement") ? (findElementWithClass(footerItem, "footerItem3").classList.add(activeElementClass), animateTab(contents, datasetId)) : "";
        (datasetId === "currentWeatherElement") ? (findElementWithClass(footerItem, "footerItem1").classList.add(activeElementClass), animateTab(contents, datasetId)) : "";

        e.target.classList.add(activeElementClass);
        element.classList.add(activeElementClass);
        animateTab(contents, datasetId);
        showCurrentTemperatureAndIcon(datasetId);
    };
};