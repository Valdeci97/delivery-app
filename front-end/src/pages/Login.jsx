import { Navigate } from 'react-router-dom';

import {
  localStorageUser,
} from '../utils/localStorage/localStorage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

export default function Login() {
  if (!localStorageUser()) {
    return (
      <>
        <Header showRegisterButton />
        <LoginForm />
        <Footer />
      </>
    );
  }

  switch (localStorageUser().role) {
  case 'administrator':
    return (
      <Navigate to="/admin/manage" replace />
    );
  case 'customer':
    return (
      <Navigate to="/customer/products" replace />
    );
  default:
    return (
      <Navigate to="/seller/orders" replace />
    );
  }
}
