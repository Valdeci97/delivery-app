import React from 'react';
import PropTypes from 'prop-types';
import priceToReal from '../utils/helpers/priceToReal';
import { TableData } from '../styles/OrderDetailsTable';

export default function DetailsTableRow({ product, index }) {
  const { name, price, SaleProduct: { quantity } } = product;
  const unitPrice = parseFloat(price);
  const totalPrice = unitPrice * quantity;

  return (
    <tr>
      <TableData
        data-testid={ `customer_order_details__element-order-table-item-number-${index}` }
      >
        { index + 1 }
      </TableData>
      <TableData
        data-testid={ `customer_order_details__element-order-table-name-${index}` }
      >
        { name }
      </TableData>
      <TableData
        data-testid={ `customer_order_details__element-order-table-quantity-${index}` }
      >
        { quantity }
      </TableData>
      <TableData
        data-testid={ `customer_order_details__element-order-table-unit-price-${index}` }
      >
        { priceToReal(unitPrice, true) }
      </TableData>
      <TableData
        data-testid={ `customer_order_details__element-order-table-sub-total-${index}` }
      >
        { priceToReal(totalPrice, true) }
      </TableData>
    </tr>
  );
}

DetailsTableRow.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    SaleProduct: PropTypes.shape({
      quantity: PropTypes.number,
    }).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
