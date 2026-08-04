import destinations from "../data/destinations.js";

const modal = document.querySelector(".modal");
const modalClose= document.querySelector(".modal__close");
const modalMainImage = document.querySelector(".modal__main-image");
const modalGallery = document.querySelector(".modal__gallery");
const modalTitle = document.querySelector(".modal__title");
const modalSubtitle = document.querySelector(".modal__subtitle");
const modalDescription = document.querySelector(".modal__description");
const modalTags = document.querySelector(".modal__tags");

 function createModalContent(destination) {
    modalMainImage.src = destination.mainImage;
    modalTitle.textContent = destination.title;
    modalSubtitle.textContent = `${destination.location} - ${destination.date}`;
    modalDescription.textContent = destination.description;

    clearGalleryTags();

    destinations.tags.forEach(tag=> {
        const span = document.createElement("span");
        span.classList.add("modal__tag-item");
        span.textContent = tag;
        modalTags.appendChild(span);
    });

    destinations.gallery.forEach(imageUrl =>{
        const galleryThumb = document.createElement("img");
        galleryThumb.classList.add("modal__gallery-item");
        galleryThumb.src = imageUrl;
        galleryThumb.addEventListener("click", ()=>{
            modalMainImage.src = imageUrl;
        })
        modalGallery.appendChild(galleryThumb)
    });

 }

 function clearGalleryTags() {
    modalTags.innerHTML = "";
    modalGallery.innerHTML = "";
 }

 function openModal(destinationId) {
    const destination = destinations.find(dest => dest.id === destinationId);
    createModalContent(destination);
    modal.showModal();
 }

 function closeModal() {
    modal.close();
 }