import React, { useContext } from 'react';
import CustomerContext from '../context/CustomerContext';
import CheckoutTableHead from './CheckoutTableHead';
import CheckoutTableRow from './CheckoutTableRow';
import { Table, TableBody } from '../styles/checkout';
import AppContext from '../context/AppContext';

export default function CheckoutTable() {
  const { cart } = useContext(CustomerContext);
  const { theme } = useContext(AppContext);

  const isDarkMode = theme === 'dark';

  return (
    <Table isDarkMode={ isDarkMode }>
      <CheckoutTableHead />
      <TableBody>
        { cart.map((product, index) => (
          <CheckoutTableRow
            product={ product }
            index={ index }
            key={ index }
          />
        )) }
      </TableBody>
    </Table>
  );
}
