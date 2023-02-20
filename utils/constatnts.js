const NOT_FOUND_ERROR_CODE = 404;
const VALIDATION_ERROR_CODE = 400;
const DEFAULT_ERROR = 500;
const AUTH_ERROR_CODE = 401;
const FORBIDDEN_ERROR_CODE = 403;
const ALREADY_EXIST_CODE = 409;

const DEFAULT_ERROR_MESSAGE = "На сервере произошла ошибка";
const WRONG_MOVIE_ID = "Передан некорректный Id фильма";
const MOVIE_DOES_NOT_EXIST = "Фильмы не найдены";
const VALIDATION_ERROR_MESSAGE = "Произошла ошибка валидации";
const USER_DOES_NOT_EXIST = "Пользователя не существует";
const WRONG_USER_ID = "Передан некорректный Id пользователя";
const WRONG_AUTH_DATA_MESSAGE = "Введен не верный e-mail или password";
const AUTH_REQUIRED_MESSAGE = "Необходима авторизация";
const FORBIDDEN_ERROR_MESSAGE = "Нет прав доступа";
const ALREADY_EXIST_MESSAGE = "Пользователь с такими данными уже зарегистрирован";
const PAGE_NOT_FOUND = "Страница не найдена";

module.exports = {
  NOT_FOUND_ERROR_CODE,
  VALIDATION_ERROR_CODE,
  DEFAULT_ERROR,
  DEFAULT_ERROR_MESSAGE,
  WRONG_MOVIE_ID,
  MOVIE_DOES_NOT_EXIST,
  VALIDATION_ERROR_MESSAGE,
  USER_DOES_NOT_EXIST,
  WRONG_USER_ID,
  AUTH_ERROR_CODE,
  WRONG_AUTH_DATA_MESSAGE,
  AUTH_REQUIRED_MESSAGE,
  FORBIDDEN_ERROR_CODE,
  FORBIDDEN_ERROR_MESSAGE,
  ALREADY_EXIST_CODE,
  ALREADY_EXIST_MESSAGE,
  PAGE_NOT_FOUND,
};
