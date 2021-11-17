import {getStringLenth} from './utils.js';

const MAX_HASHTAGS_NUMBER = 5;
const REG_HASHTAG = /^#[A-Za-zА-Яа-яЁё0-9]*$|(^$)/;
const INVALID_INPUT_STYLE = 'red';
const VALID_INPUT_STYLE = 'green';
const TEXT_VALIDATE = `Хэш-тег должен начинаться с символа # и состоять из букв и чисел.
Максимальная длина одного хэш-тега 20 символов, включая символ #.
Хэш-теги должны разделяться пробелами`;
const ERROR_NO_REPEAT = 'Хэштеги не должны повторяться';
const MAX_LENGHT = 140;
const inputHashText = document.querySelector('.text__hashtags');
const inputComment = document.querySelector('.text__description');

const validationFormHashtag = (evt) => {
  if (inputHashText.value !== '') {
    const hashtags = inputHashText.value.toLowerCase().trim().split(' ').filter((hashtag) => hashtag);
    const hashtagsSet = new Set(hashtags);
    hashtags.forEach((hashtag) => {
      if (!REG_HASHTAG.test(hashtag)) {
        inputHashText.setCustomValidity(TEXT_VALIDATE);
        inputHashText.style.outlineColor = INVALID_INPUT_STYLE;
        evt.preventDefault();
      } else if (hashtags.length !== hashtagsSet.size) {
        inputHashText.setCustomValidity(ERROR_NO_REPEAT);
        inputHashText.style.outlineColor = INVALID_INPUT_STYLE;
        evt.preventDefault();
      } else {
        inputHashText.setCustomValidity('');
        inputHashText.style.outlineColor = VALID_INPUT_STYLE;
      }
      inputHashText.reportValidity();
    });
    if (hashtags.length > MAX_HASHTAGS_NUMBER) {
      inputHashText.setCustomValidity(`Количество хэштегов должно быть не более ${MAX_HASHTAGS_NUMBER}`);
    }
  } else {
    inputHashText.setCustomValidity('');
    inputHashText.style.outlineColor = VALID_INPUT_STYLE;
  }
};
inputHashText.addEventListener('input', validationFormHashtag);

const validationFormDescription = (evt) => {
  const textDescriptionLength = getStringLenth(inputComment.value, MAX_LENGHT);
  if (!textDescriptionLength) {
    inputComment.setCustomValidity(`Удалите лишние ${inputComment.value.length - MAX_LENGHT} симв.`);
    inputComment.style.outlineColor = INVALID_INPUT_STYLE;
    evt.preventDefault();
  } else {
    inputComment.setCustomValidity('');
    inputComment.style.outlineColor = VALID_INPUT_STYLE;
  }
  inputComment.reportValidity();
};
inputComment.addEventListener('input', validationFormDescription);

