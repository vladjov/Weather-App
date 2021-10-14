import { radioBtnSVG } from '../icons.js';

let templateUpdateFrequency = (element) => {
    element.innerHTML = 
        `						
        <h2>Update frequency</h2>
        <div class="frequencyWrapper">
            <label class="label btn-radio" for="1">
                <input type="radio" name="frequency" id="1" value=1>
                ${radioBtnSVG}
                <span class="text">Every hour</span>
            </label>

            <label class="label btn-radio" for="2">
                <input type="radio" name="frequency" id="2" value=2>
                ${radioBtnSVG}
                <span class="text">Every 2 hours</span>
            </label>

            <label class="label btn-radio" for="6">
                <input type="radio" name="frequency" id="6" value=6>
                ${radioBtnSVG}
                <span class="text">Every 6 hours</span>
            </label>

            <label class="label btn-radio" for="12">
                <input type="radio" name="frequency" id="12" value=12>
                ${radioBtnSVG}
                <span class="text">Every 12 hours</span>
            </label>

            <label class="label btn-radio" for="24">
                <input type="radio" name="frequency" id="24" value=24>
                ${radioBtnSVG}
                <span class="text">Every 24 hours</span>
            </label>

            <label class="label btn-radio" for="manually">
                <input type="radio" name="frequency" id="manually" value="manually">
                ${radioBtnSVG}
                <span class="text">Update manually</span>
            </label>
        </div>
        `;
};

export { templateUpdateFrequency };