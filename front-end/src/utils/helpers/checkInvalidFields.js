export function checkInvalidFields(field, fieldName = '', validator = () => false) {
  if (field === '') return { message: `Preencha o campo ${fieldName}` };
  const isValid = validator(field);
  return isValid.message ? { message: isValid.message } : false;
}
