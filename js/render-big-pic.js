import {isEscapeKey} from './utils.js';

const LOAD_FIVE_COMMENTS = 5;

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
const imagePreview = document.querySelector('.img-upload__preview');
const uploadFile = document.querySelector('#upload-file');
const noEffectRadio = document.querySelector('#effect-none');
const sliderWrapper = document.querySelector('.img-upload__effect-level');
const closeUpload = document.querySelector('#upload-cancel');
const photoUpload = document.querySelector('.img-upload__overlay');

let commentsArray = [];

const createComment = (userComments) => {
  const CommentsFragment = document.createDocumentFragment();
  userComments.forEach((comments) => {
    const cloneComment = socialCloneCommentNode.cloneNode(true);
    cloneComment.querySelector('.social__picture').src = comments.avatar;
    cloneComment.querySelector('.social__picture').alt = comments.name;
    cloneComment.querySelector('.social__text').textContent = comments.message;
    CommentsFragment.append(cloneComment);
  });
  return CommentsFragment;
};

const  generateComments = (comments) => {

  const firstComments = comments.slice(0, LOAD_FIVE_COMMENTS);
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
    bigPictureComments.children.length + LOAD_FIVE_COMMENTS);
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

  bigPictureClose.addEventListener('click', onCloseModalClick);

  document.addEventListener('keydown', onPhotoPopupKeydown);
}

function onCloseModalClick () {
  sectionBigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  socialCommentsLoader.classList.remove('hidden');
  imagePreview.classList = 'img-upload__preview';
  sliderWrapper.classList.add('visually-hidden');
  imagePreview.style.filter = 'none';
  noEffectRadio.checked = 'true';
  uploadFile.value = '';

  bigPictureClose.removeEventListener('click', onCloseModalClick);

  document.removeEventListener('keydown', onPhotoPopupKeydown);
}

const onUploadButtonClick = () => {
  photoUpload.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeUpload.addEventListener('click', onCloseModalClick);
  document.addEventListener('keydown', onPhotoPopupKeydown);
};

uploadFile.addEventListener('change', onUploadButtonClick);

function onPhotoPopupKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onCloseModalClick();
  }
}

export {onCloseModalClick,createBigPicture};
