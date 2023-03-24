import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { localStorageUser } from '../utils/localStorage/localStorage';
import {
  getSellerOrderById,
  markAsDispatched,
  markAsPreparing,
} from '../utils/api/service';
import priceToReal from '../utils/helpers/priceToReal';
import totalPrice from '../utils/helpers/totalPrice';
import SellerNavBar from '../components/SellerNavBar';
import SellerDetailsTable from '../components/SellerDetailsTable';
import * as S from '../styles/sellerOrderDetails';
import AppContext from '../context/AppContext';

export default function SellerOrderDetail() {
  const [order, setOrder] = useState({});
  const [showTable, setShowTable] = useState(false);
  const { token } = localStorageUser();
  const { id } = useParams();
  const { theme } = useContext(AppContext);
  const isDarkMode = theme === 'dark';
  const DATE_PATTERN = 'dd/MM/yyyy';
  const NOT_STARTED_ORDER = 'PEDIDO NÃO INICIADO';
  const ALREADY_DELIVERED_ORDER = 'PEDIDO JÁ ENVIADO';

  const getOrderInfo = async () => {
    const apiResponse = await getSellerOrderById(token, id);
    if (!apiResponse) {
      return setShowTable(false);
    }
    setOrder(apiResponse);
    return setShowTable(true);
  };

  useEffect(() => {
    getOrderInfo();
  }, []);

  const formatProducts = () => order.products
    .map(({ id: productId, name, price, SaleProduct: { quantity } }) => (
      { id: productId, name, price, qty: quantity }
    ));

  const getTotalPrice = () => {
    const formattedProducts = formatProducts();
    const price = totalPrice(formattedProducts);
    return priceToReal(price);
  };

  const preparing = async () => {
    await markAsPreparing(token, order.id);
    getOrderInfo();
  };

  const dispatch = async () => {
    await markAsDispatched(token, order.id);
    getOrderInfo();
  };

  return (
    <>
      <SellerNavBar />
      <S.Details isDarkMode={ isDarkMode }>Detalhes do Pedido</S.Details>
      <section>
        {
          showTable
          && (
            <S.OrderContainer isDarkMode={ isDarkMode }>
              <S.LeftSide isDarkMode={ isDarkMode }>
                <S.SellerOrderSpan>
                  { `Id: ${order.id}` }
                </S.SellerOrderSpan>
                <S.SellerOrderSpan>
                  { format(new Date(order.saleDate), DATE_PATTERN) }
                </S.SellerOrderSpan>
                <S.SellerOrderSpan>
                  { order.status }
                </S.SellerOrderSpan>
                <S.StartOrderButton
                  isDarkMode={ isDarkMode }
                  disabled={ order.status !== 'Pendente' }
                  onClick={ preparing }
                  type="button"
                >
                  PREPARAR PEDIDO
                </S.StartOrderButton>
                <S.DeliveryOrderButton
                  isDarkMode={ isDarkMode }
                  disabled={ order.status !== 'Preparando' }
                  onClick={ dispatch }
                  type="button"
                  content={ order.status === 'Pendente'
                    ? NOT_STARTED_ORDER : ALREADY_DELIVERED_ORDER }
                >
                  ENVIAR PEDIDO
                </S.DeliveryOrderButton>
              </S.LeftSide>
              <SellerDetailsTable cart={ order.products } />
              <S.Price isDarkMode={ isDarkMode }>
                Total: R$&nbsp;
                { getTotalPrice() }
              </S.Price>
            </S.OrderContainer>
          )
        }
      </section>
    </>
  );
}
