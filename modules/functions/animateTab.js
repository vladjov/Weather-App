import { transformSelectedTab } from '/modules/functions.js';

let animateTab = (array, target) => array.forEach(content => content.style.transform = transformSelectedTab(target));

export { animateTab }; 