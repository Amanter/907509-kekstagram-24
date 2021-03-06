import {onCloseModalClick, onPopupEscKeydown} from './close.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileUpload = document.querySelector('#upload-file');
const closeUpload = document.querySelector('#upload-cancel');
const photoUpload = document.querySelector('.img-upload__overlay');
const fileChooser = document.querySelector('.img-upload__input');
const picturePreview = document.querySelector('.img-upload__preview img');

const uploadPicture = () => {
  photoUpload.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeUpload.addEventListener('click', onCloseModalClick);
  document.addEventListener('keydown', onPopupEscKeydown);
};

fileUpload.addEventListener('change', uploadPicture);

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      picturePreview.src = reader.result;
    });
    reader.readAsDataURL(file);
  }
});
