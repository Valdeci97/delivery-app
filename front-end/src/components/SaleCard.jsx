import React from 'react';
import PropTypes from 'prop-types';

export default function OrderCard({ order }) {
  return (
    <div>
      <p>
        Pedido
        <span
          data-testid={ `customer_orders__element-order-id-${order.id}` }
        >
          { order.id }
        </span>
      </p>
      <p
        data-testid={ `customer_orders__element-delivery-status-${order.id}` }
      >
        { order.status }
      </p>
      <div>
        <p
          data-testid={ `customer_orders__element-order-date-${order.id}` }
        >
          { order.date }
        </p>
        <p>
          {/* { valorDaCompra } */}
          valorDaCompra
        </p>
      </div>
    </div>
  );
}
OrderCard.propTypes = {
  id: PropTypes.number.isRequired(),
  status: PropTypes.string.isRe
};