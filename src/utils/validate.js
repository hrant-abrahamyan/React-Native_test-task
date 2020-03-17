const isFieldValid = ({valid, pristine, aggressive}) =>
  valid || (pristine && !aggressive);

// eslint-disable-next-line max-len, no-useless-escape
const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validatePassword = password => {
  if (password && password.trim().length >= 8) {
    return false;
  }

  return 'Введите корректный пароль';
};

const validateEmail = email => {
  if (email && emailRegexp.test(String(email.trim()).toLowerCase())) {
    return false;
  }

  return 'Введите корректный email';
};

const validateName = name => {
  if (name && name.trim().length > 1) {
    return false;
  }
  return 'Обязательное поле';
};

const validateEqual = (password, otherValues) => {
  if (
    otherValues.password === otherValues.confirmPassword &&
    otherValues.confirmPassword
  ) {
    return false;
  }
  return 'password';
};

const validateNumber = number => {
  const num = Number(number);
  if (typeof num === 'number' && num > 0) {
    return false;
  }
  return 'must be a number';
};

export default {
  isFieldValid,
  emailRegexp,
  validatePassword,
  validateEmail,
  validateName,
  validateEqual,
  validateNumber,
};
