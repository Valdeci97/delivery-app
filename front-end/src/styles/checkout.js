import styled from 'styled-components';

export const Container = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const OrderTitle = styled.h1`
  align-self: center;
  color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
  font-size: 2.5rem;
  font-weight: unset;
  margin-bottom: 1rem;

  @media screen and (max-width: 360px) {
    font-size: 1.75rem;
  }

  @media screen and (min-width: 361px) and (max-width: 440px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    font-size: 2.25rem;
  }
`;

export const OrderTotal = styled.h1`
  align-self: center;
  border-radius: 0.5rem;
  color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
  font-size: 2rem;
  font-weight: 400;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
  width: 25%;

  span {
    font-size: 2rem;
  }

  @media screen and (max-width: 360px) {
    font-size: 1.5rem;
    
    span {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 361px) and (max-width: 440px) {
    font-size: 1.75rem;
    
    span {
      font-size: 1.75rem;
    }
  }
`;

export const TableContainer = styled.div`
  align-self: center;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const Table = styled.table`
  color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
  margin-top: 0.5rem;
  width: 100%;
`;

export const TableHead = styled.thead`
  font-size: 5rem;

  @media screen and (max-width: 360px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 361px) and (max-width: 440px) {
    font-size: 2.25rem;
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    font-size: 2.5rem;
  }

  @media screen and (min-width: 541px) and (max-width: 680px) {
    font-size: 3.25rem;
  }

  @media(min-width: 681px) and (max-width: 800px) {
    font-size: 0.9rem;
  }

  @media(min-width: 801px) and (max-width: 1000px) {
    font-size: 1rem;
  }
`;

export const TableBody = styled.tbody`
  font-size: 5rem;
  text-align: center;

  @media screen and (max-width: 360px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 361px) and (max-width: 440px) {
    font-size: 2.25rem;
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    font-size: 2.5rem;
  }

  @media screen and (min-width: 541px) and (max-width: 680px) {
    font-size: 3.25rem;
  }

  @media(min-width: 681px) and (max-width: 800px) {
    font-size: 0.9rem;
  }

  @media(min-width: 801px) and (max-width: 1000px) {
    font-size: 1rem;
  }
`;

export const RemoveButton = styled.button`
  background-color: ${(props) => (props.isDarkMode ? '#7D4F7D' : '#34AD58aa')};
  border: solid 1px #ffffff80;
  border-radius: 0.25rem;
  color: #fff;
  height: 3.5rem;
  width: 25%;

  &:hover {
    cursor: pointer;
  }

  img {
    width: 50%;
  }

  @media screen and (max-width: 360px) {
    height: 1.75rem;
    width: 30%;

    img {
      width: 75%;
    }
  }

  @media screen and (min-width: 361px) and (max-width: 440px) {
    height: 2.5rem;
    width: 30%;

    img {
      width: 75%;
    }
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    height: 3rem;
    width: 40%;

    img {
      width: 70%;
    }
  }

  @media screen and (min-width: 541px) and (max-width: 680px) {
    height: 3.5rem;
    width: 35%;

    img {
      width: 60%;
    }
  }

  @media(min-width: 681px) and (max-width: 800px) {
    font-size: 1rem;
    heigth: 1.2rem;
    width: 4.5rem;
  }

  @media(min-width: 801px) and (max-width: 1000px) {
    font-size: 1.1rem;
    height: 1.25rem;
    width: 5rem;
  }
`;
