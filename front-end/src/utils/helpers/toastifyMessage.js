import React from 'react';

export default function ToastMessage() {
  return (
    <div style={ { fontSize: '2rem', width: '100%' } }>
      <span>A senha deve ter pelo menos</span>
      <br />
      <span>- 1 letra minúscula e 1 maiúscula;</span>
      <br />
      <span>- 8 caracteres e 1 caractere especial ( $ * & @ # ).</span>
    </div>
  );
}
