import { 
    welcomeSpan, 
    citySearchContainer 
} from '/modules/elements.js';

let displayWelcome = () => {
    setTimeout(() => {
        welcomeSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add("welcomeActive");
            }, (idx + 1) * 400)
        });

        setTimeout(() => {
            citySearchContainer.classList.add("welcomeActive");
        }, 3000);
    }, 3400)
};

export { displayWelcome };