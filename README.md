# Media Color Invert

A UserScript that provides intelligent color inversion for images and videos on web pages, designed to work perfectly with Windows' built-in color inversion feature for a complete dark mode experience.

## Features

- **Smart Color Inversion**: Inverts colors of images and videos while preserving the natural look of web content
- **Keyboard Shortcut**: Press `Alt + I` to toggle color inversion on/off
- **Persistent Settings**: Remembers your preference across browser sessions
- **Universal Compatibility**: Works on all websites (`*://*/*`)
- **Windows Integration**: Designed to complement Windows' `Ctrl + Windows + C` screen color inversion
- **Lightweight**: Minimal performance impact with debounced DOM scanning

## Installation

### Prerequisites
- A userscript manager like [Tampermonkey](https://tampermonkey.net/) or [Greasemonkey](https://www.greasespot.net/)

### Install Steps
1. Install a userscript manager in your browser
2. Click on the following link to install the script:
   - [Install from GitHub](https://github.com/snomiao/media-color-invert/raw/main/media-color-invert.user.js)
3. Your userscript manager will prompt you to install the script
4. Confirm the installation

## Usage

### Basic Usage
- Press `Alt + I` on any webpage to toggle color inversion for images and videos
- The script will remember your preference and apply it to new pages automatically

### Perfect Dark Mode Setup (Windows)
For the ultimate dark mode experience:

1. **Enable Windows Color Inversion**: Press `Ctrl + Windows + C` to invert your entire screen
2. **Use This Script**: Press `Alt + I` on web pages to re-invert images and videos back to their natural colors
3. **Result**: You get a true dark mode where:
   - All UI elements are inverted (dark backgrounds, light text)
   - Images and videos appear in their original colors
   - Perfect for night browsing and reducing eye strain

## How It Works

The script applies CSS filters to achieve color inversion:

- **Page Content**: Uses `hue-rotate(180deg)` to invert the overall page colors
- **Media Elements**: Applies `invert(1)` to images and videos to restore their natural appearance
- **SVG Elements**: Handles SVG graphics with appropriate color adjustments

## Technical Details

- **Version**: 1.1.0
- **Namespace**: snomiao@gmail.com
- **Permissions**: Uses `GM.getValue` and `GM.setValue` for preference storage
- **Execution**: Runs at `document-start` for optimal performance
- **Compatibility**: Works with all modern browsers

## Contributing

Contributions are welcome! Please feel free to:

- Report bugs or issues
- Suggest new features
- Submit pull requests
- Improve documentation

### Issues and Support
- **Bug Reports**: [GitHub Issues](https://github.com/snomiao/media-color-invert/issues)
- **Support**: [GitHub Issues](https://github.com/snomiao/media-color-invert/issues)

## Donation

If you find this userscript helpful, consider supporting the developer:
- [Donation Link](https://snomiao.com/donate)

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Author

- **snomiao** - [snomiao@gmail.com](mailto:snomiao@gmail.com)
- **GitHub**: [snomiao](https://github.com/snomiao)