import { header, logo, welcomeElement } from '/modules/elements.js';

let hideWelcomeScreen = () => {
    header.classList.remove("showWelcomeScreenHeader");
    logo.classList.remove("showWelcomeScreenLogo");
    welcomeElement.style.display = "none";
}

export { hideWelcomeScreen };