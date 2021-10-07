const geolocationBtn = document.getElementById("geolocationBtn");
const cityInputField = document.getElementById("cityInputField");
const addToFavoritesBtn = document.getElementById("addToFavoritesBtn");
const addHomeCityBtn = document.getElementById("addHomeCityBtn");
const refreshManualyBtn = document.getElementById("refreshManualyBtn");

const body = document.body;
const temperatureToggle = document.querySelector(".temperatureToggle");
const updateFrequency = document.querySelector(".updateFrequency");
const cityMatchList = document.getElementById("cityMatchList");
const weatherContainer =  document.querySelector(".weatherContainer");
const currentList = document.querySelector(".currentList");
const currentCityAndCountry = document.querySelector(".currentCityAndCountry");
const dailyList = document.querySelector(".dailyList");
const hourlyList = document.querySelector(".hourlyList");

const container = document.querySelector(".container");
const footerItem = document.querySelectorAll(".footerItem");
const contents = document.querySelectorAll(".content");

const addButtonCheckbox = document.getElementById("addButtonCheckbox");


const favorites =  document.getElementById("favorites");
const notification = document.querySelector(".notification");

export { geolocationBtn, cityInputField, body, temperatureToggle, updateFrequency, cityMatchList,
        weatherContainer, currentList, currentCityAndCountry, dailyList, hourlyList, addToFavoritesBtn,  
        refreshManualyBtn, addHomeCityBtn, favorites, container, footerItem, contents, addButtonCheckbox, notification }