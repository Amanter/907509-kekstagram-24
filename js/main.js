import {photoDescription} from './data.js';
import {createPhotoDescription} from './render-pic.js';
import {openBigPicture} from './render-big-pic.js';

createPhotoDescription(photoDescription);

openBigPicture(photoDescription[1]);
