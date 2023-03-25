export function checkInvalidFields(field, validator = () => false, fieldName = '') {
  if (field === '') return { message: 'Preencha todos os campos' };
  const isValid = validator(field);
  return isValid ? { message: `Campo ${fieldName} inválido` } : false;
}
