jest.mock('../utils/api/service');

import '@testing-library/jest-dom';
import { screen, waitFor, act } from '@testing-library/react';

import Login from '../pages/Login';
import renderWithRouter from './renderWithRouter';
import * as service from '../utils/api/service';
import userMock from './mocks/user';

const USER_EMAIL = 'user@user.com';
const USER_PASSWORD = 'user_password';

describe('Test Login page without navigation', () => {
  it('Should have the right screen elements', () => {
    renderWithRouter(<Login />);
  
    const title = screen.getByRole('heading', { name: /delivery app/i, level: 1 });
    const registerButton = screen.getByRole('button', { name: /cadastre\-se/i });
    const themeButton = screen.getByRole('banner');
    const loginTitle = screen.getByRole('heading', { name: /login/i, level: 1 });
    const emailLabel = screen.getByLabelText(/email/i);
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const passwordLabel = screen.getByText(/senha/i);
    const passwordInput = screen.getByLabelText(/senha/i);
    const loginButton = screen.getByRole('button', { name: /entrar/i });

    expect(title).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
    expect(themeButton).toBeInTheDocument();
    expect(loginTitle).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  describe('should auto redirect', () => {
    afterEach(() => localStorage.removeItem('user'));
    afterAll(() => jest.resetAllMocks());

    it('to /customer/products if localStorage has customer info', () => {
      localStorage.setItem('user', JSON.stringify({ role: userMock.customer.user.role }));
      const { history } = renderWithRouter(<Login />);
    
      const { pathname } = history.location;
      expect(pathname).toBe('/customer/products');
    });
  
    it('to /admin/manage if localStorage has administrator info', () => {
      localStorage.setItem('user', JSON.stringify({ role: userMock.administrator.user.role }));
      const { history } = renderWithRouter(<Login />);
    
      const { pathname } = history.location;
      expect(pathname).toBe('/admin/manage');
    });
  
    it('to /seller/orders if localStorage has seller info', () => {
      localStorage.setItem('user', JSON.stringify({ role: userMock.seller.user.role }));
      const { history } = renderWithRouter(<Login />);
    
      const { pathname } = history.location;
      expect(pathname).toBe('/seller/orders');
    });
  });

});

describe('Test login page with navigation', () => {
  afterEach(() => jest.resetAllMocks());

  describe('Trying to register', () => {
    it('Should redirect user to /register by clicking in register button', async () => {
      const { history, user } = renderWithRouter(<Login />);
      const registerButton = screen.getByRole('button', { name: /cadastre\-se/i });
      await user.click(registerButton);
      expect(history.location.pathname).toBe('/register');
    });
  });
  
  describe('Trying to log in', () => {    
    describe('as customer', () => {
      let hist;
      let emailInput;
      let passwordInput;
      let loginButton;

      beforeEach(async () => {
        service.login.mockImplementation(() => Promise.resolve(userMock.customer));
  
        const { history, user } = renderWithRouter(<Login />);
        hist = history;
        hist.push = jest.fn();
  
        emailInput = screen.getByRole('textbox', { name: /email/i });
        passwordInput = screen.getByLabelText(/senha/i);
        loginButton = screen.getByRole('button', { name: /entrar/i });
    
        await user.type(emailInput, USER_EMAIL);
        await user.type(passwordInput, USER_PASSWORD); 
        await user.click(loginButton);
      });
  
      afterEach(() => { localStorage.removeItem('user') });
      afterAll(() => jest.resetAllMocks());
    
      it('should call service.login', () => {
        expect(service.login).toHaveBeenCalledTimes(1);
      });
  
      it('should call service.login with user email and password', () => {
        expect(service.login)
        .toHaveBeenCalledWith(USER_EMAIL, USER_PASSWORD);
  
      });
  
      it('should redirect to /customer/products', async () => {
        await waitFor(() => {
          expect(hist.push).toBeCalledWith({
            hash: '',
            pathname: '/customer/products',
            search: '',
          }, undefined);
        });
      });
    });

    describe('as administrator', () => {
      afterEach(() => { localStorage.removeItem('user') });

      it('should redirect to /admin/manage', async () => {
        service.login.mockImplementation(() => Promise.resolve(userMock.administrator));
  
        const { history, user } = renderWithRouter(<Login />);
        history.push = jest.fn();
  
        const emailInput = screen.getByRole('textbox', { name: /email/i });
        const passwordInput = screen.getByLabelText(/senha/i);
        const loginButton = screen.getByRole('button', { name: /entrar/i });
    
        await user.type(emailInput, USER_EMAIL);
        await user.type(passwordInput, USER_PASSWORD); 
        await user.click(loginButton);

        await waitFor(() => {
          expect(history.push).toBeCalledWith({
            hash: '',
            pathname: '/admin/manage',
            search: '',
          }, undefined);
        });
      });
    });

    describe('as seller', () => {
      afterEach(() => { localStorage.removeItem('user') });

      it('should redirect to /seller/orders', async () => {
        service.login.mockImplementation(() => Promise.resolve(userMock.seller));
  
        const { history, user } = renderWithRouter(<Login />);
        history.push = jest.fn();
  
        const emailInput = screen.getByRole('textbox', { name: /email/i });
        const passwordInput = screen.getByLabelText(/senha/i);
        const loginButton = screen.getByRole('button', { name: /entrar/i });
    
        await user.type(emailInput, USER_EMAIL);
        await user.type(passwordInput, USER_PASSWORD); 
        await user.click(loginButton);

        await waitFor(() => {
          expect(history.push).toBeCalledWith({
            hash: '',
            pathname: '/seller/orders',
            search: '',
          }, undefined);
        });
      });
    });

    describe('with invalid user email or password', () => {
      it('should show error message', async () => {
        service.login.mockImplementation(() => Promise.resolve(undefined));
        const { user } = renderWithRouter(<Login />);
      
        const emailInput = screen.getByRole('textbox', { name: /email/i });
        const passwordInput = screen.getByLabelText(/senha/i);
        const loginButton = screen.getByRole('button', { name: /entrar/i });
    
        await user.type(emailInput, 'wrong@email.com');
        await user.type(passwordInput, 'wrong_password');
    
        await act(async () => {
          await user.click(loginButton);
        });
    
        const errorElement = await screen.findByRole('alert');
        expect(errorElement).toBeInTheDocument();
      });
    });
  });
});
