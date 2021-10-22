import {getRandomInt, getArrayElement, getComment} from './utils.js';

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

const getCommentObject = (num) => ({
  id: num+1,
  avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
  message: getComment(COMMENT),
  name: getArrayElement(NAMES),
});

const getNewArray = () => Array.from({length: getRandomInt(1, 20)}, (value, num) => getCommentObject(num++));

const getPhotoDescription = (num) => ({
  id: num+1,
  url: `photos/${num+1}.jpg`,
  description: getArrayElement(DESCRIPTIONS),
  likes: getRandomInt(15, 200),
  comments: getNewArray(),
});

const photoDescription = Array.from({length: ARRAY_NUMBER}, (value, num) => getPhotoDescription(num++));
photoDescription;

export {ARRAY_NUMBER, photoDescription, getNewArray};
