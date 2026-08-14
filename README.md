# 🌏 My Australia Journey

A personal travel website inspired by a course project, redesigned to tell the story of a real-life experience living in Australia between 2009 and 2010. 

What started as a static course layout has evolved into a robust **data-driven web application built entirely with Vanilla JavaScript (ES6+)**, featuring modular components, dynamic DOM rendering, client-side persistence, responsive design patterns, and UX-focused problem solving — **without any external libraries or frameworks**.

---

## 🚀 About the Project

This project originated as a travel agency website exercise from a front-end course. Instead of submitting a generic course assignment, I transformed it into a personal digital memoir documenting my real year living, studying, and traveling in Western Australia.

As the project scaled, I transitioned away from hard-coded HTML to establish a clean, modular architecture separating data from presentation:

**`Data Modules` ➔ `Component Initializers` ➔ `Dynamic DOM Rendering` ➔ `Event-Driven Interactions` ➔ `Client-Side State`**

Dedicated data modules (`galleryData.js`, `destinationsData.js`, `timelineData.js`, `tipsData.js`, `guestbookData.js`) supply content consumed programmatically across multi-page views (`index.html`, `gallery.html`, `about.html`).

---

## 🎯 Purpose & Learning Goals

* Master **Vanilla JavaScript (ES6+) fundamentals** and ES Modules (`import`/`export`).
* Implement **data-driven architecture** decoupling content from presentation.
* Handle **advanced DOM manipulation** and global event delegation.
* Manage **client-side state and persistence** using `localStorage` and JSON.
* Utilize **native browser APIs** (`<dialog>`, `window.scrollY`, `window.scrollTo`, `Element.closest()`).
* Design **fully responsive interfaces** using CSS Flexbox, Grid, and adaptive layout techniques.
* Practice defensive programming with guard clauses to ensure cross-page stability.

---

## 🧠 Technical Highlights & Accomplishments

### 1. Data-Driven Architecture & ES Modules
* Structured content into dedicated JS files to keep templates clean and maintainable.
* Designed dynamic renderers that programmatically generate HTML elements from datasets while preserving image alt attributes and custom grid layouts.

### 2. Modular Component Pattern & Navigation
* Created reusable component initializers (`initHeader()`, `initGallery()`, `initGuestbook()`, `initFooter()`) to prevent code duplication across multiple HTML pages.
* Implemented **automatic active-page detection** in the shared navigation header by reading `window.location.pathname`.

### 3. Client-Side Persistence (`localStorage`)
* Built a fully functional **Interactive Guestbook** where users can submit reviews with ratings.
* Data flow: **Form Submit ➔ Input Sanitization (`.trim()`) ➔ JS State Array ➔ `localStorage` JSON Serialization ➔ Reversed Dynamic Feed Rendering**.
* Default seed comments combined seamlessly with user submissions and persisted across sessions.

### 4. Native Browser APIs & Modals
* Leveraged the native HTML5 `<dialog>` element for the photo gallery lightbox and destination modals.
* Implemented robust index-based state management (`currentImgIndex`) for the gallery lightbox supporting infinite looping through 100+ travel photos and previous/next controls.

### 5. Defensive Programming & Cross-Page Safety
* Because scripts run globally across a multi-page app, components implement strict **guard clauses** (e.g., `if (!grid) return;`) to safely abort execution on pages where specific DOM elements are absent.

---
## ⚙️ Key Features

* **📍 Destinations:** Interactive location cards triggering native modal dialogs with dynamic image switching.
* **🧭 Interactive Timeline & Tips:** Chronological milestones (2009–2010) with toggleable detail bubbles and responsive category filter panels.
* **📸 Photo Gallery:** Dynamic masonry-inspired grid rendering **106 travel photographs** from data modules with an immersive lightbox viewer.
* **📖 Guestbook:** User submission form with live validation, rating stars, reverse chronological feed, and `localStorage` persistence.
* **📱 Shared Responsive Navigation:** Hamburger menu drawer, semantic routing, and active-page detection.

---

## 🐛 Problem Solving & UX Engineering

A major focus of this project was debugging real-world browser and viewport challenges:

* **Lightbox Scroll Jump:** Closing the native `<dialog>` caused the viewport to jump to the top. *Solution:* Captured `window.scrollY` on open and restored exact coordinates with `window.scrollTo()` on close.
* **Multi-Page Script Safety:** Shared event listeners throwing null errors on pages without specific components. *Solution:* Added strict DOM element existence checks (`document.querySelector()`) and guard clauses before binding handlers.
* **Responsive Flexbox Compression:** Tips and navigation elements collapsing on narrow screens. *Solution:* Utilized `flex-shrink: 0`, controlled widths, and horizontal overflow handling.

> **Key takeaway:** *"A feature is not finished when it works under ideal conditions; it is finished when its behavior remains predictable across different users, devices, and states."*

---

## 🛠️ Technologies Used

* **HTML5:** Semantic architecture, native `<dialog>`, forms, accessible alt text.
* **CSS3:** Flexbox, CSS Grid, Bento-inspired layouts, media queries, custom responsive sizing.
* **JavaScript (Vanilla ES6+):** ES Modules, DOM manipulation, event delegation, `localStorage`, JSON, state management.
* **Zero Frameworks:** Built entirely from scratch to understand foundational browser behavior.

---

## 📌 Why This Project Matters

*My Australia Journey* is my foundational portfolio project. It demonstrates my ability to move beyond static HTML/CSS pages and architect a clean, modular, data-driven client-side application. It proves that with strong fundamentals in Vanilla JavaScript, CSS, and problem-solving, you can build rich, interactive web experiences without relying on heavy frameworks.

---

## 🔗 Live Project & Repository

👉 **[View GitHub Repository](https://github.com/kamillamacedo/my-australia-journey)**

---
*Feel free to explore the repository and code implementation!*


