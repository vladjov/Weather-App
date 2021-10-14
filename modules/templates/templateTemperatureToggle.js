import { radioBtnSVG } from '../icons.js';

let templateTemperatureToggle = (element) => {
    element.innerHTML = 
        `						
        <h2>Units</h2>
        <div class="toggleWrapper">
            <label class="label btn-radio" for="metric">
                <input type="radio" name="unit" id="metric" value="metric">
                ${radioBtnSVG}
                <span class="text">Metric</span>
            </label>
            <label class="label btn-radio" for="imperial">
                <input type="radio" name="unit" id="imperial" value="imperial">
                ${radioBtnSVG}
                <span class="text">Imperial</span>
            </label>
        </div>	
        `;
};

export { templateTemperatureToggle };