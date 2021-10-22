const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();

const createPhotoDescription = (photoData) => {
  photoData.forEach((num) => {
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = num.url;
    photoElement.querySelector('.picture__likes').textContent = num.likes;
    photoElement.querySelector('.picture__comments').textContent = num.comments.length;
    fragment.appendChild(photoElement);
  });
  pictureContainer.appendChild(fragment);
};

export {createPhotoDescription};
