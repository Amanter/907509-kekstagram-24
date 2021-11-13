import {isEscapeKey} from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const photoUpload = document.querySelector('.img-upload__overlay');
const textDescription = photoUpload.querySelector('.text__description');
const textHashtag = document.querySelector('.text__hashtags');
const uploadFile = document.querySelector('#upload-file');
const commentInput = bigPicture.querySelector('.social__footer-text');
const imagePreview = document.querySelector('.img-upload__preview');
const noEffectRadio = document.querySelector('#effect-none');
const sliderWrapper = document.querySelector('.img-upload__effect-level');

const onCloseModalClick = () => {
  photoUpload.classList.add('hidden');
  bigPicture.classList.add('hidden');
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  document.body.classList.remove('modal-open');
  commentInput.value = '';
  uploadFile.value = '';
  textDescription.value = '';
  textHashtag.value = '';
  imagePreview.style.filter = 'none';
  noEffectRadio.checked = 'true';
  sliderWrapper.classList.add('visually-hidden');
};

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    if (textHashtag === document.activeElement || textDescription === document.activeElement) {
      evt.stopPropagation();
    } else {
      onCloseModalClick();
    }
  }
};

const closeModalMessage = (messageTemplate, messageCloseButton, messageInner) => {
  messageCloseButton.addEventListener('click', () => {
    messageTemplate.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      messageTemplate.remove();
    }
  });
  messageTemplate.addEventListener('click', (evt) => {
    const isClickInside = messageInner.contains(evt.target);

    if (!isClickInside) {
      messageTemplate.remove();
    }
  });
};

export {onCloseModalClick, onPopupEscKeydown, closeModalMessage};
