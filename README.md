# Maria Barrett — Personal Site

Live at **https://maria-barrett.github.io/aboutme/**

Personal site for Maria Barrett, a full-stack software engineer in Cleveland, OH.

I designed and built it by hand with plain HTML, CSS and JavaScript. No frameworks and no build step.

## Features

- Responsive layout built with CSS flexbox and grid, with fluid type using `clamp()`
- Sticky, frosted header that highlights the section you're viewing
- Word-by-word headline reveal and scroll-triggered fade-ins using `IntersectionObserver`
- Accessible screenshot lightbox with keyboard (Esc) and focus handling
- Honors `prefers-reduced-motion`
- Open Graph and social preview metadata

## Structure

```
index.html    Markup
styles.css    Design tokens (CSS custom properties) and styles
script.js     Header state, scroll reveal and lightbox
assets/       Images and favicon
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```
npx serve .
```

## Deploy

This repo deploys with GitHub Pages: **Settings → Pages → Deploy from branch → `main` / root**.
