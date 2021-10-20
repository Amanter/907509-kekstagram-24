import {ARRAY_NUMBER, getPhotoDescription} from './data.js';
import {createPhotoDescription} from './render-pic.js';

const photoDescription = Array.from({length: ARRAY_NUMBER}, (value, num) => getPhotoDescription(num++));

// eslint-disable-next-line no-console
console.log(photoDescription);

photoDescription.forEach((arr) => createPhotoDescription(arr));

