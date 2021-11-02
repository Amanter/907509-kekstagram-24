import {isEscapeKey} from './utils.js';

const MAX_HASHTAG_LENGTH = 20;
const MAX_HASHTAG_ARRAY_LENGTH = 5;
const MAX_COMMENT_LENGTH = 140;

const regExpression = /^#[A-Za-zА-Яа-яЁё0-9]*$|(^$)/;

const body = document.querySelector('body');
const redactingFormPic = document.querySelector('#upload-file');
const closeButton = document.querySelector('#upload-cancel');
const inputHashText = document.querySelector('.text__hashtags');
const inputComment = document.querySelector('.text__description');
const imgUpload = document.querySelector('.img-upload__overlay');


const closeModalEdit = () => {
  imgUpload.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPhotoEditKeydown);
  closeButton.removeEventListener('click', closeModalEdit);
};

const openModalEdit = () => {
  imgUpload.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPhotoEditKeydown);
  closeButton.addEventListener('click', closeModalEdit);
};

redactingFormPic.addEventListener('change', () => openModalEdit());

function onPhotoEditKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModalEdit();
  }
}

inputHashText.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

inputHashText.addEventListener('input', () => {
  const hashTextArray = inputHashText.value.split(' ');
  const newHashtagArray = [];
  inputHashText.setCustomValidity('');

  hashTextArray.forEach((hashText) => {
    if (newHashtagArray.includes(hashText)) {
      inputHashText.setCustomValidity('Такой хэш-тэг уже есть');
    }
    else {
      newHashtagArray.push(hashText);
    }
    if (!regExpression.test(hashText)) {
      inputHashText.setCustomValidity('Хеш-тег не может содержать пробелы, спецсимволы (#, @, $ и т. п.), и должен начинаться с #');
    }
    if (hashText.length > MAX_HASHTAG_LENGTH) {
      inputHashText.setCustomValidity('Максимальная длина одного хэш-тега 20 символов.');
    }
    if (hashText === '#' ) {
      inputHashText.setCustomValidity('Хеш-тег не может состоять только из одной решётки.');
    }
    if (newHashtagArray.length > MAX_HASHTAG_ARRAY_LENGTH) {
      inputHashText.setCustomValidity('Нельзя указать больше пяти хэш-тегов.');
    }
  });
  inputHashText.reportValidity();
});

inputComment.addEventListener('input', () => {
  inputComment.setCustomValidity('');
  const commentLength = inputComment.value.length;
  if (commentLength > MAX_COMMENT_LENGTH) {
    inputComment.setCustomValidity(`Удалите лишние ${commentLength - MAX_COMMENT_LENGTH} символы.`);
  }
  inputComment.reportValidity();
});
