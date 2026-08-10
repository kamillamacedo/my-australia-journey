// Imports -------------------------------
import { openModal } from "./components/destinations.js";
import { toggleBubble, closeBubble } from "./components/timeline.js";

// Destinations --------------------------

const destinationCards = document.querySelector(".destinations-cards");

destinationCards.addEventListener("click", (event) => {
  const card = event.target.closest(".card__button");
  if (!card) return;
  openModal(card.dataset.destination);
});

// Timeline ------------------------------

document.addEventListener("click", (event) => {
  const dot = event.target.closest(".timeline-dot");
  if (dot) {
    const id = dot.dataset.timelineId;
    toggleBubble(id, dot);
  } else {
    const clickedInsideBubble = event.target.closest(".timeline-bubble")
    if (!clickedInsideBubble) {
      closeBubble();
    }
  }
});
