import { ONEHOUR } from '/modules/variables.js';

let getTime = (element, object) => new Date((element - (ONEHOUR * 2) + object.timezone_offset) * 1000);

export { getTime };