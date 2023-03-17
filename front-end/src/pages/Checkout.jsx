import React, { useContext } from 'react';
import CustomerContext from '../context/CustomerContext';
import AddressForm from '../components/AddressForm';
import priceToReal from '../utils/helpers/priceToReal';
import totalPrice from '../utils/helpers/totalPrice';
import CheckoutTable from '../components/CheckoutTable';
import CustomerNavBar from '../components/CustomerNavBar';
import * as S from '../styles/checkout';
import AppContext from '../context/AppContext';

export default function Checkout() {
  const { cart } = useContext(CustomerContext);
  const { theme } = useContext(AppContext);

  const isDarkMode = theme === 'dark';

  const getTotalPrice = () => {
    const price = totalPrice(cart);
    return priceToReal(price);
  };

  return (
    <>
      <CustomerNavBar />
      <S.Container>
        <S.OrderTitle isDarkMode={ isDarkMode }>Finalizar Pedido</S.OrderTitle>
        <S.TableContainer>
          <CheckoutTable />
          <S.OrderTotal isDarkMode={ isDarkMode }>
            Total: R$&nbsp;
            <span
              data-testid="customer_checkout__element-order-total-price"
            >
              { getTotalPrice() }
            </span>
          </S.OrderTotal>
        </S.TableContainer>
      </S.Container>
      <AddressForm />
    </>
  );
}
