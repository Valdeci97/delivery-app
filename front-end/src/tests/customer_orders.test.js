jest.mock('../utils/api/service');

import '@testing-library/jest-dom';
import { screen, act } from '@testing-library/react';

import CustomerOrders from '../pages/CustomerOrders';
import renderWithRouter from './renderWithRouter';
import * as service from '../utils/api/service';
import userMock from './mocks/user';
import orders from './mocks/orders';

const { customerLocalStorage } = userMock;

describe('Customer orders page', () => {
  afterEach(() => jest.resetAllMocks());

  describe('nav bar', () => {
    it('should have the expected elements', () => {
      localStorage.setItem('user', JSON.stringify(customerLocalStorage));
      renderWithRouter(<CustomerOrders />);
      const productsLink = screen.getByRole('link', { name: /produtos/i });
      const ordersLink = screen.getByRole('link', { name: /pedidos/i });
      const nameHeading = screen.getByRole('heading', { name: userMock.customer.user.name });
      const logoutButton = screen.getByRole('button', { name: /sair/i });
      
      expect(productsLink).toBeInTheDocument();
      expect(ordersLink).toBeInTheDocument();
      expect(nameHeading).toBeInTheDocument();
      expect(logoutButton).toBeInTheDocument();
      localStorage.removeItem('user');
    });

    describe('link to products', () => {
      it('should redirect to /customer/products', async () => {
        localStorage.setItem('user', JSON.stringify(customerLocalStorage));
        const { history, user } = renderWithRouter(<CustomerOrders />);
        history.push = jest.fn();
        const productsLink = screen.getByRole('link', { name: /produtos/i});
        await user.click(productsLink);

        expect(history.push).toBeCalledWith({
            hash: '',
            pathname: '/customer/products',
            search: '',
        }, undefined);
        localStorage.removeItem('user');
      });
    });

    describe('link to orders', () => {
      it('should redirect to /customer/orders', async () => {
        localStorage.setItem('user', JSON.stringify(customerLocalStorage));
        const { history, user } = renderWithRouter(<CustomerOrders />);
        history.push = jest.fn();
        const ordersLink = screen.getByRole('link', { name: /pedidos/i});
        await user.click(ordersLink);

        expect(history.push).toBeCalledWith({
            hash: '',
            pathname: '/customer/orders',
            search: '',
        }, undefined);
        localStorage.removeItem('user');
      });
    });

    describe('logout button', () => {
      it('should clear localStorage', async () => {
        localStorage.setItem('user', JSON.stringify(customerLocalStorage));
        const { user } = renderWithRouter(<CustomerOrders />);
        const logoutButton = screen.getByRole('button', { name: /sair/i});
        await user.click(logoutButton);

        expect(localStorage.getItem('user')).toBe(null);
        expect(localStorage.getItem('carrinho')).toBe(null);
      });

      it('should redirect to /login', async () => {
        localStorage.setItem('user', JSON.stringify(customerLocalStorage));
        const { history, user } = renderWithRouter(<CustomerOrders />);
        const logoutButton = screen.getByRole('button', { name: /sair/i});
        await user.click(logoutButton);
        expect(history.location.pathname).toBe('/login');
      });
    });
  });

  describe('orders', () => {
    describe('if there is any,', () => {
      beforeEach(async () => {
        service.customerOrders.mockImplementation(() => Promise.resolve(orders.customerOrders));
        localStorage.setItem('user', JSON.stringify(customerLocalStorage));
      });
      
      afterEach(() => {
        localStorage.removeItem('user');
      });
  
      it('should call service.customerOrders', async () => {
        await act(async () => {
          renderWithRouter(<CustomerOrders />);
        });
        expect(service.customerOrders).toHaveBeenCalledTimes(1);
      });
  
      it('should call service.customerOrders with user token', async () => {
        await act(async () => {
          renderWithRouter(<CustomerOrders />);
        });
        expect(service.customerOrders)
        .toHaveBeenCalledWith(customerLocalStorage.token);
      });
  
      it('should have the expected elements', async () => {
        await act(async () => {
          renderWithRouter(<CustomerOrders />);
        });
        const ordersId = screen.getAllByRole('link', { name: /pedido/gi });
        const ordersStatus = screen.getAllByText(/pendente/gi);
        const ordersDate = screen.getAllByText(/.\//gi);
        const ordersPrice = screen.getAllByText(/r\$/gi);
  
        const ordersElements = [
          ...ordersId,
          ...ordersStatus,
          ...ordersDate,
          ...ordersPrice,
        ];
  
        ordersElements.forEach((element) => {
          expect(element).toBeInTheDocument();
        });
        
        expect(ordersId).toHaveLength(2);
        expect(ordersStatus).toHaveLength(2);
        expect(ordersDate).toHaveLength(2);
        expect(ordersPrice).toHaveLength(2);
      });
    });

    describe('if there is none,', () => {
      let history;
      
      beforeEach(async () => {
        service.customerOrders.mockImplementation(() => Promise.resolve());
        localStorage.setItem('user', JSON.stringify(customerLocalStorage));
        await act(async () => {
          history = renderWithRouter(<CustomerOrders />).history;
        });
      });
      
      afterEach(() => {
        localStorage.removeItem('user');
      });
  
      it('should call service.customerOrders', () => {
        expect(service.customerOrders).toHaveBeenCalledTimes(1);
      });
  
      it('should call service.customerOrders with user token', () => {
        expect(service.customerOrders)
        .toHaveBeenCalledWith(customerLocalStorage.token);
      });
  
      it('should not have orders elements', () => {
        const ordersId = screen.queryAllByTestId(/customer_orders__element-order-id/i);
        const ordersStatus = screen.queryAllByTestId(/customer_orders__element-delivery-status/i);
        const ordersDate = screen.queryAllByTestId(/customer_orders__element-order-date/i);
        const ordersPrice = screen.queryAllByTestId(/customer_orders__element-card-price/i);
        
        expect(ordersId).toHaveLength(0);
        expect(ordersStatus).toHaveLength(0);
        expect(ordersDate).toHaveLength(0);
        expect(ordersPrice).toHaveLength(0);
      });
    });
  });
});
