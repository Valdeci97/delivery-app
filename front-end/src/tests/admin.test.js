jest.mock('../utils/api/service');

import '@testing-library/jest-dom';
import { screen, act } from '@testing-library/react';

import AdminManage from '../pages/AdminManage';
import renderWithRouter from './renderWithRouter';
import userMock from './mocks/user';
import * as service from '../utils/api/service';

const { user, token } = userMock.administrator;
const localStorageAdmin = { ...user, token };

const USER_NAME = 'valid_user_name';
const USER_EMAIL = 'user@user.com';
const USER_PASSWORD = 'user_password';

describe('Admin page', () => {
  afterEach(() => jest.resetAllMocks());

  describe('nav bar', () => {
    let hist;
    let userEvent;

    beforeEach(() => {
      localStorage.setItem('user', JSON.stringify(localStorageAdmin));
      const { history, user } = renderWithRouter(<AdminManage />);
      hist = history;
      userEvent = user;
    });
    
    afterEach(() => {
      localStorage.removeItem('user');
    });
    
    it('should have the expected elements', () => {
      const manageLink = screen.getByRole('link', { name: /gerenciar usuários/i });
      const nameHeading = screen.getByRole('heading', { name: userMock.administrator.user.name });
      const logoutButton = screen.getByRole('button', { name: /sair/i});
      
      expect(manageLink).toBeInTheDocument();
      expect(nameHeading).toBeInTheDocument();
      expect(logoutButton).toBeInTheDocument();
    });

    describe('logout button', () => {
      it('should clear localStorage', async () => {
        const logoutButton = screen.getByRole('button', { name: /sair/i});
        await userEvent.click(logoutButton);

        expect(localStorage.getItem('user')).toBe(null);
        expect(localStorage.getItem('carrinho')).toBe(null);
      });

      it('should redirect to /login', async () => {
        const logoutButton = screen.getByRole('button', { name: /sair/i});
        await userEvent.click(logoutButton);

        const { pathname } = hist.location;
        expect(pathname).toBe('/login');
      });
    });
  });

  describe('admin register form', () => {
    beforeEach(() => {
      localStorage.setItem('user', JSON.stringify(localStorageAdmin));
      renderWithRouter(<AdminManage />);
    });
    
    afterEach(() => {
      localStorage.removeItem('user');
    });

    it('should have the right screen elements', () => {
      const title = screen.getByRole('heading',
        {  name: /cadastrar nova pessoa usuária/i },
      );
      const nameInput = screen.getByRole('textbox', { name: /nome/i });
      const emailInput = screen.getByRole('textbox', { name: /email/i });
      const passwordInput = screen.getByText(/senha/i);
      const selectRole = screen.getByRole('combobox', {  name: /tipo/i });
      const registerButton = screen.getByRole('button', { name: /cadastrar/i });

      expect(title).toBeInTheDocument();
      expect(nameInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(selectRole).toBeInTheDocument();
      expect(selectRole.value).toBe('customer');
      expect(registerButton).toBeInTheDocument();
    });
  });

  describe('users list', () => {
    beforeEach(() => {
      localStorage.setItem('user', JSON.stringify(localStorageAdmin));
    });
    
    afterEach(() => {
      localStorage.removeItem('user');
    });

    describe('if there is any', () => {
      beforeEach(async () => {
        service.getAllUsers.mockImplementation(() => Promise.resolve(userMock.adminManage));
        await act(async () => {
          renderWithRouter(<AdminManage />);
        });
      });

      it('should have the right column headers', () => {
        const itemHeader = screen.getByRole('columnheader', { name: /item/i });
        const nameHeader = screen.getByRole('columnheader', { name: /nome/i });
        const emailHeader = screen.getByRole('columnheader', { name: /e\-mail/i });
        const typeHeader = screen.getByRole('columnheader', { name: /tipo/i });
        const deleteHeader = screen.getByRole('columnheader', { name: /excluir/i });
  
        expect(itemHeader).toBeInTheDocument();
        expect(nameHeader).toBeInTheDocument();
        expect(emailHeader).toBeInTheDocument();
        expect(typeHeader).toBeInTheDocument();
        expect(deleteHeader).toBeInTheDocument();
      });

      it('should call service.getAllUsers', () => {
        expect(service.getAllUsers).toHaveBeenCalledTimes(1);
      });

      it('should call service.getAllUsers with user token', () => {
        expect(service.getAllUsers)
        .toHaveBeenCalledWith(localStorageAdmin.token);
      });

      it('should have the expected elements', () => {
        const itemsNumber = screen.getAllByTestId(/admin_manage__element-user-table-item-number/i);
        const usersName = screen.getAllByTestId(/admin_manage__element-user-table-name/i);
        const usersEmail = screen.getAllByTestId(/admin_manage__element-user-table-email/i);
        const usersRole = screen.getAllByTestId(/admin_manage__element-user-table-role/i);
        const deleteButtons = screen.getAllByRole('button', { name: /excluir/i });
  
        const usersElements = [
          ...itemsNumber,
          ...usersName,
          ...usersEmail,
          ...usersRole,
          ...deleteButtons,
        ];
  
        usersElements.forEach((element) => {
          expect(element).toBeInTheDocument();
        });
        
        expect(itemsNumber).toHaveLength(2);
        expect(usersName).toHaveLength(2);
        expect(usersEmail).toHaveLength(2);
        expect(usersRole).toHaveLength(2);
        expect(deleteButtons).toHaveLength(2);
      });
    });

    describe('if there is none', () => {
      beforeEach(async () => {
        service.getAllUsers.mockImplementation(() => Promise.resolve([]));
        await act(async () => {
          renderWithRouter(<AdminManage />);
        });
      });

      it('should have the right column headers', () => {
        const itemHeader = screen.getByRole('columnheader', { name: /item/i });
        const nameHeader = screen.getByRole('columnheader', { name: /nome/i });
        const emailHeader = screen.getByRole('columnheader', { name: /e\-mail/i });
        const typeHeader = screen.getByRole('columnheader', { name: /tipo/i });
        const deleteHeader = screen.getByRole('columnheader', { name: /excluir/i });
  
        expect(itemHeader).toBeInTheDocument();
        expect(nameHeader).toBeInTheDocument();
        expect(emailHeader).toBeInTheDocument();
        expect(typeHeader).toBeInTheDocument();
        expect(deleteHeader).toBeInTheDocument();
      });

      it('should call service.getAllUsers', () => {
        expect(service.getAllUsers).toHaveBeenCalledTimes(1);
      });

      it('should call service.getAllUsers with user token', () => {
        expect(service.getAllUsers)
        .toHaveBeenCalledWith(localStorageAdmin.token);
      });

      it('should not have the expected elements', () => {
        const itemsNumber = screen.queryAllByTestId(/admin_manage__element-user-table-item-number/i);
        const usersName = screen.queryAllByTestId(/admin_manage__element-user-table-name/i);
        const usersEmail = screen.queryAllByTestId(/admin_manage__element-user-table-email/i);
        const usersRole = screen.queryAllByTestId(/admin_manage__element-user-table-role/i);
        const deleteButtons = screen.queryAllByRole('button', { name: /excluir/i });
        
        expect(itemsNumber).toHaveLength(0);
        expect(usersName).toHaveLength(0);
        expect(usersEmail).toHaveLength(0);
        expect(usersRole).toHaveLength(0);
        expect(deleteButtons).toHaveLength(0);
      });
    });
  });
});
