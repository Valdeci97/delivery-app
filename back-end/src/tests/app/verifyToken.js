const response = { message: 'Invalid token' };

const verifyToken = (auth) => {
  if (!auth) return response;
  const [token, info] = auth.split(' ');
  if (token !== 'valido') return response;
  const [role, private] = info.split('/');
  const [email, id] = private.split('-');
  return { role, email, id };
}

module.exports = verifyToken;
