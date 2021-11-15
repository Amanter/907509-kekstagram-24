import {shuffle, debounce} from './utils.js';
import {createPhotos} from './render-preview-pic.js';
import {addComments} from './render-big-pic.js';

const TIME_DELAY = 500;
const RANDOM_PICTURES = 10;

const picturesList = document.querySelector('.pictures');
const imgFilters = document.querySelector('.img-filters');
const imgFilterButtons = imgFilters.querySelectorAll('.img-filters__button');
const getDefaultPictures = imgFilters.querySelector('#filter-default');
const getRandomPictures = imgFilters.querySelector('#filter-random');
const getDiscussedPictures = imgFilters.querySelector('#filter-discussed');

const setFiltersActive = (activeButton) => {
  imgFilterButtons.forEach((imgFilterButton) => {
    imgFilterButton.classList.remove('img-filters__button--active');
  });
  activeButton.classList.add('img-filters__button--active');
};

const setFilterDebounced = (debounce(
  (photoList) => {
    picturesList.querySelectorAll('.picture').forEach((picture) => {
      picture.remove();
    });
    createPhotos(photoList);
    addComments(photoList);
  },
  TIME_DELAY,
));

const createFilter = (userPhotos) => {
  getDefaultPictures.addEventListener('click', () => {
    setFiltersActive(getDefaultPictures);
    const defaultPictures = userPhotos.sort((a, b) => a.id > b.id ? 1 : -1);
    setFilterDebounced(defaultPictures);
  });

  getRandomPictures.addEventListener('click', () => {
    setFiltersActive(getRandomPictures);
    shuffle(userPhotos);
    const randomPictures = userPhotos.slice(0, RANDOM_PICTURES);
    setFilterDebounced(randomPictures);
  });

  getDiscussedPictures.addEventListener('click', () => {
    setFiltersActive(getDiscussedPictures);
    const discussedPictures = userPhotos.sort((a, b) => a.comments.length > b.comments.length ? 1 : -1);
    discussedPictures.reverse();
    setFilterDebounced(discussedPictures);
  });
};
export {createFilter};

