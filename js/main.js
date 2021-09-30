const getRandomInt = function (min, max) {
  if (min < 0 || min >= max) {
    return 'Введено число меньше 0 либо задан неправильный интервал';
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomInt(0, 100);

const getStringLenth = function (string, maxLength) {
  const stringLenth = string.split('');
  return stringLenth.length > maxLength;
};

getStringLenth('find string length', 5);
