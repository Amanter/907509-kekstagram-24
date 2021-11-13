const ALERT_SHOW_TIME = 5000;

const getRandomInt = function (min, max) {
  if (min < 0 || min >= max) {
    return 'Введено число меньше 0 либо задан неправильный интервал';
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomInt(0, 100);

const getStringLenth = (string, maxLength) => string.length <= maxLength;
getStringLenth('find string length', 5);

const getArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];


const getComment = (array) => {
  if (getRandomInt(1,2)===2) {
    return `${getArrayElement(array)} ${getArrayElement(array)}`;
  }
  return getArrayElement(array);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {getRandomInt, getArrayElement, getComment, isEscapeKey, showAlert};
