import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const FIVE_SECONDS_IN_MS = 5000;
const CONTENT_TYPE = 'application/json';
const ADMIN_MANAGE_ROUTE = '/admin/manage';
const CUSTOMER_ORDERS_ROUTE = '/customer/orders';
const SELLER_ORDERS_ROUTE = '/seller/orders';

axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = FIVE_SECONDS_IN_MS;

export async function login(email, password) {
  const user = await axios.post('/login', { email, password })
    .then((result) => result.data)
    .catch((error) => console.log(error));

  return user;
}

export async function register(name, email, password, role) {
  const user = await axios.post('/register',
    { name, email, password, role })
    .then((result) => result.data)
    .catch((error) => console.log(error));

  return user;
}

export async function getProducts() {
  const fetchProducts = await axios.get('/customer/products')
    .then((result) => result.data)
    .catch((error) => console.log(error));

  return fetchProducts;
}

export async function adminRegister(user, token) {
  const headers = {
    'Content-Type': CONTENT_TYPE,
    authorization: token,
  };
  const isCreated = await axios.post(
    '/admin/manage',
    user,
    {
      headers,
    },
  )
    .then((result) => result)
    .catch((error) => console.log(error));
  return !isCreated;
}

export async function getAllUsers(token) {
  const headers = {
    'Content-Type': CONTENT_TYPE,
    authorization: token,
  };
  const allUsers = await axios.get(
    ADMIN_MANAGE_ROUTE,
    {
      headers,
    },
  )
    .then((result) => result.data)
    .catch((error) => console.log(error));
  return allUsers;
}

export async function deleteById(id, token) {
  const headers = {
    'Content-Type': CONTENT_TYPE,
    authorization: token,
  };
  await axios.delete(
    `${ADMIN_MANAGE_ROUTE}/${id}`,
    {
      headers,
    },
  )
    .then((result) => result.data)
    .catch((error) => console.log(error));
}

export async function customerOrders(token) {
  const headers = {
    'Content-Type': CONTENT_TYPE,
    authorization: token,
  };
  const customerOrder = await axios.get(
    CUSTOMER_ORDERS_ROUTE,
    {
      headers,
    },
  ).then((result) => result.data).catch((err) => console.log(err));

  return customerOrder;
}

export async function getSellers() {
  const sellers = await axios.get('/seller')
    .then((result) => result.data)
    .catch((error) => console.log(error));
  return sellers;
}

export async function createSale(sale, token) {
  const headers = {
    'Content-Type': CONTENT_TYPE,
    authorization: token,
  };
  const createdSale = await axios.post(
    '/sales',
    sale,
    {
      headers,
    },
  )
    .then((result) => result.data)
    .catch((error) => console.log(error));

  if (!createdSale) return undefined;
  return createdSale.id;
}

export async function getCustomerOrderById(token, id) {
  const headers = {
    'Content-Type': CONTENT_TYPE,
    authorization: token,
  };

  const sale = await axios.get(
    `${CUSTOMER_ORDERS_ROUTE}/${id}`,
    {
      headers,
    },
  )
    .then((result) => (result.data))
    .catch((error) => console.log(error));

  return sale;
}

export async function markAsDelivered(token, id) {
  const headers = {
    'Content-Type': CONTENT_TYPE,
    authorization: token,
  };
  await axios.patch(
    `${SELLER_ORDERS_ROUTE}/delivered/${id}`,
    {},
    {
      headers,
    },
  )
    .catch((error) => console.log(error));
}

export async function markAsDispatched(token, id) {
  const headers = {
    'Content-Type': CONTENT_TYPE,
    authorization: token,
  };
  await axios.patch(
    `${SELLER_ORDERS_ROUTE}/leave/${id}`,
    {},
    {
      headers,
    },
  )
    .catch((error) => console.log(error));
}

export async function markAsPreparing(token, id) {
  const headers = {
    'Content-Type': CONTENT_TYPE,
    authorization: token,
  };
  await axios.patch(
    `${SELLER_ORDERS_ROUTE}/start/${id}`,
    {},
    {
      headers,
    },
  )
    .catch((error) => console.log(error));
}

export async function getSellerOrders(token) {
  const sellerOrders = await axios.get(
    SELLER_ORDERS_ROUTE,
    { headers: { authorization: token } },
  ).then((result) => result.data).catch((err) => console.log(err));

  return sellerOrders;
}

export async function getSellerOrderById(token, id) {
  const headers = {
    'Content-Type': CONTENT_TYPE,
    authorization: token,
  };

  const allSales = await axios.get(
    `${SELLER_ORDERS_ROUTE}/${id}`,
    {
      headers,
    },
  )
    .then((result) => (result.data))
    .catch((error) => console.log(error));

  return allSales;
}
