import styled from 'styled-components';

export const Details = styled.h1`
  color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
  font-size: 3rem;
  margin-left: 2rem;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 440px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 441px) and (max-width: 680px) {
    font-size: 2.5rem;
  }
`;

export const OrderContainer = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2rem;
  width: 90%;

  @media screen and (max-width: 440px) {
    width: 95%;
  }
`;

export const CompanyInfo = styled.div`
  align-items: center;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  span {
    color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
  }

  @media screen and (max-width: 440px) {
    height: 5rem;
  }
`;

export const OrderText = styled.span`
  font-size: 2.5rem;
  margin-left: 1rem;
  text-align: center;

  @media screen and (max-width: 360px) {
    font-size: 1.1rem;
    margin-left: 0.25rem;
  }

  @media screen and (min-width: 361px) and (max-width: 440px) {
    font-size: 1.25rem;
    margin-left: 0.5rem;
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    font-size: 1.4rem;
    margin-left: 0.5rem;
  }

  @media screen and (min-width: 541px) and (max-width: 680px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 681px) and (max-width: 800px) {
    font-size: 1.75rem;
  }

  @media screen and (min-width: 801px) and (max-width: 1000px) {
    font-size: 2rem;
  }
`;

export const DeliveryButton = styled.button`
  margin-right: 1rem;
  background-color: ${(props) => (props.isDarkMode ? '#7D4F7D' : '#34AD58aa')};
  border: solid 1px #ffffff40;
  border-radius: 0.25rem;
  color: #fff;
  cursor: pointer;
  font-size: 1.75rem;
  font-weight: bold;
  height: 4rem;
  padding: 0.25rem 0.5rem;
  width: 30%;

  &:disabled:hover {
    cursor: not-allowed;
    font-size: 0;
  }

  &:disabled:hover::after {
    content: 'Pedido não saiu para entrega';
    font-size: 1.75rem;
  }

  @media screen and (max-width: 440px) {
    font-size: 0.85rem;
    height: 60%;
    margin-left: 0.25rem;

    &:disabled:hover::after {
      font-size: 0.75rem;
    }
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    font-size: 1rem;
    height: 50%;
    margin-left: 0.25rem;

    &:disabled:hover::after {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 541px) and (max-width: 680px) {
    font-size: 1.2rem;
    height: 50%;

    &:disabled:hover::after {
      font-size: 1.2rem;
    }
  }

  @media screen and (min-width: 681px) and (max-width: 800px) {
    font-size: 1.3rem;
    height: 40%;

    &:disabled:hover::after {
      font-size: 1.3rem;
    }
  }

  @media screen and (min-width: 801px) and (max-width: 1000px) {
    font-size: 1.4rem;
    height: 40%;

    &:disabled:hover::after {
      font-size: 1.3rem;
    }
  }
`;

export const Price = styled.h1`
  color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
  font-size: 2rem;
  margin: 0.4rem;
  margin-right: 0.4rem;
  text-align: center;
  
  span {
    font-size: 2rem;
  }

  @media screen and (max-width: 360px) {
    font-size: 1rem;

    span {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    font-size: 1.25rem;

    span {
      font-size: 1.25rem;
    }
  }

  @media screen and (min-width: 541px) and (max-width: 680px) {
    font-size: 1.4rem;

    span {
      font-size: 1.4rem;
    }
  }

  @media screen and (min-width: 681px) and (max-width: 800px) {
    font-size: 1.5rem;

    span {
      font-size: 1.5rem;
    }
  }

  @media(min-width: 801px) and (max-width: 1000px) {
    font-size: 1.75rem;

    span {
      font-size: 1.75rem;
    }
  }
`;
