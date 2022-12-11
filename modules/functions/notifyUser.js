import { notification } from '/modules/elements.js';
import { addButtonCheckbox } from '/modules/elements.js';

let uncheckAddButtonCheckbox = () => addButtonCheckbox.checked = false;

let slideDownNotification = () => {
    notification.classList.remove("slideUp");
    notification.classList.add("slideDown");
    
};

let slideUpNotification = () => {
    notification.classList.add("slideUp");
    notification.classList.remove("slideDown");
};

let showNotification = () => {
    slideDownNotification();
    setTimeout(slideUpNotification, 2000);
};

let renderMessage = (message) => notification.innerHTML = `<p class="notificationMessage">${message}</p>`;

let notifyUser = (message) => {
    uncheckAddButtonCheckbox();
    renderMessage(message);
    showNotification();
}


export { notifyUser };