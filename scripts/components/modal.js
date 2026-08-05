import { destinations } from "../data/destinations.js";

const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");
const modalMainImage = document.querySelector(".modal__main-img");
const modalGallery = document.querySelector(".modal__gallery");
const modalTitle = document.querySelector(".modal__title");
const modalSubtitle = document.querySelector(".modal__subtitle");
const modalDescription = document.querySelector(".modal__description");
const modalTags = document.querySelector(".modal__tags");
let scrollPosition = null;

function createModalContent(destination) {
  modalMainImage.src = destination.mainImage;
  modalTitle.textContent = destination.title;
  modalSubtitle.innerHTML = `${destination.location} - <time datetime="${destination.date}">${destination.date}</time>`;
  modalDescription.textContent = destination.description;

  clearGalleryTags();

  destination.gallery.forEach((imageUrl) => {
    const thumbContent = document.createElement("div");
    const galleryThumb = document.createElement("img");
    thumbContent.classList.add("modal__gallery-item-container");
    galleryThumb.classList.add("modal__gallery-item");

    galleryThumb.src = imageUrl;
    galleryThumb.addEventListener("click", () => {
      modalMainImage.src = imageUrl;
    });

    thumbContent.appendChild(galleryThumb);
    modalGallery.appendChild(thumbContent);
  });

  const wrapper = document.createElement("div");
  wrapper.classList.add("modal__gallery-wrapper");

  modalGallery.parentNode.insertBefore(wrapper, modalGallery);

  const btnUp = document.createElement("button");
  btnUp.classList.add("modal__gallery-arrow", "modal__gallery-arrow--up");
  btnUp.innerHTML = "▲";
  const btnDown = document.createElement("button");
  btnDown.classList.add("modal__gallery-arrow", "modal__gallery-arrow--down");
  btnDown.innerHTML = "▼";

  wrapper.appendChild(btnUp);
  wrapper.appendChild(modalGallery);
  wrapper.appendChild(btnDown);

  btnUp.addEventListener("click", () => {
    modalGallery.appendChild(modalGallery.firstElementChild);
  });

  btnDown.addEventListener("click", () => {
    modalGallery.prepend(modalGallery.lastElementChild);
  });

  destination.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.classList.add("modal__tag-item");
    span.textContent = tag;
    modalTags.appendChild(span);
  });
}

function clearGalleryTags() {
  if (modalGallery.parentElement.classList.contains("modal__gallery-wrapper")) {
    const wrapper = modalGallery.parentElement;
    wrapper.parentElement.insertBefore(modalGallery, wrapper);
    wrapper.remove();
  }
  modalTags.innerHTML = "";
  modalGallery.innerHTML = "";
}

function openModal(destinationId) {
  const destination = destinations.find((dest) => dest.id === destinationId);
  createModalContent(destination);
  scrollPosition = window.scrollY;
  modal.showModal();
}

function closeModal() {
  modal.close();
  window.scrollTo({
    top: scrollPosition,
    behavior: "instant",
  });
}

modalClose.addEventListener("click", closeModal);

export { openModal };
