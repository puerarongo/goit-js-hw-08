import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

// todo Stage 1

// * Stage 1.1

const galleryInnerEl = galleryItems.map(({ preview, original, description }) => {
    return `<li><a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt="${description}" />
</a></li>`  
}).join("");

// * Stage 1.2

galleryEl.insertAdjacentHTML("beforeend", galleryInnerEl);

const a = galleryEl.querySelectorAll(".gallery__link")
console.log(a)


// todo Stage 2

   const lightbox = new SimpleLightbox(".gallery a", {
      captionsData: 'alt',
      captionDelay: 250,
      captionPosition: 'bottom',
    });
