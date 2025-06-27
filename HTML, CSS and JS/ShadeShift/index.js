// 1. Constants and variable declarations
const hexInput = document.getElementById('color-input');
const shadeInput = document.getElementById('shade-input');
const inputColor = document.getElementById('inputColor');
const outputColor = document.getElementById('outputColor');
const percentageText = document.getElementById('slider-text');
const outputText = document.getElementById('output-Hex');
const inputText = document.getElementById('input-Hex');
const toggleBtn = document.getElementById('toggleBtn');
const lightenText = document.getElementById('lighten-text');
const darkenText = document.getElementById('darken-text');

// 2. Function declarations
function isValidHex(hex) {
    if (!hex) return false; // Check if the input is empty or null

    if (/^#?[0-9A-Fa-f]*$/.test(hex)) { // Check if the input is a valid hex color
        // Remove the '#' if present and check length
        const strippedHex = hex.replace('#', '');
        return strippedHex.length === 3 || strippedHex.length === 6;
    }
    return false; 
};

function hexToRgb(hex) {
    const strippedHex = hex.replace('#', '');
    let r, g, b;
    if (strippedHex.length === 3) {
        r = parseInt(strippedHex[0] + strippedHex[0], 16);
        g = parseInt(strippedHex[1] + strippedHex[1], 16);
        b = parseInt(strippedHex[2] + strippedHex[2], 16);
    } else if (strippedHex.length === 6) {
        r = parseInt(strippedHex.slice(0, 2), 16);
        g = parseInt(strippedHex.slice(2, 4), 16);
        b = parseInt(strippedHex.slice(4, 6), 16);
    }
    return { r, g, b };
};

function rgbToHex(r, g, b) {
    // Ensure r, g, b are within 0-255
    r = Math.min(255, Math.max(0, parseInt(r, 10)));
    g = Math.min(255, Math.max(0, parseInt(g, 10)));
    b = Math.min(255, Math.max(0, parseInt(b, 10)));
    return r.toString(16).padStart(2, '0') +
           g.toString(16).padStart(2, '0') +
           b.toString(16).padStart(2, '0');
};

function lightenColor(hex, percentage) {
    let modifier = Math.floor((percentage / 100) * 255); // Calculate the modifier based on the percentage
    let { r, g, b } = hexToRgb(hex);
    r = Math.min(255, Math.max(0, r + modifier));
    g = Math.min(255, Math.max(0, g + modifier));
    b = Math.min(255, Math.max(0, b + modifier));
    return rgbToHex(r, g, b);
}

function darkenColor(hex, percentage) {
    let modifier = Math.floor((percentage / 100) * 255); // Calculate the modifier based on the percentage
    let { r, g, b } = hexToRgb(hex);
    r = Math.min(255, Math.max(0, r - modifier));
    g = Math.min(255, Math.max(0, g - modifier));
    b = Math.min(255, Math.max(0, b - modifier));
    return rgbToHex(r, g, b);
}

// 3. Event listeners and main logic
hexInput.addEventListener("keyup", () => { 
    if (isValidHex(hexInput.value)) { // Validate the hex input on key up
        // Avoid double #
        const value = hexInput.value.startsWith('#') ? hexInput.value : '#' + hexInput.value;
        inputColor.style.backgroundColor = value; // Set the background color of the input box
        inputText.textContent = value; // Update the input text with the hex color 
    } else {
        inputColor.style.backgroundColor = ""; // Reset the background color if invalid
    }
}); 

shadeInput.addEventListener("input", () => {
    percentageText.textContent = shadeInput.value + "%"; // Update the percentage text
        if (isValidHex(hexInput.value)&& toggleBtn.classList.contains('active') === false) { 
            lightenColor(hexInput.value, shadeInput.value); // Alter the color based on the input hex and shade percentage
            const alteredColor = lightenColor(hexInput.value, shadeInput.value);
            outputColor.style.backgroundColor = "#" + alteredColor; // Set the background color of the output box
            outputText.textContent = "#" + alteredColor; // Update the output text with the altered hex color
    } else if (isValidHex(hexInput.value)&& toggleBtn.classList.contains('active')) {
            darkenColor(hexInput.value, shadeInput.value);
            const alteredColor = darkenColor(hexInput.value, shadeInput.value);
            outputColor.style.backgroundColor = "#" + alteredColor;
            outputText.textContent = "#" + alteredColor;
    } else {
        outputColor.style.backgroundColor = ""; // Reset the background color if invalid
    }

});

toggleBtn.addEventListener('click', () => {
    if (toggleBtn.classList.contains('active')) {
        toggleBtn.classList.remove('active');
        lightenText.classList.remove('unselected');
        darkenText.classList.add('unselected');
    } else {
        toggleBtn.classList.add('active');
        lightenText.classList.add('unselected');
        darkenText.classList.remove('unselected');
    }
});