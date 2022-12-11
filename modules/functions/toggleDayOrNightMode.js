let toggleDayOrNightMode = (data, elementToChange) => 
    (data.timeOfDay) && (data.timeOfDay === "night") 
        ? elementToChange.classList.add("nightMode") 
        : elementToChange.classList.remove("nightMode");   
;

export { toggleDayOrNightMode };