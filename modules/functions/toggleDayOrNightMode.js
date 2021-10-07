let toggleDayOrNightMode = (data, elementToChange) => {
    if((data.timeOfDay) && (data.timeOfDay === "night")) {
        elementToChange.classList.add("nightMode");
    } else {
        elementToChange.classList.remove("nightMode");
    };
};

export { toggleDayOrNightMode };