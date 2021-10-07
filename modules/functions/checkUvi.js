let checkUvi = (uvi) => {
    let uvIndex = uvi;
    switch (true) {
        case uvIndex<3:
            return ("Low");
            break;
        case uvIndex<6:
            return ("Moderate");
            break;
        case uvIndex<8:
            return ("High");
            break;
        case uvIndex<11:
            return ("Very high");
            break;
        case uvIndex>=11:
            return ("Extreme");
    };
};

export { checkUvi };