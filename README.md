# NovaFlow Landing Page

## About

NovaFlow is a fictional AI-powered productivity and project management platform. This repository contains a fully responsive marketing landing page built for **Project 2 — Responsive Landing Page** of a Web Development Internship. It is a frontend-only concept project — NovaFlow is not a real company or live product.

The page presents NovaFlow as a modern SaaS workspace that brings tasks, projects and team collaboration together, and includes hero, features, product showcase, pricing, FAQ and footer sections styled to look like a real product website.

## Features

- Sticky, scroll-aware navbar with a blurred glass background on scroll
- Accessible mobile hamburger menu with keyboard support (Escape to close, focus handling)
- Hero section with a fully CSS/HTML-built animated dashboard mockup (no stock images)
- Trust/social proof strip with clearly labeled demo brand names
- Six-card features grid built with CSS Grid, with hover animations
- Product showcase section with a second custom dashboard mockup
- Three-step "how it works" timeline (horizontal on desktop, stacked on mobile)
- Benefits section with a CSS-drawn donut chart
- Three-tier pricing section with a highlighted "Pro" plan (fictional pricing, no real payments)
- FAQ accordion in vanilla JavaScript — only one item open at a time, animated, keyboard accessible
- Final call-to-action section and a detailed multi-column footer
- Scroll-reveal animations, a back-to-top button, and full `prefers-reduced-motion` support
- Semantic HTML5, ARIA attributes, visible focus states and a skip-to-content link

## Technologies

- HTML5
- CSS3 (Flexbox + Grid, custom properties, no frameworks)
- Vanilla JavaScript (no libraries or dependencies)

No React, Bootstrap, Tailwind, or any other framework is used.

## Responsive Design

The layout has been designed and tested for the following viewport widths, with no horizontal scrolling, overlapping content, or cut-off text at any of them:

- 320px
- 375px
- 425px
- 768px
- 1024px
- 1280px
- 1440px

Key responsive behaviors:

- The navbar collapses into a hamburger-triggered full-screen mobile menu below 860px.
- The hero, product showcase and benefits sections switch from a two-column layout to a single stacked column on tablet and mobile.
- The feature and pricing grids reflow from 3 columns → 2 columns → 1 column as the viewport narrows.
- The "how it works" timeline switches from a horizontal connector layout to a vertical stack on smaller screens.

## Project Structure

```
novaflow-landing-page/
│
├── index.html              # Main HTML document (all sections)
│
├── css/
│   ├── style.css            # Design tokens, base styles, component styles
│   └── responsive.css       # Media queries for all breakpoints
│
├── js/
│   └── main.js               # Mobile menu, smooth scroll, FAQ accordion,
│                              # scroll reveal, navbar state, back-to-top
│
├── assets/
│   ├── images/                # Reserved for any future image assets
│   └── icons/                 # Favicon and icon assets
│
├── README.md
└── .gitignore
```

All visual "dashboard" and "chart" elements in the hero, product showcase and benefits sections are built entirely with HTML and CSS — no external screenshots or stock imagery are used.

## How to Run

This is a static site with no build step or dependencies.

1. Download or clone this repository.
2. Open `index.html` directly in any modern browser, **or**
3. Serve it locally for the best experience, for example:

   ```bash
   # Using Python 3
   python -m http.server 8000

   # Then visit
   http://localhost:8000
   ```

No installation, package manager, or server-side setup is required.

## Author

**Jinesh Prajapati**
