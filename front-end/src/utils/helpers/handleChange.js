export function handleChange(target, prevState, stateHandler) {
  const { id, value } = target;
  stateHandler({ ...prevState, [id]: value });
}
