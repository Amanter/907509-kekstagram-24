const imagePreview = document.querySelector('.img-upload__preview');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');
const sliderContainer = document.querySelector('.img-upload__effect-level');

const noEffectButton = document.querySelector('#effect-none');
const chromeEffectButton = document.querySelector('#effect-chrome');
const sepiaEffectButton = document.querySelector('#effect-sepia');
const marvinEffectButton = document.querySelector('#effect-marvin');
const phobosEffectButton = document.querySelector('#effect-phobos');
const heatEffectButton = document.querySelector('#effect-heat');

sliderContainer.classList.add('visually-hidden');

const effects = {
  chrome: {
    NAME: 'grayscale',
    HTML_CLASS: 'effects__preview--chrome',
    UNIT: '',
    MIN: 0,
    MAX: 1,
    STEP: 0.1,
    START: 1,
  },
  sepia: {
    NAME: 'sepia',
    HTML_CLASS: 'effects__preview--sepia',
    UNIT: '',
    MIN: 0,
    MAX: 1,
    STEP: 0.1,
    START: 1,
  },
  marvin: {
    NAME: 'invert',
    HTML_CLASS: 'effects__preview--marvin',
    UNIT: '%',
    MIN: 0,
    MAX: 100,
    STEP: 1,
    START: 100,
  },
  phobos: {
    NAME: 'blur',
    HTML_CLASS: 'effects__preview--phobos',
    UNIT: 'px',
    MIN: 0,
    MAX: 3,
    STEP: 0.1,
    START: 3,
  },
  heat: {
    NAME: 'brightness',
    HTML_CLASS: 'effects__preview--heat',
    UNIT: '',
    MIN: 1,
    MAX: 3,
    STEP: 0.1,
    START: 3,
  },
};

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: (value) => Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1),
    from: (value) => parseFloat(value),
  },
});

const changeEffect = (effectClass, effectStyle, effectUnit) => {
  sliderContainer.classList.remove('visually-hidden');
  imagePreview.classList = 'img-upload__preview';
  imagePreview.classList.add(`${effectClass}`);
  effectLevelSlider.noUiSlider.on('update', (values, handle) => {
    effectLevel.value = values[handle];
    imagePreview.style.filter = `${effectStyle}(${effectLevel.value}${effectUnit})`;
  });
};

const sliderOptionsHandler = (minValue, maxValue, startValue, stepValue) => {
  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: minValue,
      max: maxValue,
    },
    start: startValue,
    step: stepValue,
  });
};

const onEffects = () => {
  if (noEffectButton.checked) {
    imagePreview.classList = 'img-upload__preview';
    sliderContainer.classList.add('visually-hidden');
    imagePreview.style.filter = 'none';
  } else if (chromeEffectButton.checked) {
    changeEffect(effects.chrome.HTML_CLASS, effects.chrome.NAME, effects.chrome.UNIT);
    sliderOptionsHandler(effects.chrome.MIN, effects.chrome.MAX, effects.chrome.START, effects.chrome.STEP);
  } else if (sepiaEffectButton.checked) {
    changeEffect(effects.sepia.HTML_CLASS, effects.sepia.NAME, effects.sepia.UNIT);
    sliderOptionsHandler(effects.sepia.MIN, effects.sepia.MAX, effects.sepia.START, effects.sepia.STEP);
  } else if (marvinEffectButton.checked) {
    changeEffect(effects.marvin.HTML_CLASS, effects.marvin.NAME, effects.marvin.UNIT);
    sliderOptionsHandler(effects.marvin.MIN, effects.marvin.MAX, effects.marvin.START, effects.marvin.STEP);
  } else if (phobosEffectButton.checked) {
    changeEffect(effects.phobos.HTML_CLASS, effects.phobos.NAME, effects.phobos.UNIT);
    sliderOptionsHandler(effects.phobos.MIN, effects.phobos.MAX, effects.phobos.START, effects.phobos.STEP);
  } else if (heatEffectButton.checked) {
    changeEffect(effects.heat.HTML_CLASS, effects.heat.NAME, effects.heat.UNIT);
    sliderOptionsHandler(effects.heat.MIN, effects.heat.MAX, effects.heat.START, effects.heat.STEP);
  }
};

noEffectButton.addEventListener('click', onEffects);
chromeEffectButton.addEventListener('click', onEffects);
sepiaEffectButton.addEventListener('click', onEffects);
marvinEffectButton.addEventListener('click', onEffects);
phobosEffectButton.addEventListener('click', onEffects);
heatEffectButton.addEventListener('click', onEffects);
