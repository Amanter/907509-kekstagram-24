const SCALE_MIN_VALUE = 25;
const SCALE_MAX_VALUE = 100;
const SCALE_STEP = 25;

const scaleUpButton = document.querySelector('.scale__control--smaller');
const scaleDownButton = document.querySelector('.scale__control--bigger');
const picturePreview = document.querySelector('.img-upload__preview');
const scaleControlValue = document.querySelector('.scale__control--value');

let currentScale = SCALE_MAX_VALUE;
scaleControlValue.value = `${currentScale}%`;

const setPictureScale = (newScale) => {
  scaleControlValue.value = `${newScale}%`;
  picturePreview.style = `transform: scale(${newScale / SCALE_MAX_VALUE})`;
  currentScale = newScale;
};

const onScaleDownButton = () => {
  if (currentScale > SCALE_MIN_VALUE) {
    currentScale -= SCALE_STEP;
    setPictureScale(currentScale);
  }
};

const onScaleUpButton = () => {
  if (currentScale < SCALE_MAX_VALUE) {
    currentScale += SCALE_STEP;
    setPictureScale(currentScale);
  }
};

scaleUpButton.addEventListener('click', onScaleDownButton);
scaleDownButton.addEventListener('click', onScaleUpButton);

export {setPictureScale};
