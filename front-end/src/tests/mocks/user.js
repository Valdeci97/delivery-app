const NAME = 'valid_user_name';
const EMAIL = 'user@user.com';
const TOKEN = 'valid_token';

const user = {
  name: NAME,
  email: EMAIL,
  role: 'customer',
};

const customer = {
  user,
  token: TOKEN,
};

const seller = {
  user: {
    name: NAME,
    email: EMAIL,
    role: 'seller',
  },
  token: TOKEN,
};

const administrator = {
  user: {
    name: NAME,
    email: EMAIL,
    role: 'administrator',
  },
  token: TOKEN,
};

const adminManage = [
  {
    email: 'fulana@deliveryapp.com',
    id: 2,
    name: 'Fulana Pereira',
    role: 'seller',
  },
  {
    email: 'zebirita@email.com',
    id: 3,
    name: 'Cliente Zé Birita',
    role: 'customer',
  },
];

const sellers = [
  {
    id: 2,
    name: 'Fulana Pereira',
  },
];

const customerLocalStorage = {
  ...user,
  token: TOKEN,
};

const sellerLocalStorage = {
  user: {
    name: NAME,
    email: EMAIL,
    role: 'seller',
  },
  token: TOKEN,
};

export default {
  customer,
  seller,
  administrator,
  adminManage,
  sellers,
  customerLocalStorage,
  sellerLocalStorage,
};
