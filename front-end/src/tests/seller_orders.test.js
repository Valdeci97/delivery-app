jest.mock('../utils/api/service');

import '@testing-library/jest-dom';
import { screen, act } from '@testing-library/react';

import SellerOrders from '../pages/SellerOrders';
import renderWithRouter from './renderWithRouter';
import * as service from '../utils/api/service';
import userMock from './mocks/user';
import orders from './mocks/orders';

const { sellerLocalStorage } = userMock;

describe('Seller Orders page', () => {
  afterEach(() => jest.resetAllMocks());

  describe('nav bar', () => {
    let userHistory;
    let userAction;

    beforeEach(async () => {
      localStorage.setItem('user', JSON.stringify(sellerLocalStorage));
      service.getSellerOrders.mockImplementation(() => Promise.resolve(orders.sellerOrders));
      await act(async () => {
        const { history, user } = renderWithRouter(<SellerOrders />);
        userHistory = history;
        userAction = user;        
      });
    });
    
    afterEach(() => {
      localStorage.removeItem('user');
    });
    
    it('should have the expected elements', () => {
      const ordersLink = screen.getByRole('link', { name: /pedidos/i });
      const nameHeading = screen.getByText(sellerLocalStorage.name);
      const logoutButton = screen.getByRole('button', { name: /sair/i });
      
      expect(ordersLink).toBeInTheDocument();
      expect(nameHeading).toBeInTheDocument();
      expect(logoutButton).toBeInTheDocument();
    });

    describe('link to orders', () => {
      it('should redirect to /seller/orders', async () => {
        userHistory.push = jest.fn();
        const ordersLink = screen.getByRole('link', { name: /pedidos/i });
        await userAction.click(ordersLink);

        expect(userHistory.push).toBeCalledWith({
            hash: '',
            pathname: '/seller/orders',
            search: '',
        }, undefined);
      });
    });

    describe('logout button', () => {
      it('should clear localStorage', async () => {
        const logoutButton = screen.getByRole('button', { name: /sair/i });
        await userAction.click(logoutButton);

        expect(localStorage.getItem('user')).toBe(null);
        expect(localStorage.getItem('carrinho')).toBe(null);
      });

      it('should redirect to /login', async () => {
        const logoutButton = screen.getByRole('button', { name: /sair/i });
        await userAction.click(logoutButton);

        expect(userHistory.location.pathname).toBe('/login');
      });
    });
  });

  describe('orders', () => {
    describe('if there is any,', () => {
      let userHistory;
      let userAction;
      
      beforeEach(async () => {
        service.getSellerOrders.mockImplementation(() => Promise.resolve(orders.sellerOrders));
        localStorage.setItem('user', JSON.stringify(sellerLocalStorage));
        await act(async () => {
          const { history, user } = renderWithRouter(<SellerOrders />);
          userHistory = history;
          userAction = user;
        });
      });
      
      afterEach(() => {
        localStorage.removeItem('user');
      });
  
      it('should call service.getSellerOrders', () => {
        expect(service.getSellerOrders).toHaveBeenCalledTimes(1);
      });
  
      it('should call service.getSellerOrders with user token', () => {
        expect(service.getSellerOrders)
        .toHaveBeenCalledWith(sellerLocalStorage.token);
      });
  
      it('should have the expected elements', () => {
        const ordersId = screen.getAllByRole('link', { name: /pedido/gi });
        const ordersStatus = screen.getAllByText(/pendente/gi);
        const ordersDate = screen.getAllByText(/.\//gi);
        const ordersPrice = screen.getAllByText(/r\$/gi);
        const ordersAddress = screen.getAllByTestId(/seller_orders__element-card-address/i);
  
        const ordersElements = [
          ...ordersId,
          ...ordersStatus,
          ...ordersDate,
          ...ordersPrice,
          ...ordersAddress,
        ];
  
        ordersElements.forEach((element) => {
          expect(element).toBeInTheDocument();
        });
        
        expect(ordersId).toHaveLength(2);
        expect(ordersStatus).toHaveLength(2);
        expect(ordersDate).toHaveLength(2);
        expect(ordersPrice).toHaveLength(2);
        expect(ordersAddress).toHaveLength(2);
      });
    });

    describe('if there is none,', () => {
      let history;
      
      beforeEach(async () => {
        service.getSellerOrders.mockImplementation(() => Promise.resolve([]));
        localStorage.setItem('user', JSON.stringify(sellerLocalStorage));
        await act(async () => {
          history = renderWithRouter(<SellerOrders />).history;
        });
      });
      
      afterEach(() => {
        localStorage.removeItem('user');
      });
  
      it('should call service.getSellerOrders', () => {
        expect(service.getSellerOrders).toHaveBeenCalledTimes(1);
      });
  
      it('should call service.getSellerOrders with user token', () => {
        expect(service.getSellerOrders)
        .toHaveBeenCalledWith(sellerLocalStorage.token);
      });
  
      it('should not have orders elements', () => {
        const ordersId = screen.queryAllByTestId(/seller_orders__element-order-id/i);
        const ordersStatus = screen.queryAllByTestId(/seller_orders__element-delivery-status/i);
        const ordersDate = screen.queryAllByTestId(/seller_orders__element-order-date/i);
        const ordersPrice = screen.queryAllByTestId(/seller_orders__element-card-price/i);
        const ordersAddress = screen.queryAllByTestId(/seller_orders__element-card-address/i);
        
        expect(ordersId).toHaveLength(0);
        expect(ordersStatus).toHaveLength(0);
        expect(ordersDate).toHaveLength(0);
        expect(ordersPrice).toHaveLength(0);
        expect(ordersAddress).toHaveLength(0);
      });
    });
  });
});
