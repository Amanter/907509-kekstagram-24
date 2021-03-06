import {onCloseModalClick, onPopupEscKeydown} from './close.js';

const FIVE_COMMENTS = 5;

const picturesContainer = document.querySelector('.pictures');
const bigPictureContainer = document.querySelector('.big-picture');
const commentsLoader = bigPictureContainer.querySelector('.comments-loader');
const socialCommentCount = bigPictureContainer.querySelector('.social__comment-count');
const bigPictureLikes = bigPictureContainer.querySelector('.likes-count');
const bigPictureCommentsCount = bigPictureContainer.querySelector('.comments-count');
const bigPictureItem = bigPictureContainer.querySelector('img');
const socialCloneCommentContainer = document.querySelector('.social__comment');
const bigPictureDescription = bigPictureContainer.querySelector('.social__caption');
const bigPictureComments = bigPictureContainer.querySelector('.social__comments');
const bigPictureClose = bigPictureContainer.querySelector('.big-picture__cancel');

const addPhotoClickHandler = (preview, {url, likes, comments, description}) => {
  const onPreviewClick = (evt) => {
    evt.preventDefault();
    bigPictureContainer.classList.remove('hidden');
    document.body.classList.add('modal-open');
    bigPictureItem.src = url;
    bigPictureLikes.textContent = likes;
    bigPictureCommentsCount.textContent = comments.length;
    bigPictureDescription.textContent = description;
    bigPictureComments.innerHTML = '';

    const createComment = (userComments) => {
      const commentsFragment = document.createDocumentFragment();
      userComments.forEach((NumComments) => {
        const cloneComment = socialCloneCommentContainer.cloneNode(true);
        cloneComment.querySelector('.social__picture').src = NumComments.avatar;
        cloneComment.querySelector('.social__picture').alt = NumComments.name;
        cloneComment.querySelector('.social__text').textContent = NumComments.message;
        commentsFragment.append(cloneComment);
      });
      bigPictureComments.appendChild(commentsFragment);
    };

    const commentsCounter = 0;
    let currentCommentsNumber = FIVE_COMMENTS;
    const initialComments = comments.slice(commentsCounter, currentCommentsNumber);
    socialCommentCount.firstChild.textContent = `${initialComments.length} ????  `;
    createComment(initialComments);

    commentsLoader.addEventListener('click', () => {
      const newCommentsNumber = currentCommentsNumber + FIVE_COMMENTS;
      const additionalComments = comments.slice(currentCommentsNumber, newCommentsNumber);
      currentCommentsNumber = newCommentsNumber;
      createComment(additionalComments);

      const renderedCommentsLength = document.querySelectorAll('.social__comment').length;

      if (comments.length === renderedCommentsLength) {
        commentsLoader.classList.add('hidden');
      }
      socialCommentCount.firstChild.textContent = `${renderedCommentsLength} ????  `;
    });

    if (comments.length > FIVE_COMMENTS) {
      socialCommentCount.classList.remove('hidden');
      commentsLoader.classList.remove('hidden');
    } else {
      socialCommentCount.classList.add('hidden');
      commentsLoader.classList.add('hidden');
    }

    bigPictureClose.addEventListener('click', onCloseModalClick);
    document.addEventListener('keydown', onPopupEscKeydown);
  };
  bigPictureClose.removeEventListener('click', onCloseModalClick);
  document.removeEventListener('keydown', onPopupEscKeydown);
  preview.addEventListener('click', onPreviewClick);
};


const addComments = (userPhotoList) => {
  const photos = picturesContainer.querySelectorAll('.picture');

  photos.forEach((photo, i) => {
    addPhotoClickHandler(photo, userPhotoList[i]);
  });
};

export {addComments};
