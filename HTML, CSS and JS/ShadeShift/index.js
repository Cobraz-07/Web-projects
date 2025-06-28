// 1. Constants and variable declarations
const hexInput = document.getElementById('color-input'); // Input for hex color
const shadeInput = document.getElementById('shade-input'); // Range slider for shade percentage
const inputColor = document.getElementById('inputColor'); // Preview of input color
const outputColor = document.getElementById('outputColor'); // Preview of output color
const percentageText = document.getElementById('slider-text'); // Text showing percentage value
const outputText = document.getElementById('output-Hex'); // Output hex value
const inputText = document.getElementById('input-Hex'); // Input hex value display
const toggleBtn = document.getElementById('toggleBtn'); // Button to toggle lighten/darken
const lightenText = document.getElementById('lighten-text'); // Lighten label
const darkenText = document.getElementById('darken-text'); // Darken label

// 2. Function declarations

// Checks if the input is a valid hex color
function isValidHex(hex) {
    if (!hex) return false;
    if (/^#?[0-9A-Fa-f]*$/.test(hex)) {
        const strippedHex = hex.replace('#', '');
        return strippedHex.length === 3 || strippedHex.length === 6;
    }
    return false;
};

// Converts hex color to RGB object
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

// Converts RGB values to hex string
function rgbToHex(r, g, b) {
    r = Math.min(255, Math.max(0, parseInt(r, 10)));
    g = Math.min(255, Math.max(0, parseInt(g, 10)));
    b = Math.min(255, Math.max(0, parseInt(b, 10)));
    return r.toString(16).padStart(2, '0') +
           g.toString(16).padStart(2, '0') +
           b.toString(16).padStart(2, '0');
};

// Lightens a hex color by a percentage
function lightenColor(hex, percentage) {
    let modifier = Math.floor((percentage / 100) * 255);
    let { r, g, b } = hexToRgb(hex);
    r = Math.min(255, Math.max(0, r + modifier));
    g = Math.min(255, Math.max(0, g + modifier));
    b = Math.min(255, Math.max(0, b + modifier));
    return rgbToHex(r, g, b);
}

// Darkens a hex color by a percentage
function darkenColor(hex, percentage) {
    let modifier = Math.floor((percentage / 100) * 255);
    let { r, g, b } = hexToRgb(hex);
    r = Math.min(255, Math.max(0, r - modifier));
    g = Math.min(255, Math.max(0, g - modifier));
    b = Math.min(255, Math.max(0, b - modifier));
    return rgbToHex(r, g, b);
}

// Resets the slider and output to the original color
function reset() {
    shadeInput.value = 0;
    percentageText.textContent = "0%";
    outputColor.style.backgroundColor = hexInput.value.startsWith('#') ? hexInput.value : '#' + hexInput.value;
    outputText.textContent = hexInput.value.startsWith('#') ? hexInput.value : '#' + hexInput.value;
}

// 3. Event listeners and main logic

// Update input color preview and reset output when hex input changes
hexInput.addEventListener("keyup", () => {
    if (isValidHex(hexInput.value)) {
        const value = hexInput.value.startsWith('#') ? hexInput.value : '#' + hexInput.value;
        inputColor.style.backgroundColor = value;
        inputText.textContent = value;
    } else {
        inputColor.style.backgroundColor = "";
    }
    reset();
});

// Update output color when slider changes
shadeInput.addEventListener("input", () => {
    percentageText.textContent = shadeInput.value + "%";
    if (isValidHex(hexInput.value) && toggleBtn.classList.contains('active') === false) {
        // Lighten mode
        const alteredColor = lightenColor(hexInput.value, shadeInput.value);
        outputColor.style.backgroundColor = "#" + alteredColor;
        outputText.textContent = "#" + alteredColor;
    } else if (isValidHex(hexInput.value) && toggleBtn.classList.contains('active')) {
        // Darken mode
        const alteredColor = darkenColor(hexInput.value, shadeInput.value);
        outputColor.style.backgroundColor = "#" + alteredColor;
        outputText.textContent = "#" + alteredColor;
    } else {
        outputColor.style.backgroundColor = "";
    }
});

// Toggle between lighten and darken modes
toggleBtn.addEventListener('click', () => {
    if (toggleBtn.classList.contains('active')) {
        toggleBtn.classList.remove('active');
        toggleBtn.setAttribute('aria-pressed', 'false');
        lightenText.classList.remove('unselected');
        darkenText.classList.add('unselected');
    } else {
        toggleBtn.classList.add('active');
        toggleBtn.setAttribute('aria-pressed', 'true');
        lightenText.classList.add('unselected');
        darkenText.classList.remove('unselected');
    }
    reset();
});

outputText.addEventListener("click", () => {
    navigator.clipboard.writeText(outputText.textContent);
    alert("Copied the text: " + outputText.textContent);
});