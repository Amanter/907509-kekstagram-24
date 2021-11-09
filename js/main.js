import {photoDescription} from './data.js';
import {createBigPicture} from './render-big-pic.js';
import {setPictureScale} from './scale-picture.js';
import './render-pic.js';
import './form-validation.js';
import './render-big-pic.js';
import './effect-filter.js';

setPictureScale(100);

createBigPicture(photoDescription[1]);
