import { galleryData } from "../data/galleryData.js";

const lightbox = document.querySelector("#gallery-lightbox");
const lightboxClose = document.querySelector("#lightbox-close");
const mainImage = document.querySelector("#lightbox-main-img");
const nextBtn = document.querySelector("#lightbox-next");
const prevBtn = document.querySelector("#lightbox-prev");

let currentImgIndex = 0;

export function initGallery() {
  const grid = document.querySelector(".gallery-full-grid");
  if (!grid) return;
  const gallery = galleryData
    .map((img) => {return `
      <a id="${img.id}" class="${img.gridClass}" href="#">
        <img src="${img.src}" alt="${img.alt}" />
      </a>`;
    }).join("");
    grid.innerHTML = gallery;
    lightboxClose.addEventListener("click", closeLightbox);
    nextBtn.addEventListener("click", nextImage);
    prevBtn.addEventListener("click", prevImage);
}

export function openLightbox(img) {
    currentImgIndex = galleryData.findIndex(item => item.src === img.getAttribute("src"));
    mainImage.src = img.src;
    mainImage.alt = img.alt;
    lightbox.showModal();
}

function closeLightbox() {
    lightbox.close();
}

function nextImage() {
    currentImgIndex++;
    if (currentImgIndex >= galleryData.length) currentImgIndex = 0;
    const nextImg = galleryData[currentImgIndex];
    mainImage.src = nextImg.src;
    mainImage.alt = nextImg.alt;
}

function prevImage() {
    currentImgIndex--;
    if (currentImgIndex < 0) currentImgIndex = galleryData.length - 1;
    const prevImg = galleryData[currentImgIndex];
    mainImage.src = prevImg.src;
    mainImage.alt = prevImg.alt;
}