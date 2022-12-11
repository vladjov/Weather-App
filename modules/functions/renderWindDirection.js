import { WINDDIRECTIONS } from '/modules/variables.js';

let renderWindDirection = (windDegrees) => {
    let index = Math.round(windDegrees / 45) % 8;
    return (windDegrees) 
        ? WINDDIRECTIONS[index]
        : ""
};

export { renderWindDirection };