// Imports -------------------------------
import { openModal } from "./components/destinations.js";
import { toggleBubble, closeBubble } from "./components/timeline.js";
import { toggleTipsPanel, closeTipsPanel } from "./components/tips.js";
import { initHeader } from "./components/header.js";
import { initFooter } from "./components/footer.js";

// Header--------------------------------

initHeader();

document.addEventListener("click", (event) => {
  const menuBtn = event.target.closest(".menu-toggle-button");
  const navMenu = document.querySelector(".navigation-menu");
  const openedMenu = document.querySelector(".navigation-menu.menu-is-open");
  if (menuBtn && navMenu) {
    navMenu.classList.toggle("menu-is-open");
  }
  if (openedMenu && !event.target.closest(".navigation-menu")) {
    openedMenu.classList.remove("menu-is-open");
  }
});

// Destinations --------------------------

document.addEventListener("click", (event) => {
    const card = event.target.closest(".card__button");
    if (!document.querySelector('.destinations')) return;
    if (!card) return;
    openModal(card.dataset.destination);
  });


// Timeline ------------------------------

document.addEventListener("click", (event) => {
  const dot = event.target.closest(".timeline-dot");
  if (!document.querySelector('.timeline')) return;
  if (dot) {
    const id = dot.dataset.timelineId;
    toggleBubble(id, dot);
  } else {
    const clickedInsideBubble = event.target.closest(".timeline-bubble");
    if (!clickedInsideBubble) {
      closeBubble();
    }
  }
});

// Tips ----------------------------------

document.addEventListener("click", (event) => {
  const card = event.target.closest(".tips-button");
  if (!document.querySelector('.tips')) return;
  if (card) {
    const category = card.dataset.category;
    toggleTipsPanel(card, category);
  } else {
    const isCloseButton = event.target.closest(".tips-close-button");
    const clickedInsidePanel = event.target.closest(".tips-content-panel");
    if (isCloseButton || !clickedInsidePanel) {
      closeTipsPanel();
    }
  }
});

// Gallery ----------------------------------

// Footer -----------------------------------

initFooter();
