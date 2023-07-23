import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const imgList = galleryItems.map(({ preview, original, description }) => `
        <li class='gallery__item'>
      <a class='gallery__link' href='${original}'>
        <img
          class='gallery__image'
          src='${preview}'          
          data-source='${original}'
          alt='${description}'
        />
      </a>
    </li>
    `).join(' ');

gallery.insertAdjacentHTML('afterbegin', imgList);

gallery.onclick = (event) => {
  event.preventDefault()
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  const instance = basicLightbox.create(
    `<img width="1400" height="900" src="${event.target.dataset.source}">`,
    {
      onShow: () => {
        window.addEventListener('keydown', onEsc);
      },
      onClose: () => {
        window.removeEventListener('keydown', onEsc);
      },
    }
    )
    instance.show();

  function onEsc(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
}
    
