
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

// todo Stage 1

// * Stage 1.1

const galleryInnerEl = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href=${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    
}).join("");

// * Stage 1.2

galleryEl.insertAdjacentHTML("beforeend", galleryInnerEl);

// todo Stage 2


galleryEl.addEventListener("click", selectPicture);


const instance = basicLightbox.create(`<img class="picture__lightbox">`,
  {
    onShow: (condition) => {
          window.addEventListener("keydown", keyboardEvent);
    }
  },
  {
    onClose: (condition) => {
          window.removeEventListener("keydown", keyboardEvent);
    }
  }
);


function selectPicture(event) {
    event.preventDefault();

  if (event.target.nodeName === "IMG") {
    instance.element().querySelector(".picture__lightbox")
      .setAttribute("src", `${event.target.dataset.source}`)

      instance.show();
  };
}; 

function keyboardEvent(event) {
  if (event.key === "Escape") {
    instance.close()
    console.log("!")
  }
}

