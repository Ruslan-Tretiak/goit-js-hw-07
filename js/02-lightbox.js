// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// console.log(galleryItems);

// console.log(basicLightbox);
// const result = _.add(2, 3);
// console.log(result); // 5
import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const imgList = galleryItems.map(({ preview, original, description }) => `
        <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}" />
   </a>
</li>`).join(' ');

gallery.insertAdjacentHTML('afterbegin', imgList);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
})
  

// gallery.onclick = (event) => {
//   event.preventDefault()
//   if (!event.target.classList.contains('gallery__image')) {
//     return;
//   }
//   const instance = basicLightbox.create(
//     `<img width="1400" height="900" src="${event.target.dataset.source}">`,
//     {
//       onShow: () => {
//         window.addEventListener('keydown', onEsc);
//       },
//       onClose: () => {
//         window.removeEventListener('keydown', onEsc);
//       },
//     }
//     )
//     instance.show();

//   function onEsc(event) {
//     if (event.code === 'Escape') {
//       instance.close();
//     }
//   }
// };

