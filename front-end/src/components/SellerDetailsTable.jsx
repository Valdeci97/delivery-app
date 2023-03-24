import { useContext } from 'react';
import PropTypes from 'prop-types';
import DetailsTableHead from './DetailsTableHead';
import SellerDetailsTableRow from './SellerDetailsTableRow';
import { Table } from '../styles/sellerOrderDetails';
import AppContext from '../context/AppContext';

export default function DetailsTable({ cart }) {
  const { theme } = useContext(AppContext);

  return (
    <Table isDarkMode={ theme === 'dark' }>
      <DetailsTableHead />
      <tbody>
        { cart.map((product, index) => (
          <SellerDetailsTableRow
            product={ product }
            index={ index }
            key={ index }
          />
        )) }
      </tbody>
    </Table>
  );
}

DetailsTable.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
    SaleProduct: PropTypes.shape({
      quantity: PropTypes.number,
    }),
  })).isRequired,
};
