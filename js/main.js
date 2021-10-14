const ARRAY_NUMBER = 25;

const DESCRIPTIONS = [
  'Фотография природы',
  'красиво озеро',
  'Универмаг',
  'Детская площадка',
  'Лодочная станция',
  'ресторан',
  'Торговый зал',
];

const NAMES = [
  'Андрей',
  'Алексей',
  'Ирина',
  'Максим',
  'Евгений',
  'Дарья',
  'Мария',
  'Иосиф',
  'Сергей',
  'Александр',
  'Дмитрий',
];

const COMMENT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

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
let number = 1;

const getCommentObject = () => [
  {
    id: number++,
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: getComment(COMMENT),
    name: getArrayElement(NAMES),
  },
];

const getNewArray = () => Array.from({length: getRandomInt(1, 20)}, getCommentObject);

const getPhotoDescription = () => ({
  id: number++,
  url: `photos/${number++}.jpg`,
  description: getArrayElement(DESCRIPTIONS),
  likes: getRandomInt(15, 200),
  comments: getNewArray(),
});

const photoDescription = Array.from({length: ARRAY_NUMBER}, getPhotoDescription);
photoDescription;
