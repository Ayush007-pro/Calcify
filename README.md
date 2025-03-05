### README.md

# Calcify - A Themed Calculator

Calcify is a sleek, interactive calculator built with HTML, CSS, and JavaScript. It features three distinct themes—**Neumorphic**, **Glassmorphic**, and **Retro**—allowing users to switch between styles seamlessly. This project showcases modern web design techniques and functional calculator logic.

## Features

- **Three Unique Themes:**
  - **Neumorphic**: A soft, embossed design with subtle shadows for a tactile feel.
  - **Glassmorphic**: A frosted-glass effect with transparency and blur for a modern look.
  - **Retro**: A nostalgic design with bold colors and pixelated vibes.
- **Calculator Functionality:**
  - Basic arithmetic operations: addition (+), subtraction (-), multiplication (*), division (/), and modulo (%).
  - Special functions: clear (AC), delete (DEL), toggle sign (±), and decimal point (.).
  - Error handling for invalid expressions and division by zero.
- **Responsive Design:** Adapts to various screen sizes with a clean, centered layout.
- **Interactive UI:** Smooth transitions and hover effects for an engaging user experience.

## Demo

Switch between themes using the buttons at the top of the calculator:
- Neumorphic (index.html)
- Glassmorphic (glassMorphism.html)
- Retro (retro.html)

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/calcify.git
   ```
2. **Navigate to the Project Directory:**
   ```bash
   cd calcify
   ```
3. **Open in Browser:**
   - Open `index.html` for the Neumorphic theme.
   - Open `glassMorphism.html` for the Glassmorphic theme.
   - Open `retro.html` for the Retro theme.

No additional dependencies are required—just a modern web browser!

## File Structure

```
calcify/
│
├── index.html           # Neumorphic theme
├── glassMorphism.html   # Glassmorphic theme
├── retro.html           # Retro theme
├── calc_style.css       # Styles for Neumorphic theme
├── glass_style.css      # Styles for Glassmorphic theme
├── retro_style.css      # Styles for Retro theme
├── calc_logic.js        # Calculator logic (shared across themes)
├── 3334896.jpg          # Background image for Glassmorphic theme
├── 3675429.png          # Background image for Retro theme
└── README.md            # Project documentation
```

## Usage

- **Switch Themes:** Click the theme buttons (Neumorphic, Glassmorphic, Retro) to change the calculator's appearance.
- **Perform Calculations:** Click the buttons or use your keyboard to input numbers and operators, then press `=` to evaluate.
- **Clear Input:** Use `AC` to reset the calculator or `DEL` to remove the last character.
- **Toggle Sign:** Use `±` to switch between positive and negative numbers.

## Technologies Used

- **HTML5:** Structure of the calculator and theme-switching buttons.
- **CSS3:** Styling for each theme, including gradients, shadows, and glass effects.
- **JavaScript:** Core calculator logic using event listeners and the `eval()` function.
- **Google Fonts:** Custom typography (Poppins, Manrope, Rajdhani) for enhanced aesthetics.
- **Material Symbols:** Backspace icon for the delete button.

## Screenshots

Neumorphic Theme
![Neumorphic Theme](/screenshots/Screenshot_1.png)

Glassmorphic Theme
![Glassmorphic Theme](/screenshots/Screenshot_2.png)

Retro Theme
![Retro Theme](/screenshots/Screenshot_3.png)

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as you see fit.

## Acknowledgments

- Inspired by modern UI design trends like Neumorphism and Glassmorphism.
- Thanks to Google Fonts and Material Symbols for free resources.
