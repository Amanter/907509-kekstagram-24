import {ARRAY_NUMBER, getPhotoDescription} from './data.js';

const photoDescription = Array.from({length: ARRAY_NUMBER}, (value, num) => getPhotoDescription(num++));
photoDescription;
