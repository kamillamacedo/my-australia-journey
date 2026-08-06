// Imports -------------------------------
import { openModal } from "./components/destinations.js";
import { toggleBubble } from "./components/timeline.js";

// Destinations --------------------------

const destinationCards = document.querySelector(".destinations-cards");

destinationCards.addEventListener("click", (event) => {
  const card = event.target.closest(".card__button");
  if (!card) return;
  openModal(card.dataset.destination);
});

// Timeline ------------------------------

const timelineWrapper = document.querySelector(".timeline-wrapper");

timelineWrapper.addEventListener("click", (event) => {
  const dot = event.target.closest(".timeline-dot");
  if (!dot) return;
  const id = dot.dataset.timelineId;
  toggleBubble(id, dot);
});
