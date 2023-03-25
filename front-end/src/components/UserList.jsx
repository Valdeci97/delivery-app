import { useContext } from 'react';
import PropTypes from 'prop-types';
import { deleteById } from '../utils/api/service';
import { localStorageUser } from '../utils/localStorage/localStorage';
import * as S from '../styles/userList';
import AppContext from '../context/AppContext';

export default function UserList({ update, users }) {
  const { theme } = useContext(AppContext);
  const isDarkMode = theme === 'dark';

  const deleteUser = async (id) => {
    const { token } = localStorageUser();
    await deleteById(id, token);
    update();
  };

  return (
    <S.Container>
      <S.Table isDarkMode={ isDarkMode }>
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => (
              <tr key={ user.id }>
                <td
                  data-testid={ `admin_manage__element-user-table-item-number-${index}` }
                >
                  { index + 1 }
                </td>
                <td data-testid={ `admin_manage__element-user-table-name-${index}` }>
                  { user.name }
                </td>
                <td data-testid={ `admin_manage__element-user-table-email-${index}` }>
                  { user.email }
                </td>
                <td data-testid={ `admin_manage__element-user-table-role-${index}` }>
                  { user.role === 'customer' ? 'Cliente' : 'Vendedor' }
                </td>
                <td data-testid={ `admin_manage__element-user-table-remove-${index}` }>
                  <S.DeleteUserButton
                    onClick={ () => deleteUser(user.id) }
                    type="button"
                    isDarkMode={ isDarkMode }
                  >
                    EXCLUIR
                  </S.DeleteUserButton>
                </td>
              </tr>
            ))
          }
        </tbody>
      </S.Table>
    </S.Container>
  );
}

UserList.propTypes = {
  update: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      role: PropTypes.string,
      email: PropTypes.string,
    }),
  ).isRequired,
};
