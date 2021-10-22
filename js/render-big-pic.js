const body = document.querySelector('.body');
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
const bigPictureFragment = document.createDocumentFragment();

const renderBigPicture = (photoData) => {
  bigPictureItem.src = photoData.url;
  bigPictureLikes.textContent = photoData.likes;
  bigPictureCommentsCount.textContent = photoData.comments.length;
  bigPictureDescription.textContent = photoData.description;

  bigPictureComments.innerHTML = '';

  photoData.comments.forEach((num) => {
    const cloneComment = socialCloneCommentNode.cloneNode(true);
    cloneComment.querySelector('.social__picture').src = num.avatar;
    cloneComment.querySelector('.social__picture').alt = num.name;
    cloneComment.querySelector('.social__text').textContent = num.message;
    bigPictureFragment.appendChild(cloneComment);
  });
  socialCloneCommentNode.appendChild(bigPictureFragment);
};

const openBigPicture = () => {
  sectionBigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  socialCommentCount.classList.add('hidden');
  socialCommentsLoader.classList.add('hidden');
};

openBigPicture();

const closeBigPicture = () => {
  sectionBigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  socialCommentCount.classList.remove('hidden');
  socialCommentsLoader.classList.remove('hidden');
};

bigPictureClose.addEventListener('click', () => {
  sectionBigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  socialCommentCount.classList.remove('hidden');
  socialCommentsLoader.classList.remove('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
});

export {renderBigPicture};
