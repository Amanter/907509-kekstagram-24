import {photoDescription} from './data.js';
const body = document.querySelector('body');
const sectionBigPicture = document.querySelector('.big-picture');
const bigPictureItem = document.querySelector('.big-picture__img');
const bigPictureLikes = document.querySelector('.likes-count');
const bigPictureCommentsCount = document.querySelector('.comments-count');
const bigPictureDescription = document.querySelector('.social__caption');
const bigPictureComments = document.querySelector('.social__comments');
const socialCloneCommentNode = document.querySelector('.social__comment');
const bigPictureClose = document.querySelector('.big-picture__cancel');
const socialCommentCount = document.querySelector('.social__comment-count');
const socialCommentsLoader = document.querySelector('.comments-loader');

const createComment = (comments) => {
  const cloneComment = socialCloneCommentNode.cloneNode(true);
  cloneComment.querySelector('.social__picture').src = comments.avatar;
  cloneComment.querySelector('.social__picture').alt = comments.name;
  cloneComment.querySelector('.social__text').textContent = comments.message;
  bigPictureComments.append(cloneComment);
};

const commentsValue = createComment(photoDescription);

const openBigPicture = (photoData) => {
  bigPictureComments.innerHTML = '';
  sectionBigPicture.classList.remove('hidden');
  bigPictureItem.src = photoData.url;
  bigPictureLikes.textContent = photoData.likes;
  bigPictureCommentsCount.textContent = photoData.comments.length;
  bigPictureDescription.textContent = photoData.description;
  body.classList.add('modal-open');
  socialCommentCount.classList.add('hidden');
  socialCommentsLoader.classList.add('hidden');
  photoData.comments.forEach(commentsValue);
};

const closePicture = () => {
  sectionBigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  socialCommentCount.classList.remove('hidden');
  socialCommentsLoader.classList.remove('hidden');
};

bigPictureClose.addEventListener('click', closePicture());

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePicture();
  }
});

export {openBigPicture};