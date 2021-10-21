import { header, logo } from '/modules/elements.js';

let showWelcomeScreen = () => {
    header.classList.add("showWelcomeScreenHeader");
    logo.classList.add("showWelcomeScreenLogo");
};

export { showWelcomeScreen };