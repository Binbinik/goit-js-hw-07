import { galleryItems } from "./gallery-items.js";
// Change code below this line

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
            <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </li>
        `;
    })
    .join("");
}

const galleryMarkup = createGalleryItems(galleryItems);
const galleryList = document.querySelector(".gallery");
galleryList.innerHTML = galleryMarkup;
console.log(galleryItems);
