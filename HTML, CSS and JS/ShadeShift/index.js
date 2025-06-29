// ===== 1. Constants and variable declarations =====
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
const toggleSwitch = document.getElementById('toggle-switch');
const hex = document.getElementById('hex');
const hsl = document.getElementById('hsl');
const containerHsl = document.getElementById('container-hsl');
const containerHex = document.getElementById('container-hex');
const hue = document.getElementById('hue');
const saturation = document.getElementById('saturation');
const lightness = document.getElementById('lightness');
const lightnessInput = document.getElementById('lightness-input');
const inputcolorHsl = document.getElementById('input-color-hsl');
const outputcolorHsl = document.getElementById('output-color-hsl');
const outputHsl = document.getElementById('output-hsl');
const inputHsl = document.getElementById('input-hsl');
const percentageTextHsl = document.getElementById('slider-text-hsl');

// ===== 2. Utility Functions =====

// Checks if the input is a valid hex color
function isValidHex(hex) {
    if (!hex) return false;
    if (/^#?[0-9A-Fa-f]*$/.test(hex)) {
        const strippedHex = hex.replace('#', '');
        return strippedHex.length === 3 || strippedHex.length === 6;
    }
    return false;
}

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
}

// Converts RGB values to hex string
function rgbToHex(r, g, b) {
    r = Math.min(255, Math.max(0, parseInt(r, 10)));
    g = Math.min(255, Math.max(0, parseInt(g, 10)));
    b = Math.min(255, Math.max(0, parseInt(b, 10)));
    return r.toString(16).padStart(2, '0') +
           g.toString(16).padStart(2, '0') +
           b.toString(16).padStart(2, '0');
}

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

// Checks if the input is a valid HSL color
function isValidHSL(hue, saturation, lightness) {
    const h = Number(hue);
    const s = Number(saturation);
    const l = Number(lightness);
    return h >= 0 && h <= 360 && s >= 0 && s <= 100 && l >= 0 && l <= 100;
}

// ===== 3. UI Update Functions =====

// Resets the slider and output to the original color
function reset() {
    shadeInput.value = 0;
    percentageText.textContent = "0%";
    outputColor.style.backgroundColor = hexInput.value.startsWith('#') ? hexInput.value : '#' + hexInput.value;
    outputText.textContent = hexInput.value.startsWith('#') ? hexInput.value : '#' + hexInput.value;
}

// Updates the HSL color preview and text
function setHSL() {
    const h = Number(hue.value);
    const s = Number(saturation.value);
    const l = Number(lightness.value);

    if (isValidHSL(h, s, l)) {
        inputcolorHsl.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
        outputcolorHsl.style.backgroundColor = `hsl(${h}, ${s}%, ${lightnessInput.value}%)`;
        inputHsl.textContent = `hsl(${h}, ${s}%, ${l}%)`;
        outputHsl.textContent = `hsl(${h}, ${s}%, ${lightnessInput.value}%)`;
        percentageTextHsl.textContent = lightnessInput.value + "%";
    } else {
        inputcolorHsl.style.backgroundColor = "";
        inputHsl.textContent = "Invalid HSL";
        outputcolorHsl.style.backgroundColor = "";
        outputHsl.textContent = "Invalid HSL";
    }
}

// ===== 4. Event Listeners and Main Logic =====

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
    if (isValidHex(hexInput.value) && !toggleBtn.classList.contains('active')) {
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

// Copy output hex and HSL to clipboard
outputText.addEventListener("click", () => {
    navigator.clipboard.writeText(outputText.textContent);
    alert("Copied the text: " + outputText.textContent);
});

outputHsl.addEventListener("click", () => {
    navigator.clipboard.writeText(outputHsl.textContent);
    alert("Copied the text: " + outputHsl.textContent);
});

// Toggle between HEX and HSL modes
toggleSwitch.addEventListener('click', () => {
    if (hex.classList.contains('selected')) {
        hex.classList.remove('selected');
        hsl.classList.add('selected');
        containerHex.classList.add('hidden');
        containerHsl.classList.remove('hidden');
    } else {
        hsl.classList.remove('selected');
        hex.classList.add('selected');
        containerHex.classList.remove('hidden');
        containerHsl.classList.add('hidden');
    }
});

// HSL input listeners
hue.addEventListener('input', setHSL);
saturation.addEventListener('input', setHSL);
lightness.addEventListener('input', setHSL);
lightnessInput.addEventListener('input', setHSL);