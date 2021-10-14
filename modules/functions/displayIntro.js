import { intro, introLogoSpan } from '/modules/elements.js';

let displayIntro = () => {
    setTimeout(() => {
        introLogoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add("introActive");
            }, (idx + 1) * 400)
        });

        setTimeout(() => {
            introLogoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove("introActive");
                    span.classList.add("introFade");
                }, (idx + 1) * 50)
            });
        }, 3000);

        setTimeout(() => {
            intro.style.top = "-100%";
        }, 3300)
    } )
};

export { displayIntro };