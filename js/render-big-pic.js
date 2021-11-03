import {isEscapeKey} from './utils.js';

const FIVE_COMMENTS = 5;

const body = document.querySelector('body');
const sectionBigPicture = document.querySelector('.big-picture');
const bigPictureItem = document.querySelector('.big-picture__img img');
const bigPictureLikes = document.querySelector('.likes-count');
const bigPictureCommentsCount = document.querySelector('.comments-count');
const bigPictureDescription = document.querySelector('.social__caption');
const bigPictureComments = document.querySelector('.social__comments');
const socialCloneCommentNode = document.querySelector('.social__comment');
const bigPictureClose = document.querySelector('.big-picture__cancel');
const socialCommentCount = document.querySelector('.social__comment-count');
const socialCommentsLoader = document.querySelector('.comments-loader');

let commentsArray = [];

const createComment = (photoData) => {
  const fragment = document.createDocumentFragment();
  photoData.forEach((comments) => {
    const cloneComment = socialCloneCommentNode.cloneNode(true);
    cloneComment.querySelector('.social__picture').src = comments.avatar;
    cloneComment.querySelector('.social__picture').alt = comments.name;
    cloneComment.querySelector('.social__text').textContent = comments.message;
    fragment.append(cloneComment);
  });
  return fragment;
};

const  generateComments = (comments) => {

  const firstComments = comments.slice(0, FIVE_COMMENTS);
  const openComments = createComment(firstComments);
  socialCommentCount.firstChild.textContent = `${firstComments.length  } из  `;
  bigPictureComments.appendChild(openComments);

  if (firstComments.length === comments.length) {
    socialCommentsLoader.classList.add('hidden');
  }
};

const addCommentsOnClick = () => {
  const newComments = commentsArray.slice(
    bigPictureComments.children.length,
    bigPictureComments.children.length + FIVE_COMMENTS);
  const generateNewComments = createComment(newComments);

  bigPictureComments.appendChild(generateNewComments);

  if (commentsArray.length === bigPictureComments.children.length) {
    socialCommentsLoader.classList.add('hidden');
  }

  socialCommentCount.firstChild.textContent = `${bigPictureComments.children.length  } из  `;
};

const createBigPicture = (photoData) => {
  openBigPicture();

  commentsArray = photoData.comments;
  bigPictureItem.src = photoData.url;
  bigPictureLikes.textContent = photoData.likes;
  bigPictureCommentsCount.textContent = photoData.comments.length;
  bigPictureDescription.textContent = photoData.description;

  bigPictureComments.innerHTML = '';

  bigPictureClose.addEventListener('click', openBigPicture);
  socialCommentsLoader.addEventListener('click', addCommentsOnClick);

  generateComments(photoData.comments);
};

function openBigPicture () {

  sectionBigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  bigPictureClose.addEventListener('click', closeBigPicture);

  document.addEventListener('keydown', onPhotoPopupKeydown);
}

function closeBigPicture () {
  sectionBigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  socialCommentsLoader.classList.remove('hidden');

  bigPictureClose.removeEventListener('click', closeBigPicture);

  document.removeEventListener('keydown', onPhotoPopupKeydown);
}

function onPhotoPopupKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

export {createBigPicture};
