import styled from 'styled-components';

export const TableData = styled.td`
  font-size: 2rem;

  @media screen and (max-width: 360px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 361px) and (max-width: 440px) {
    font-size: 1.25rem;
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    font-size: 1.4rem;
  }

  @media screen and (min-width: 541px) and (max-width: 680px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 681px) and (max-width: 800px) {
    font-size: 1.75rem;
  }
`;
