import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import priceToReal from '../utils/helpers/priceToReal';
import * as S from '../styles/orders';
import AppContext from '../context/AppContext';

export default function OrderCard({ order }) {
  const { theme } = useContext(AppContext);
  const DATE_PATTERN = 'dd/MM/yyyy';
  const formatedDate = format(new Date(order.saleDate), DATE_PATTERN);
  const price = priceToReal(order.totalPrice, true);

  return (
    <S.Link href={ `/customer/orders/${order.id}` } isDarkMode={ theme === 'dark' }>
      <S.OrderTextSpan>
        Pedido&nbsp;
        { order.id }
      </S.OrderTextSpan>
      <S.OrderTextSpan>
        { order.status }
      </S.OrderTextSpan>
      <S.OrderInfo>
        <S.OrderTextSpan>
          { formatedDate }
          &nbsp;&nbsp;
        </S.OrderTextSpan>
        <S.OrderTextSpan>
          { price }
        </S.OrderTextSpan>
      </S.OrderInfo>
    </S.Link>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
  }).isRequired,
};
