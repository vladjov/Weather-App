import { notification } from '/modules/elements.js';

let slideDownNotification = () =>  {
    notification.classList.remove("slideUp");
    notification.classList.add("slideDown");
    
};
let slideUpNotification = () =>  {
    notification.classList.add("slideUp");
    notification.classList.remove("slideDown");
};

let showNotification = () => {
    slideDownNotification();
    setTimeout(slideUpNotification, 3000);
};

export { showNotification };