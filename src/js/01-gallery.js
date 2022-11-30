// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryItemsContainer = document.querySelector('.gallery');
const galleryItemsMarkup = galleryMarkup(galleryItems);

galleryItemsContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup);
galleryItemsContainer.addEventListener("click", onGalleryItemsContainerClick);

function onGalleryItemsContainerClick(evt) {
    console.log(evt.target)
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
}

function galleryMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    }).join('');
}

let galleryLightBox = new SimpleLightbox('.gallery__item', {
        capture: true,
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250
});
