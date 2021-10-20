const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();

const createPhotoDescription = ({url, likes, comments}) => {
  const photoElement = pictureTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  fragment.appendChild(photoElement);
  pictureContainer.appendChild(fragment);
};

export {createPhotoDescription};
