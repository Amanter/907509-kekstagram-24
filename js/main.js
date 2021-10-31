import {photoDescription} from './data.js';
import {createPhotoDescription} from './render-pic.js';
import {createBigPicture} from './render-big-pic.js';

createPhotoDescription(photoDescription);

createBigPicture(photoDescription[1]);
