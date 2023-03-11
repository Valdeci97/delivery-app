import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

import { ToastContainer } from 'react-toastify';
import Provider from '../../context/Provider';
import CustomerProvider from '../../context/CustomerProvider';

export default function renderWithRouter(component) {
  const history = createMemoryHistory();
  return ({
    user: userEvent.setup(),
    ...render(
      <Provider>
        <CustomerProvider>
          <Router location={ history.location } navigator={ history }>
            { component }
            <ToastContainer />
          </Router>
        </CustomerProvider>
      </Provider>,
    ),
    history,
  });
}
