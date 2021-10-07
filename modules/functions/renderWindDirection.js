import { WINDDIRECTIONS } from '/modules/variables.js';
let renderWindDirection = (windDegrees) => (!(windDegrees)) ? "" : WINDDIRECTIONS[Math.round(windDegrees / 45) % 8];
export { renderWindDirection };