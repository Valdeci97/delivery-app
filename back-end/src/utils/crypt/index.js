const { hash, compare } = require('bcryptjs');

async function encrypt(word, hashSalts = 10) {
  const hashed = await hash(word, hashSalts);
  return hashed;
}

async function decrypt(word, hashToCompare) {
  const isSame = await compare(word, hashToCompare);
  return isSame;
}

module.exports = { encrypt, decrypt };
