const isValidHex = (hex) => {
    if(!hex) return false;

    if (/^#?[0-9A-Fa-f]*$/.test(hex)) {
        const strippedHex = hex.replace('#', '');
        return strippedHex.length === 3 || strippedHex.length === 6;
    };
    return false;
};

const hexInput = document.getElementById('color-input');
const shadeInput = document.getElementById('shade-input');
const inputColor = document.getElementById('inputColor');
const outputColor = document.getElementById('outputColor');

hexInput.addEventListener("keyup", () => {
    if (isValidHex(hexInput.value)) {
        inputColor.style.backgroundColor = hexInput.value;
    } else {
        inputColor.style.backgroundColor = "#000";
    }
});
