export function validatePassword(password) {
  const PASSWORD_BODY = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])/;
  const PASSWORD_LENGTH = /(?:([\w$*&@#])(?!\1)){8,64}/;
  const regex = new RegExp(PASSWORD_BODY.source + PASSWORD_LENGTH.source);
  return !regex.test(password);
}

export function validateEmail(email) {
  const regex = /^([\w-.]+)@((\[[\d]{1,3}\.)|(([\w]+\.)+))([a-zA-Z]{2,4}|[\d]{1,3})$/;
  return !regex.test(email);
}
