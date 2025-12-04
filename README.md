# Super Clone

A simple, static web project with `index.html`, `style.css`, and `script.js`. Use it as a starter or a quick prototype for a landing page or small app.

## Features
- Minimal HTML, CSS, and JavaScript setup
- Easy to run locally without dependencies
- Works with any static server or directly from the filesystem

## Project Structure
```
.
├── index.html   # Main HTML page
├── style.css    # Stylesheet for the UI
├── script.js    # Client-side interactions
└── .vscode/     # (Optional) Editor settings
```

## Getting Started (Windows)
You can open the page directly or serve it with a local server.

### Option 1: Open directly
- Double-click `index.html` to open in your default browser.

### Option 2: Use VS Code Live Server (recommended)
- Install the "Live Server" extension in VS Code.
- Open the workspace folder in VS Code.
- Right-click `index.html` and choose "Open with Live Server".

### Option 3: Use a simple local server
If you have Python installed:
```powershell
# From the project directory
python -m http.server 5500
# Then open http://localhost:5500 in your browser
```
If you have Node.js installed, you can use `npx`:
```powershell
# From the project directory
npx serve .
# Then open the printed localhost URL
```