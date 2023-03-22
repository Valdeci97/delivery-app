import styled from 'styled-components';

export const TableContainer = styled.div`
  align-self: center;
  display: flex;
  width: 95%;
`;

export const Table = styled.table`
  color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
  font-size: 10rem;
  margin-top: 0.25rem;
  width: 100%;

  @media screen and (max-width: 360px) {
    font-size: 3.75rem;
  }

  @media screen and (min-width: 361px) and (max-width: 440px) {
    font-size: 5rem;
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    font-size: 5.5rem;
  }

  @media screen and (min-width: 541px) and (max-width: 680px) {
    font-size: 5.75rem;
  }

  @media screen and (min-width: 681px) and (max-width: 800px) {
    font-size: 6.25rem;
  }

  @media screen and (min-width: 801px) and (max-width: 1000px) {
    font-size: 7rem;
  }
`;

export const TableBody = styled.tbody`
  text-align: center;
`;
