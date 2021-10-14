import { notification } from '/modules/elements.js';

let renderMessage = (message) => notification.innerHTML = `<p class="notificationMessage">${message}</p>`;

export { renderMessage };