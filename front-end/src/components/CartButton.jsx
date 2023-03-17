import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerContext from '../context/CustomerContext';
import priceToReal from '../utils/helpers/priceToReal';
import totalPrice from '../utils/helpers/totalPrice';
import Button from '../styles/cartButton';
import AppContext from '../context/AppContext';

export default function CartButton() {
  const { theme } = useContext(AppContext);
  const { cart } = useContext(CustomerContext);
  const [total, setTotal] = useState('0');

  const isDarkMode = theme === 'dark';

  const navigate = useNavigate();

  useEffect(() => {
    const getTotalPrice = () => {
      const price = totalPrice(cart);
      setTotal(priceToReal(price));
    };

    getTotalPrice();
  }, [cart]);

  return (
    <Button
      data-testid="customer_products__button-cart"
      onClick={ () => navigate('/customer/checkout') }
      type="button"
      isDarkMode={ isDarkMode }
    >
      Ver Carrinho: R$&nbsp;
      <span
        data-testid="customer_products__checkout-bottom-value"
      >
        { total }
      </span>
    </Button>
  );
}
