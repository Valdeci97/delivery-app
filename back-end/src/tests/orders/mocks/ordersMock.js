const orders = [
	{
		"id": 1,
		"totalPrice": "89.07",
		"deliveryAddress": "Rua dos testes",
		"deliveryNumber": "1305",
		"saleDate": "2022-06-07T20:26:18.000Z",
		"status": "pendente",
		"userId": 3,
		"sellerId": 2
	},
	{
		"id": 2,
		"totalPrice": "122.50",
		"deliveryAddress": "Rua dos testes",
		"deliveryNumber": "1305",
		"saleDate": "2022-06-07T20:26:39.000Z",
		"status": "pendente",
		"userId": 3,
		"sellerId": 2
	},
	{
		"id": 3,
		"totalPrice": "68.99",
		"deliveryAddress": "Rua dos testes",
		"deliveryNumber": "1305",
		"saleDate": "2022-06-07T20:27:06.000Z",
		"status": "pendente",
		"userId": 3,
		"sellerId": 2
	}
];

const userOrderById = {
	"id": 1,
	"totalPrice": "89.07",
	"deliveryAddress": "Rua dos testes",
	"deliveryNumber": "1305",
	"saleDate": "2022-06-07T20:26:18.000Z",
	"status": "pendente",
	"userId": 3,
	"sellerId": 2,
};

const sellerOrderById = {
	"id": 2,
	"totalPrice": "122.50",
	"deliveryAddress": "Rua dos testes",
	"deliveryNumber": "1305",
	"saleDate": "2022-06-07T20:26:39.000Z",
	"status": "pendente",
	"userId": 3,
	"sellerId": 2
};

const userIdConflictOrder = {
	"id": 1,
	"totalPrice": "89.07",
	"deliveryAddress": "Rua dos testes",
	"deliveryNumber": "1305",
	"saleDate": "2022-06-07T20:26:18.000Z",
	"status": "Preparando",
	"userId": 2,
	"sellerId": 2
}

const userToken = 'valido customer/zebirita@email.com-3';

const sellerToken = 'valido seller/fulana@deliveryapp.com-2';

const startedOrder = {
	"id": 1,
	"totalPrice": "89.07",
	"deliveryAddress": "Rua dos testes",
	"deliveryNumber": "1305",
	"saleDate": "2022-06-07T20:26:18.000Z",
	"status": "Preparando",
	"userId": 3,
	"sellerId": 2
};

const leavingOrder = {
	"id": 1,
	"totalPrice": "89.07",
	"deliveryAddress": "Rua dos testes",
	"deliveryNumber": "1305",
	"saleDate": "2022-06-07T20:26:18.000Z",
	"status": "Em Trânsito",
	"userId": 3,
	"sellerId": 2
}

const deliveredOrder = {
	"id": 1,
	"totalPrice": "89.07",
	"deliveryAddress": "Rua dos testes",
	"deliveryNumber": "1305",
	"saleDate": "2022-06-07T20:26:18.000Z",
	"status": "Entregue",
	"userId": 3,
	"sellerId": 2
}

module.exports = {
  orders,
  userToken,
  userOrderById,
  sellerToken,
  sellerOrderById,
  userIdConflictOrder,
  startedOrder,
  leavingOrder,
  deliveredOrder,
};
