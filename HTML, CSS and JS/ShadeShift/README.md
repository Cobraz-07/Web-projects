# ShadeShift

ShadeShift is a web tool that allows you to instantly lighten or darken any HEX or HSL color using a simple slider and toggle. Preview and copy your adjusted color in real time!

---

## Features

- **HEX and HSL Modes:** Easily switch between HEX and HSL color adjustment.
- **Lighten/Darken Toggle:** Instantly toggle between lightening and darkening your color.
- **Live Preview:** See both the input and output colors update as you adjust.
- **Copy to Clipboard:** Click the output color code to copy it instantly.
- **Accessible UI:** Keyboard accessible and screen reader friendly.
- **Responsive Design:** Clean and modern interface.

---

## Usage

1. **Choose a Mode:**  
   Use the toggle at the top to select HEX or HSL mode.

2. **Input a Color:**  
   - For HEX: Enter a valid hex code (e.g., `#3498db`).
   - For HSL: Enter values for Hue (0–360), Saturation (0–100), and Lightness (0–100).

3. **Adjust the Slider:**  
   - Use the slider to lighten or darken the color.
   - Use the toggle to switch between lighten and darken.

4. **Copy the Output:**  
   - Click the output color code (HEX or HSL) to copy it to your clipboard.

---

## Accessibility

- All interactive elements are keyboard accessible.
- Output color codes use `aria-live="polite"` for screen reader updates.
- Toggle switches use proper `aria-pressed` attributes.

---

## Development

### File Structure

- `index.html` — Main HTML file.
- `index.css` — Styles, using CSS variables for easy theming.
- `index.js` — All color logic and UI interactivity.

### Customization

You can easily change the color theme by editing the CSS variables at the top of `index.css`.

---

## License

MIT License

---

## Credits

- [Google Fonts: Bitcount Grid Double, Poppins, Roboto Mono](https://fonts.google.com/)
- Developed by [Your Name or GitHub Username]

---