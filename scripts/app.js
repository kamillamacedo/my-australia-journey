import { openModal } from "./components/modal.js";
import { openPopUp } from "./components/timeline.js";

const destinationCards = document.querySelector(".destinations-cards");const timelineWrapper = document.querySelector(".timeline-wrapper");


destinationCards.addEventListener("click", (event) => {
  const card = event.target.closest(".card__button");
  if (!card) return;
  openModal(card.dataset.destination);
});

timelineWrapper.addEventListener("mouseover", (e)=>{
    const dot = e.target.closest(".timeline-dot");
    if (!dot) return;
     const event = dot.dataset.timelineId;
    openPopUp(event);
})