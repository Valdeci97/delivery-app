import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerContext from '../context/CustomerContext';
import { createSale, getSellers } from '../utils/api/service';
import { localStorageUser } from '../utils/localStorage/localStorage';
import totalPrice from '../utils/helpers/totalPrice';
import * as S from '../styles/addressForm';
import AppContext from '../context/AppContext';
import { addressFormInitialValue } from '../utils/constants/addressFormInitialValue';
import { handleChange } from '../utils/helpers/handleChange';
import { toastResponse } from '../utils/toast';

export default function AddressForm() {
  const [state, setState] = useState(addressFormInitialValue);
  const [sellersList, setSellersList] = useState([]);
  const { cart, setCart } = useContext(CustomerContext);
  const { theme } = useContext(AppContext);
  const navigate = useNavigate();

  const isDarkMode = theme === 'dark';

  useEffect(() => {
    async function fetchData() {
      const apiResponse = await getSellers();
      if (Array.isArray(apiResponse)) {
        setSellersList(apiResponse);

        if (!state.seller && apiResponse.length > 0) {
          setState({ ...state, seller: apiResponse[0].id });
        }
      }
    }
    fetchData();
  }, [state]);

  function validateFields() {
    const { address, number, seller } = state;
    if (address.length === 0 || number.length === 0 || seller.length === 0) {
      return true;
    }
    return false;
  }

  const handleClick = async () => {
    const isEmpty = validateFields();
    const toastTheme = theme === 'dark' ? 'light' : 'dark';
    if (isEmpty) {
      const { response } = toastResponse('Preencha todos os campos', toastTheme);
      return response();
    }
    const sale = {
      deliveryAddress: state.address,
      deliveryNumber: state.number,
      sellerId: state.seller,
      products: cart.map(({ id, qty: quantity }) => ({ id, quantity })),
      totalPrice: totalPrice(cart),
    };
    const { token } = localStorageUser();
    const saleId = await createSale(sale, token);
    setCart([]);

    navigate(`/customer/orders/${saleId}`);
  };

  return (
    <>
      <S.Container>
        <S.Label htmlFor="seller" isDarkMode={ isDarkMode }>
          Pessoa vendedora
          <S.Select
            data-testid="customer_checkout__select-seller"
            id="seller"
            onChange={ ({ target }) => handleChange(target, state, setState) }
            isDarkMode={ isDarkMode }
          >
            {sellersList.map(({ name, id }) => (
              <option value={ id } key={ name }>{name}</option>
            ))}
          </S.Select>
        </S.Label>
        <S.Label htmlFor="address" isDarkMode={ isDarkMode }>
          Endereço
          <S.Input
            data-testid="customer_checkout__input-address"
            id="address"
            onChange={ ({ target }) => handleChange(target, state, setState) }
            placeholder="seu endereço"
            type="text"
            value={ state.address }
            isDarkMode={ isDarkMode }
          />
        </S.Label>
        <S.Label htmlFor="number" isDarkMode={ isDarkMode }>
          Número
          <S.Input
            data-testid="customer_checkout__input-addressNumber"
            id="number"
            onChange={ ({ target }) => handleChange(target, state, setState) }
            placeholder="n°"
            type="text"
            isDarkMode={ isDarkMode }
            value={ state.number }
          />
        </S.Label>
      </S.Container>
      <S.FinishOrderContainer>
        <S.FinishOrderButton
          data-testid="customer_checkout__button-submit-order"
          onClick={ handleClick }
          type="button"
          isDarkMode={ isDarkMode }
        >
          Finalizar Pedido
        </S.FinishOrderButton>
      </S.FinishOrderContainer>
    </>
  );
}
