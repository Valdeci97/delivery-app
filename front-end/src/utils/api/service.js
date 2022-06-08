import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001',
});

export async function login(email, password) {
  const user = await API.post(
    '/login',
    {
      email,
      password,
    },
  )
    .then((result) => result.data)
    .catch((error) => console.log(error));

  return user;
}

export async function register(name, email, password) {
  const user = await API.post(
    '/register',
    {
      name,
      email,
      password,
    },
  )
    .then((result) => result.data)
    .catch((error) => console.log(error));

  return user;
}

export async function getProducts() {
  const fetchProducts = await API.get(
    '/customer/products',
  ).then((result) => result.data).catch((error) => console.log(error));

  return fetchProducts;
}

export async function adminRegister(user, token) {
  const headers = {
    'Content-Type': 'application/json',
    authorization: token,
  };
  const isCreated = await API.post(
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

// export async function getAllUsers(token) {
//   const allUsers = await API.get(
//     '/admin/manage',
//     {}, {
//       headers: {
//         Authorization: { token },
//       },
//     },
//   )
//     .then((result) => result)
//     .catch((error) => console.log(error));
//   console.log(allUsers);
//   return allUsers;
// }

// export async function deleteById(id) {
//   const isDeleted = await API.delete(
//     `/admin/manage/:${id}`,
//     {}, {
//       headers: {
//         Authorization: { token },
//       },
//     },
//   )
//     .then((result) => result)
//     .catch((error) => console.log(error));
//   console.log(isDeleted);
//   return !!isDeleted;
// }

export async function customerOrders(token) {
  console.log(token);
  const headers = {
    'Content-Type': 'application/json',
    authorization: token,
  };
  const customerOrder = await axios.get(
    'http://localhost:3001/customer/orders',
    {},
    {
      headers,
    },
  ).then((result) => console.log(result)).catch((err) => console.error(err));

  console.log(customerOrder, 'resposta');

  return customerOrder;
}

export async function customerOrdersById(id, token) {
  const customerOrderById = await API.get(
    `/customer/orders/${id}`,
    {},
    { headers: { authorization: token } },
  ).then((result) => result).catch((err) => console.error(err));

  return customerOrderById;
}
