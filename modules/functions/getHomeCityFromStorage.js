let getHomeCityFromStorage = () => {
    if(!localStorage.homeCity) return;
    return JSON.parse(localStorage.getItem("homeCity"));
};

export { getHomeCityFromStorage };