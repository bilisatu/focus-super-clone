# Focus – Notion to Website Landing Page

A polished, responsive landing page for **Focus**, a fictional SaaS that turns Notion pages into fast, beautiful websites. Built with plain HTML, CSS, and JavaScript – no framework required.

## Features

- **Modern hero section** with gradient heading, CTA buttons, and preview image
- **Trusted by brands** logo strip with SVG/real logos
- **Features grid** highlighting product value props
- **Testimonials section** with real photos and cards
- **Pricing table** with highlighted “Most Popular” plan
- **Responsive navigation** with mobile hamburger menu
- **Dark mode toggle** with preference stored in `localStorage`
- **Scroll animations** via `IntersectionObserver`
- **Subtle UI polish** (shadows, gradients, hover states, particles)
- **Offline-ready** using a simple `service worker` cache

## Tech Stack

- **HTML5** – semantic structure and accessibility landmarks
- **CSS3** – layouts with Flexbox & Grid, transitions, animations, dark mode
- **JavaScript (vanilla)** – navigation, theme toggle, scroll effects, service worker registration

## Project Structure

```text
.
├── index.html      # Main landing page markup
├── style.css       # Global styles, layout, animations, dark mode
├── script.js       # Interactive behavior and theme logic
└── sw.js           # Service worker for basic offline support
```

## Getting Started

### Prerequisites

Any modern browser. For best results, serve the files via a local server (e.g. VS Code Live Server).

### Run Locally

From the project folder:

```powershell
cd "C:\Users\Safraeel\Projects\super clone"
start index.html
```

Or, with a simple static server (recommended for service worker testing):

```powershell
cd "C:\Users\Safraeel\Projects\super clone"
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/index.html
```

> In VS Code you can also use the **Live Server** extension and open `index.html`.

## Customization

You can easily adapt this page to your own product:

- **Branding** – Update logo text and colors in `index.html` and the `.logo`, `.logo-footer`, and gradient styles in `style.css`.
- **Copy** – Replace headlines, body text, features, testimonials, and pricing plans in `index.html`.
- **Images & logos** – Swap image URLs (hero, testimonials, logos) for your own assets.
- **Theme** – Tweak colors in `style.css`, including `body`, `.hero`, `.pricing`, `.footer`, and dark-mode overrides under `body.dark`.

## Dark Mode

- The theme toggle button in the navbar adds/removes the `dark` class on `<body>`.
- The current theme is saved in `localStorage` and restored on page load.
- Dark-specific styles live under selectors like `body.dark .nav`, `body.dark .feature`, `body.dark .pricing .card`, etc.

## Offline Support

- `sw.js` implements a very simple cache-first strategy for:
	- `/`
	- `/index.html`
	- `/style.css`
	- `/script.js`
- The service worker is registered in `index.html` after the main script.
- For service workers to work, you must serve the site over **HTTP** (localhost) or **HTTPS**, not by opening the file directly.

## License

This project is licensed under the **MIT License**. See [`LICENSE`](./LICENSE) for details.

## Author

Built by **Safraeel**.