import {photoDescription} from './main.js';

const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();

const createPhotoDescription = photoDescription;
createPhotoDescription.forEach((photoArr) => {
  const photoElement = pictureTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = photoArr.url;
  photoElement.querySelector('.picture__likes').textContent = photoArr.likes;
  photoElement.querySelector('.picture__comments').textContent = photoArr.comments;
  fragment.appendChild(photoElement);
});
pictureContainer.appendChild(fragment);

export {createPhotoDescription};
