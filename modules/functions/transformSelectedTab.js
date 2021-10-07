let transformSelectedTab = (selectedTab) => {
    let selected = selectedTab;
    switch (true) {
        case selected === "currentWeatherElement":
            return ("translateX(0%)");
            break;
        case selected === "dailyWeatherElement":
            return ("translateX(-100%)");
            break;
        case selected === "favoritesElement":
            return ("translateX(-200%)");
            break;
        case selected === "refreshManualyBtn":
            return ("translateX(0%)");
            break;
        case selected === "settingsElement":
            return ("translateX(-300%)");
    };
};

export { transformSelectedTab };