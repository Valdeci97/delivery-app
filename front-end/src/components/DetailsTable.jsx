import { useContext } from 'react';
import PropTypes from 'prop-types';
import DetailsTableHead from './DetailsTableHead';
import DetailsTableRow from './DetailsTableRow';
import * as S from '../styles/customerDetailsTable';
import AppContext from '../context/AppContext';

export default function DetailsTable({ cart }) {
  const { theme } = useContext(AppContext);
  const isDarkMode = theme === 'dark';

  return (
    <S.TableContainer>
      <S.Table isDarkMode={ isDarkMode }>
        <DetailsTableHead />
        <S.TableBody>
          { cart.map((product, index) => (
            <DetailsTableRow
              product={ product }
              index={ index }
              key={ index }
            />
          )) }
        </S.TableBody>
      </S.Table>
    </S.TableContainer>
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
