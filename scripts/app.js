import { openModal } from "./components/modal.js";

const destinationCards = document.querySelector(".destinations-cards");

destinationCards.addEventListener("click", (event) => {
  const card = event.target.closest(".card__button");
  if (!card) return;
  openModal(card.dataset.destination);
});
