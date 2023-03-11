jest.mock('../utils/api/service');

import '@testing-library/jest-dom';
import React from 'react';
import { screen, waitFor, act } from '@testing-library/react';

import Register from '../pages/Register';
import renderWithRouter from './renderWithRouter';
import * as service from '../utils/api/service';
import userMock from './mocks/user';

const USER_NAME = 'valid_user_name';
const USER_EMAIL = 'user@user.com';
const USER_PASSWORD = 'user*Password4';

describe('Test Register page without navigation', () => {
  beforeEach(() => renderWithRouter(<Register />));
  it('Should have the right screen elements', () => {
    const title = screen.getByRole('heading', { name: /delivery app/i, level: 1 });
    const nameInput = screen.getByPlaceholderText(/seu nome/i);
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const passwordInput = screen.getByLabelText(/senha/i);
    const roleInput = screen.getByLabelText(/tipo/i);
    const registerButton = screen.getByRole('button', { name: /cadastrar/i });

    expect(title).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(roleInput).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });
});

// describe('Test Register page with navigation', () => {
//   let userAction;
//   let hist;
//   describe('as customer', () => {
//     beforeEach(async () => {
//       const { history, user } = renderWithRouter(<Register />);
//       userAction = user;
//       hist = history;
//       hist.push = jest.fn();
//     });
  
//     afterEach(() => { localStorage.removeItem('user') })
  
//     // it.only('should call service.register', async () => {
//     //   const nameInput = screen.getByPlaceholderText(/seu nome/i);
//     //   const emailInput = screen.getByRole('textbox', { name: /email/i });
//     //   const passwordInput = screen.getByLabelText(/senha/i);
//     //   const registerButton = screen.getByRole('button', { name: /cadastrar/i });

//     //   await service.register.mockResolvedValue(userMock.customer);

//     //   await userAction.type(emailInput, USER_EMAIL);
//     //   await userAction.type(passwordInput, USER_PASSWORD);
//     //   await userAction.type(nameInput, USER_NAME);
//     //   await userAction.click(registerButton);

//       // await act(async () => {
//       //   expect(service.register).toHaveBeenCalled();
//       // });
//     // });
  
//     // it('should call service.register with user name, email and password', () => {
//     //   expect(service.register)
//     //   .toHaveBeenCalledWith(USER_NAME, USER_EMAIL, USER_PASSWORD);
//     // });
  
//     it('should redirect to /customer/products', async () => {
//       const registerButton = screen.getByRole('button', { name: /cadastrar/i });
//       await userAction.click(registerButton);

//       await waitFor(() => {
//         expect(hist.pathname).toBe('/register');
//       });
//     });
//   });
// });

describe('registering already registered user', () => {
  it('should show error message', async () => {
    service.register.mockImplementation(() => Promise.resolve(undefined));
    const { user } = renderWithRouter(<Register />);
  
    const nameInput = screen.getByRole('textbox', { name: /nome/i });
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const passwordInput = screen.getByLabelText(/senha/i);
    const registerButton = screen.getByRole('button', { name: /cadastrar/i });
    let errorElement = screen.queryByText(/usuário já cadastrado!/i);
  
    await user.type(nameInput, 'already_registered_name');
    await user.type(emailInput, 'already_registered@email.com');
    await user.type(passwordInput, USER_PASSWORD);

    expect(errorElement).not.toBeInTheDocument();

    await act(async () => {
      await user.click(registerButton);
    });

    errorElement = await screen.findByRole('alert');

    expect(errorElement).toBeInTheDocument();
  });
});
