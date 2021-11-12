
import {createPhotos} from './preview.js';
import {createBigPicture} from './full-photo.js';

import {showAlert} from './utils.js';

const getUserPhotos = () => {
  fetch('https://24.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((userPhotos) => {
      createPhotos(userPhotos);
      createBigPicture(userPhotos);
    })
    .catch(() => showAlert ('Ошибка при загрузке фото. Попробуйте ещё раз'));
};
getUserPhotos();

