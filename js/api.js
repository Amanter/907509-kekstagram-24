import {createPhotos} from './render-preview-pic.js';
import {addComments} from './render-big-pic.js';
import {onFormSuccessSend, onFormErrorSend} from './server-messages.js';
import {showAlert} from './utils.js';
import {createFilter} from './filter.js';

const imgUploadForm = document.querySelector('.img-upload__form');

const getData = () => {
  fetch('https://24.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((userPhotos) => {
      createPhotos(userPhotos);
      addComments(userPhotos);
      createFilter(userPhotos);
    })
    .catch(() => showAlert ('Ошибка при загрузке фото. Попробуйте ещё раз'));
};
getData();

const sendData = (onSuccess, onError) => {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    fetch('https://24.javascript.pages.academy/kekstagram',
      {
        method: 'POST',
        body: new FormData(evt.target),
      })
      .then(() => onSuccess())
      .catch(() => onError());
  });
};

sendData(onFormSuccessSend, onFormErrorSend);
