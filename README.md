# Danuvem Website

This repository contains the static website for [Danuvem](https://danuvem.com) - a cloud platform that hosts applications of various technologies, powered by the [SetAPI](https://github.com/daset-net/setapi) backend.

## Structure

The project is built using pure HTML, CSS, and JavaScript with zero external dependencies, maximizing performance and maintaining a modern, responsive design.

- `index.html` - Main landing page showcasing features, technologies, and pricing.
- `politica-de-privacidade.html` - Privacy Policy document.
- `termos-de-uso.html` - Terms of Service document.
- `css/style.css` - Custom styles, featuring CSS variables, responsive grid layouts, animations, and glass-morphism elements.
- `js/main.js` - Lightweight interactivity including smooth scrolling, Intersection Observers for reveal animations, typing effects, and mobile navigation.

## Features

- **Dark Theme:** Modern dark and purple/blue gradient aesthetic.
- **Responsive Design:** Mobile-first approach scaling up to large desktop views.
- **Animations:** Subtle scroll reveal animations and a typing effect in the hero section.
- **Inline SVGs:** Vector graphics used without reliance on external font libraries or CDNs.

## How to Run Locally

Since this is a static website, you do not need any build steps or complex local server environments.

1. Clone or download this repository.
2. Open `index.html` directly in your web browser.
3. Alternatively, you can use a local static server for a better development experience:
   - Using Python: `python3 -m http.server 8000`
   - Using Node.js (serve): `npx serve`

## Deployment

The project can be deployed easily to any static hosting provider such as:

- GitHub Pages
- Cloudflare Pages
- Vercel
- Netlify
- Or through Danuvem itself! 

Just point your web root to the main directory of this project.

---

*Danuvem - Sua nuvem. Seus aplicativos. Seu controle.*
