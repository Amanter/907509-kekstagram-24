const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesFragment = document.createDocumentFragment();
const buttonFilters = document.querySelector('.img-filters');

const createPhotos = (photoData) => {
  photoData.forEach(({url, likes, comments}) => {
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    picturesFragment .appendChild(photoElement);
  });
  picturesContainer.appendChild(picturesFragment);
  buttonFilters.classList.remove('img-filters--inactive');
};

export {createPhotos};
