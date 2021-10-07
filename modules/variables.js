const APIURLBASE = "https://api.openweathermap.org/";
const APIKEY = "d971b9e49900a590e8027fe9bd296360";
const WINDDIRECTIONS = ["↓ N", "↙ NE", "← E", "↖ SE", "↑ S", "↗ SW", "→ W", "↘ NW"];

const dateOptions = {weekday: "long", day: "numeric", month: "long"};
const timeOptions = {hour: "2-digit", minute: "2-digit" };
const ONEHOUR = 3600;
const milisecondsInHour = 3600000;
const selectOnlyOneMsg = "Please select only one of the cities from the list.";
const geolocationNotSuportedMsg = "Geolocation is not supported by your browser";

const minCaractersToSearch = 3;

const lastInTheList = "beforeend";
const  firstInTheList = "afterbegin";

const activeElementClass = "active";

export { APIURLBASE, APIKEY, WINDDIRECTIONS, dateOptions, timeOptions, ONEHOUR, milisecondsInHour, selectOnlyOneMsg, geolocationNotSuportedMsg, minCaractersToSearch, lastInTheList, firstInTheList, activeElementClass };