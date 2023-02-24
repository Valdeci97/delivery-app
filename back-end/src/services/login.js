const { User } = require('../database/models');
const { decrypt } = require('../utils/crypt');

const { generateToken } = require('../utils/jwt');

const login = async (email, password) => {
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return undefined;
    const isSamePassword = await decrypt(password, user.password);
    if (!isSamePassword) {
      return { message: 'Incorrect e-mail or password' };
    }
    const { name, role } = user;
    const token = generateToken({ name, email, role });
    return { user: { name, email, role }, token };
  } catch (err) {
    return err;
  }
};

module.exports = { login };
