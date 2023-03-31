function validateFieldByRegExp(field, regex, message) {
  if (!regex.test(field)) return { message };
  return false;
}

function passwordField(password) {
  const PASSWORD_BODY = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])/;
  const PASSWORD_LENGTH = /(?:([\w$*&@#])(?!\1)){8,64}/;
  const regex = new RegExp(PASSWORD_BODY.source + PASSWORD_LENGTH.source);
  const message = 'Campo senha inválido';
  return validateFieldByRegExp(password, regex, message);
}

function emailField(email) {
  const regex = /^([\w-.]+)@((\[[\d]{1,3}\.)|(([\w]+\.)+))([a-zA-Z]{2,4}|[\d]{1,3})$/;
  const message = 'Campo e-mail inválido';
  return validateFieldByRegExp(email, regex, message);
}

function nameField(name) {
  const MIN_NAME_LENGTH = 3;
  if (name.length < MIN_NAME_LENGTH) {
    return { message: 'O nome precisa ter pelo menos 3 caracteres' };
  }
  return false;
}

export default {
  passwordField,
  emailField,
  nameField,
};
